// src/App.jsx

import React, { useState, useRef, useLayoutEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import styled from 'styled-components';

import Background from './components/Background';
import Hero from './components/Hero';
import DemoReel from './components/DemoReel';
import Experience from './components/Experience';

/**
 * Set each window’s width/height here.
 * When you add a new window, drop its dims in this map.
 */
const windowDims = {
  hero: { width: 400, height: 150 },
  demo: { width: 640, height: 360 },
  exp: { width: 500, height: 300 },
};

/**
 * Tiles windows left‑to‑right, wrapping rows when needed.
 */
function tileLayout(dims, containerWidth, gap = 20) {
  const positions = {};
  let x = gap,
    y = gap,
    rowHeight = 0;

  for (const key of Object.keys(dims)) {
    const { width, height } = dims[key];

    if (x + width + gap > containerWidth) {
      x = gap;
      y += rowHeight + gap;
      rowHeight = 0;
    }

    positions[key] = { x, y };
    rowHeight = Math.max(rowHeight, height);
    x += width + gap;
  }

  return positions;
}

const GlobalStyles = createGlobalStyle`
  ${styleReset}

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/assets/fonts/ms_sans_serif.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/assets/fonts/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const Workspace = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  const workspaceRef = useRef(null);
  const [positions, setPositions] = useState({});

  // z‑index state: start each window at a unique level
  const initialZ = Object.keys(windowDims).reduce((acc, key, i) => {
    acc[key] = i + 1; // hero:1, demo:2, exp:3 …
    return acc;
  }, {});
  const [zIndices, setZIndices] = useState(initialZ);

  // On mount, measure and tile
  useLayoutEffect(() => {
    if (!workspaceRef.current) return;
    const { clientWidth } = workspaceRef.current;
    setPositions(tileLayout(windowDims, clientWidth));
  }, []);

  // Update one window’s position during drag
  const handleDrag = (key) => (e, data) => {
    setPositions((p) => ({ ...p, [key]: { x: data.x, y: data.y } }));
  };

  // whenever a window is clicked or starts dragging, bring it to front
  const bringToFront = (key) => () => {
    setZIndices((z) => {
      const maxZ = Math.max(...Object.values(z));
      return { ...z, [key]: maxZ + 1 };
    });
  };

  // Re‑tile everything
  const resetLayout = () => {
    if (!workspaceRef.current) return;
    const { clientWidth } = workspaceRef.current;
    setPositions(tileLayout(windowDims, clientWidth));
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Workspace ref={workspaceRef}>
          <Background />

          <Hero
            position={positions.hero}
            onDrag={handleDrag('hero')}
            onStart={bringToFront('hero')}
            onMouseDown={bringToFront('hero')}
            zIndex={zIndices.hero}
          />

          <DemoReel
            position={positions.demo}
            onDrag={handleDrag('demo')}
            onStart={bringToFront('demo')}
            onMouseDown={bringToFront('demo')}
            zIndex={zIndices.demo}
          />

          <Experience
            position={positions.exp}
            onDrag={handleDrag('exp')}
            onStart={bringToFront('exp')}
            onMouseDown={bringToFront('exp')}
            zIndex={zIndices.exp}
          />

          <button
            onClick={resetLayout}
            style={{
              position: 'fixed',
              bottom: '1rem',
              right: '1rem',
              padding: '0.5rem 1rem',
              background: '#fff',
              border: '2px solid #000',
              cursor: 'pointer',
              zIndex: 9999,
            }}
          >
            Reset Windows
          </button>
        </Workspace>
      </ThemeProvider>
    </>
  );
}
