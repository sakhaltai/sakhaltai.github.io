// src/components/NoteDroplets.tsx
import React, { useState, useEffect, MouseEvent, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dialog, Transition } from "@headlessui/react";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { FolderPlusIcon, FolderMinusIcon } from "@heroicons/react/24/solid";

/* ------------------------------------------------------------------ */
/*  1. Data model                                                     */
/* ------------------------------------------------------------------ */
interface Note {
  id: string;
  text?: string; // leaf
  title?: string; // group
  children?: Note[];
  collapsed?: boolean;
}

/* helpers to build notes */
const newLeaf = (text: string): Note => ({
  id: uuidv4(),
  text: text.trim(),
  collapsed: false,
});
const newGroup = (title: string, children: Note[] = []): Note => ({
  id: uuidv4(),
  title: title.trim(),
  children,
  collapsed: false,
});

/* ------------------------------------------------------------------ */
/*  2. Component                                                      */
/* ------------------------------------------------------------------ */
export default function NoteDroplets() {
  /* state ----------------------------------------------------------- */
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditing] = useState<string | null>(null);
  const [editingText, setEdText] = useState("");

  /* dnd-kit sensors -------------------------------------------------- */
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } })
  );

  /* ------------------------------------------------------------------ */
  /*  3. Persistence                                                   */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const saved = localStorage.getItem("droplets");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("droplets", JSON.stringify(notes));
  }, [notes]);

  /* ------------------------------------------------------------------ */
  /*  4. CRUD                                                          */
  /* ------------------------------------------------------------------ */
  const handleAdd = () => {
    if (!input.trim()) return;
    setNotes([newLeaf(input), ...notes]);
    setInput("");
  };

  const handleRename = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    const current = findNote(notes, id);
    if (!current?.children) return;
    const newName = window.prompt("Group name:", current.title || "");
    if (!newName) return;
    setNotes((prev) => updateNote(prev, id, (n) => ({ ...n, title: newName })));
  };

  const openEdit = (id: string, text = "") => {
    setEditing(id);
    setEdText(text);
    setIsOpen(true);
  };
  const saveEdit = () => {
    if (!editingId) return;
    setNotes((prev) =>
      updateNote(prev, editingId, (n) => ({ ...n, text: editingText }))
    );
    setIsOpen(false);
  };

  /* ------------------------------------------------------------------ */
  /*  5. Drag-end handler                                              */
  /* ------------------------------------------------------------------ */
  const handleDragEnd = (evt: DragEndEvent) => {
    const { active, over } = evt;
    if (!over || active.id === over.id) return;

    const draggedId = String(active.id);
    const targetId = String(over.id);

    const { tree: withoutDragged, note: dragged } = extractNote(
      notes,
      draggedId
    );
    if (!dragged) return;

    const target = findNote(withoutDragged, targetId);
    const isGroup = !!target?.children;
    let nextTree: Note[];

    if (isGroup) {
      /* drop inside existing group as first child */
      nextTree = updateNote(withoutDragged, targetId, (n) => ({
        ...n,
        children: [dragged, ...(n.children ?? [])],
      }));
    } else {
      /* prompt to make a brand-new group wrapper */
      const gName = window.prompt("Enter group name:");
      if (!gName) return;
      nextTree = updateNote(withoutDragged, targetId, (n) =>
        newGroup(gName, [n, dragged])
      );
    }
    setNotes(nextTree);
  };

  /* ------------------------------------------------------------------ */
  /*  6. Hover actions                                                 */
  /* ------------------------------------------------------------------ */
  const promoteToGroup = (id: string) =>
    setNotes((prev) =>
      updateNote(prev, id, (n) => (n.children ? n : { ...n, children: [] }))
    );

  const ungroupNote = (id: string) =>
    setNotes((prev) => liftChildren(prev, id));

  /* ------------------------------------------------------------------ */
  /*  7. Render helpers                                                */
  /* ------------------------------------------------------------------ */
  const HoverBar = ({
    onGroup,
    onUngroup,
  }: {
    onGroup: () => void;
    onUngroup: () => void;
  }) => (
    <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition flex gap-1">
      <button onClick={onGroup}>
        <FolderPlusIcon className="h-4 w-4 text-white/80" />
      </button>
      <button onClick={onUngroup}>
        <FolderMinusIcon className="h-4 w-4 text-white/80" />
      </button>
    </div>
  );

  /* sortable wrapper -------------------------------------------------- */
  function SortableCard({ note }: { note: Note }) {
    const { setNodeRef, attributes, listeners, transform, transition } =
      useSortable({ id: note.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {renderCard(note)}
      </div>
    );
  }

  /* recursive list renderer ------------------------------------------ */
  const renderList = (items: Note[]) => (
    <SortableContext
      items={items.map((i) => i.id)}
      strategy={verticalListSortingStrategy}
    >
      {items.map((n) => (
        <SortableCard key={n.id} note={n} />
      ))}
    </SortableContext>
  );

  /* single card ------------------------------------------------------- */
  const renderCard = (note: Note) => (
    <div className="relative group p-4 mb-3 rounded-xl shadow bg-gray-800 text-white">
      <HoverBar
        onGroup={() => promoteToGroup(note.id)}
        onUngroup={() => ungroupNote(note.id)}
      />

      {note.children ? (
        <>
          <h4
            className="font-semibold mb-2 cursor-pointer"
            onClick={(e) => handleRename(e, note.id)}
          >
            {note.title}
          </h4>

          {!note.collapsed && renderList(note.children)}
        </>
      ) : (
        <div onClick={() => openEdit(note.id, note.text)}>{note.text}</div>
      )}
    </div>
  );

  /* ------------------------------------------------------------------ */
  /*  8. JSX                                                           */
  /* ------------------------------------------------------------------ */
  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="max-w-md mx-auto mt-10 p-4">
          <h1 className="text-2xl font-bold mb-4">Quick Note Organizer</h1>

          <div className="flex mb-6">
            <input
              className="flex-grow p-2 border rounded-l-md"
              placeholder="Type an idea here…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            />
            <button
              className="px-4 bg-blue-600 text-white rounded-r-md"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>

          {renderList(notes)}
        </div>
      </DndContext>

      {/* modal --------------------------------------------------------- */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                <Dialog.Title className="text-lg font-medium text-gray-900">
                  Edit Note
                </Dialog.Title>

                <textarea
                  className="w-full p-2 mt-4 border rounded"
                  rows={4}
                  value={editingText}
                  onChange={(e) => setEdText(e.target.value)}
                />

                <div className="flex justify-end gap-2 mt-4">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  9. Pure helpers (no React)                                        */
/* ------------------------------------------------------------------ */
function updateNote(list: Note[], id: string, up: (n: Note) => Note): Note[] {
  return list.map((n) =>
    n.id === id
      ? up(n)
      : n.children
      ? { ...n, children: updateNote(n.children, id, up) }
      : n
  );
}

/* pull a node out, return both the pruned tree and the node */
function extractNote(list: Note[], id: string): { tree: Note[]; note?: Note } {
  let extracted: Note | undefined;
  const tree = list.reduce<Note[]>((acc, n) => {
    if (n.id === id) {
      extracted = n;
      return acc;
    }
    const clone = { ...n };
    if (n.children) {
      const res = extractNote(n.children, id);
      clone.children = res.tree;
      if (res.note) extracted = res.note;
    }
    acc.push(clone);
    return acc;
  }, []);
  return { tree, note: extracted };
}

/* find by id */
function findNote(list: Note[], id: string): Note | undefined {
  for (const n of list) {
    if (n.id === id) return n;
    if (n.children) {
      const found = findNote(n.children, id);
      if (found) return found;
    }
  }
}

/* lift children & remove wrapper */
function liftChildren(tree: Note[], id: string): Note[] {
  return tree.flatMap((n) =>
    n.id === id && n.children
      ? n.children
      : n.children
      ? [{ ...n, children: liftChildren(n.children, id) }]
      : [n]
  );
}
