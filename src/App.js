// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Cody Sidlik</h1>
      </header>
      <main className="main">
        <div className="text-view">
          {/* Code or specs go here */}
          <pre>
            {`
              Material: Aluminum
              Dimensions: 10x10x5 cm
              Tolerance: ±0.01 mm
            `}
          </pre>
        </div>
        <div className="model-view">
          {/* 3D model goes here */}
          <p>3D Model Placeholder</p>
        </div>
      </main>
      <footer className="footer">
        {/* Hiring and pricing info go here */}
        <p>Contact us for hiring and pricing details.</p>
      </footer>
    </div>
  );
}

export default App;
