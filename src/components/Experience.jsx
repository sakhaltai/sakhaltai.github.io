// src/components/Experience.jsx
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import {
  Window,
  WindowHeader,
  WindowContent,
  Tabs,
  Tab,
  TabBody,
} from 'react95';

const jobs = [
  { title: 'Senior Motion Designer', content: <p>Worked on X, Y, Z…</p> },
  { title: 'Instructor', content: <p>Taught VCT278 at SCC…</p> },
  // add more entries here
];

export default function Experience({
  position,
  onDrag,
  onStart,
  onMouseDown,
  zIndex,
}) {
  const [activeTab, setActiveTab] = useState(0);
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      bounds="parent"
      position={position}
      onDrag={onDrag}
      onStart={onStart}
    >
      <div
        ref={nodeRef}
        onMouseDown={onMouseDown}
        style={{
          position: 'absolute',
          zIndex,
        }}
      >
        <Window style={{ width: 500 }}>
          <WindowHeader className="window-header" style={{ cursor: 'move' }}>
            Experience
          </WindowHeader>
          <WindowContent>
            <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
              {jobs.map((job, i) => (
                <Tab key={i} value={i}>
                  {job.title}
                </Tab>
              ))}
            </Tabs>
            <TabBody style={{ marginTop: '1rem' }}>
              {jobs[activeTab].content}
            </TabBody>
          </WindowContent>
        </Window>
      </div>
    </Draggable>
  );
}
