// src/components/DemoReel.jsx
import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent } from 'react95';

export default function DemoReel({
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
          zIndex,
        }}
      >
        <Window style={{ width: 640 }}>
          <WindowHeader className="window-header" style={{ cursor: 'move' }}>
            Demo Reel
          </WindowHeader>
          <WindowContent style={{ padding: 0 }}>
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Demo Reel"
              frameBorder="0"
              allowFullScreen
            />
          </WindowContent>
        </Window>
      </div>
    </Draggable>
  );
}
