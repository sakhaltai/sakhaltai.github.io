// src/pages/JapaneseArticles.tsx

import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { loadJapanesePost } from "../content/japanese/loadJapanesePost";
import { japanesePosts } from "../content/japanese/posts";

// Optional syntax highlighting (only if installed):
let rehypeHighlight: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  rehypeHighlight = require("rehype-highlight").default;
} catch {
  // ok
}

export default function JapaneseArticles() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const fallbackId = japanesePosts[0]?.id ?? null;
  const initialId = id ?? fallbackId;

  const [activeId, setActiveId] = useState<string | null>(initialId);
  const [md, setMd] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Keep activeId in sync with URL param
  useEffect(() => {
    if (!fallbackId) return;

    // If URL has no id, go to first
    if (!id) {
      setActiveId(fallbackId);
      return;
    }

    // If URL id exists but isn't valid, replace with first valid
    const exists = japanesePosts.some((p) => p.id === id);
    if (!exists) {
      navigate(`/jp/${fallbackId}`, { replace: true });
      setActiveId(fallbackId);
      return;
    }

    setActiveId(id);
  }, [id, fallbackId, navigate]);

  const activeMeta = useMemo(() => {
    if (!activeId) return null;
    return japanesePosts.find((p) => p.id === activeId) ?? null;
  }, [activeId]);

  // Load markdown when active article changes
  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!activeMeta) return;

      setLoading(true);
      setErr(null);

      try {
        const raw = await loadJapanesePost(activeMeta.file);
        if (!cancelled) setMd(raw);
      } catch (e: any) {
        if (!cancelled) setErr(e?.message ?? "Failed to load markdown.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [activeMeta]);

  function selectArticle(nextId: string) {
    setActiveId(nextId);
    navigate(`/jp/${nextId}`);
  }

  if (!fallbackId) {
    return (
      <main className="grid gap-6 md:gap-8">
        <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
            Japanese Articles
          </h1>
          <p className="text-sm text-[var(--muted)] mt-2">
            No posts found. Add markdown files and entries in posts.ts.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="grid gap-6 md:gap-8">
      <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card">
        <header className="space-y-3 md:space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
            Japanese Articles
          </h1>
          <p className="text-sm md:text-base text-[var(--muted)] max-w-prose">
            日本語の記事まとめ。タブをクリックすると、その記事が表示されます。
            URLも更新されるので共有できます。
          </p>
        </header>

        {/* Pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {japanesePosts.map((post) => {
            const isActive = post.id === activeId;
            return (
              <button
                key={post.id}
                type="button"
                onClick={() => selectArticle(post.id)}
                className={[
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs md:text-sm transition",
                  "max-w-full",
                  isActive
                    ? "border-cyan-300/80 bg-white text-black shadow-sm"
                    : "border-[var(--border)] bg-[var(--bg-elev)] text-[var(--muted)] hover:border-cyan-300/70",
                ].join(" ")}
              >
                <span className="truncate">{post.title}</span>
                {post.date && (
                  <span className="text-[0.65rem] md:text-[0.7rem] opacity-70">
                    {post.date}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active article card */}
        {activeMeta && (
          <article className="mt-6 rounded-2xl bg-[var(--bg-elev)] border border-[var(--border)] p-4 md:p-6 shadow-card">
            <header className="space-y-1">
              <h2 className="text-xl md:text-2xl font-semibold">
                {activeMeta.title}
              </h2>
              {activeMeta.subtitle && (
                <p className="text-sm text-[var(--muted)]">
                  {activeMeta.subtitle}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-2 mt-1">
                {activeMeta.date && (
                  <span className="text-[0.7rem] md:text-xs text-[var(--muted)]">
                    {activeMeta.date}
                  </span>
                )}
                {activeMeta.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] md:text-[0.7rem] px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="mt-4">
              {loading && (
                <p className="text-sm text-[var(--muted)]">Loading…</p>
              )}
              {err && (
                <p className="text-sm text-red-300">Failed to load: {err}</p>
              )}

              {!loading && !err && (
                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={rehypeHighlight ? [rehypeHighlight] : []}
                  >
                    {stripFrontmatter(md)}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </article>
        )}
      </section>
    </main>
  );
}

function stripFrontmatter(markdown: string): string {
  if (!markdown.startsWith("---")) return markdown;

  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return markdown;

  const after = markdown.indexOf("\n", end + 4);
  return after === -1 ? "" : markdown.slice(after + 1);
}
