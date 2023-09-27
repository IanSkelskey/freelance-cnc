// App.js
import React, { useState } from 'react';
import ModelViewer from './three/ModelViewer';

function App() {
  const [animate, setAnimate] = useState(false);

  function PlayPauseButton() {
    return (
      <button className='absolute top-5 left-5 p-4 bg-accent1 rounded-md text-white' onClick={() => setAnimate(!animate)}>{(animate) ? <PauseIcon color="#ffffff" /> : <PlayIcon color="#ffffff" />}</button>
    );
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-primary to-secondary'>
      <ModelViewer filename='test.obj' animate={animate} />
      <div className='absolute top-5'>
        <h1 className='text-5xl font-bold text-accent1'>Freelance CNC</h1>
      </div>
      <PlayPauseButton />
    </div>

  );
}

export default App;

// Flat play icon 
function PlayIcon({ color }) {
  return (
    <svg className='w-8 h-8' viewBox='0 0 24 24'>
      <path fill={color} d='M8 5v14l11-7z' />
    </svg>
  );
}

function PauseIcon({ color }) {
  return (
    <svg className='w-8 h-8' viewBox='0 0 24 24'>
      <path fill={color} d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
    </svg>
  );
}