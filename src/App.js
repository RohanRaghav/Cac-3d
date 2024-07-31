// App.js
import React from 'react';
import './App.css';

function App() {
  const text = "Connecting all circles";
  const textArray = text.split('');
  const radius = 500; // Adjusted radius for better spacing

  return (
    <div>
      <video className="video" src="Globe.mp4" autoPlay muted />
      <div className="coloring">
        {textArray.map((char, index) => (
          <span
            key={index}
            style={{
              transform: `
                rotateY(${(index * 360) / textArray.length}deg)
                translateZ(${radius}px)
                rotateY(${-(index * 360) / textArray.length}deg)
              `,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
