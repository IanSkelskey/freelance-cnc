// App.js
import React, { useState } from 'react';
import CubeCanvas from './three/Cube';

function App() {
  const [animate, setAnimate] = useState(true);

  return (
    <div className="flex flex-col items-center bg-primary text-text">
      <header className="w-full">
        <h1 className="text-center text-3xl text-accent1 p-4">Freelance CNC</h1>
      </header>
      <main className="w-full flex bg-secondary">
        <div className="w-1/2 p-4">
          {/* Code or specs go here */}
          <pre className="font-mono text-accent2">
            {`
              Material: Aluminum
              Dimensions: 10x10x5 cm
              Tolerance: ±0.01 mm
            `}
          </pre>
        </div>
        <div className="w-1/2 p-4 text-center">
          {/* 3D model goes here */}
          <div>
            <CubeCanvas animate={animate} />
          </div>
          <div>
            <button className='bg-accent1 p-2 rounded-sm text-white' onClick={() => setAnimate(!animate)}>
              {animate ? 'Stop Animation' : 'Start Animation'}
            </button>
          </div>
        </div>
      </main>
      <footer className="w-full text-primary text-center p-4 bg-accent2">
        {/* Hiring and pricing info go here */}
        <p>Contact us for hiring and pricing details.</p>
      </footer>
    </div>
  );
}

export default App;
