import React, { useRef, useMemo } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

const modelDirectory = process.env.PUBLIC_URL + '/assets/models/';

const InnerModel = ({ filename, animate }) => {
  const obj = useLoader(OBJLoader, modelDirectory + filename);
  const meshRef = useRef();

  const material = useMemo(() => new MeshStandardMaterial({
    color: '#AAAAAA',
    dithering: true,
    metalness: 0.82,
    roughness: 0.2,
  }), []);

  useFrame(() => {
    if (animate && meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.005;
    }
  });

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = material;
      child.scale.set(0.02, 0.02, 0.02);
    }
  });

  return <primitive object={obj} ref={meshRef} />;
};

const DebuggableLight = ({ type, position, intensity, color, debug = false }) => {
  const lightProps = { position, intensity, color, castShadow: true };

  return (
    <>
      {type === 'directional' && <directionalLight {...lightProps} />}
      {type === 'ambient' && <ambientLight {...lightProps} />}
      {type === 'spot' && <spotLight {...lightProps} />}
      {debug && (
        <mesh position={position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} />
        </mesh>
      )}
    </>
  );
};

const ModelViewer = ({ filename, animate }) => {

  return (
    <Canvas>
      <DebuggableLight type="ambient" intensity={1.5} />
      <DebuggableLight type="directional" position={[10, 12, 0]} intensity={1} color="#CCFFFF" debug />
      <DebuggableLight type="directional" position={[-10, -12, 0]} intensity={1} color="#FFFFFF" debug />
      <InnerModel filename={filename} animate={animate} />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
