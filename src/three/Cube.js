// Cube.js
import React from 'react';
import ModelContainer from './ModelContainer';

const Cube = () => {
  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={'#58A6FF'} wireframe />
    </mesh>
  );
};

export default function CubeCanvas() {
  return (
    <ModelContainer>
      <Cube />
    </ModelContainer>
  );
}
