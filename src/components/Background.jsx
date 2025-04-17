// src/components/Background.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  from { background-position: 0 0; }
  to   { background-position: -1000px 500px; }
`;

const StarField = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/assets/star1.png') repeat;
  animation: ${scroll} 60s linear infinite;
  z-index: -1;
`;

export default function Background() {
  return <StarField />;
}
