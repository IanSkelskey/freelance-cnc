// App.js
import React from 'react';
import CubeCanvas from './three/Cube';

function App() {
  return (
    <div className="flex flex-col items-center">
      <header className="w-full">
        <h1 className="text-center text-3xl">Cody Sidlik</h1>
      </header>
      <main className="w-full flex">
        <div className="w-1/2">
          {/* Code or specs go here */}
          <pre className="font-mono">
            {`
              Material: Aluminum
              Dimensions: 10x10x5 cm
              Tolerance: ±0.01 mm
            `}
          </pre>
        </div>
        <div className="w-1/2">
          {/* 3D model goes here */}
          <CubeCanvas />
        </div>
      </main>
      <footer className="w-full">
        {/* Hiring and pricing info go here */}
        <p>Contact us for hiring and pricing details.</p>
      </footer>
    </div>
  );
}

export default App;
