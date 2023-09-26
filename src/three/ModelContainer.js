// ModelContainer.js
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Animation = ({ children, animate }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (animate && meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return <group ref={meshRef}>{children}</group>;
};

const ModelContainer = ({ children }) => {
  const [animate, setAnimate] = useState(true);

  return (
    <>
      <button onClick={() => setAnimate(!animate)}>
        {animate ? 'Stop Animation' : 'Start Animation'}
      </button>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Animation animate={animate}>
          {children}
        </Animation>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ModelContainer;
