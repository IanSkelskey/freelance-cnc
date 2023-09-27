// App.js
import React, { useState } from 'react';
import ModelViewer from './three/ModelViewer';

function App() {
  const [animate, setAnimate] = useState(true);

  function PlayPauseButton() {
    return (
      <button className='absolute top-5 left-5 p-4 bg-accent1 rounded-md text-white' onClick={() => setAnimate(!animate)}>{(animate)?'Stop':'Play'}</button>
    );
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <ModelViewer filename='test.obj' animate={animate} />
      <PlayPauseButton />
    </div>

  );
}

export default App;
