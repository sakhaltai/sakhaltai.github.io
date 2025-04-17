// src/components/Hero.jsx
import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent, Button } from 'react95';

export default function Hero({
  position,
  onDrag,
  onStart,
  onMouseDown,
  zIndex,
}) {
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
          zIndex, // brings it above the others
        }}
      >
        <Window>
          <WindowHeader className="window-header" style={{ cursor: 'move' }}>
            Welcome.exe
          </WindowHeader>
          <WindowContent>
            <p>Hey, I’m Nic—motion designer & developer.</p>
            <Button onClick={() => window.open('/resume.pdf')}>Resume</Button>
          </WindowContent>
        </Window>
      </div>
    </Draggable>
  );
}
