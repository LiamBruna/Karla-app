import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const updateMessage = () => {
      const hours = new Date().getHours();
      if (hours >= 22 || hours < 6) {
        setMessage('BUENAS NOCHES MI WAWITA HERMOSA');
      } else if (hours >= 6 && hours < 12) {
        setMessage('BUENOS DÍAS MI PRINCESA');
      } else if (hours >= 12 && hours < 18) {
        setMessage('BUENAS TARDES MI AMOR');
      } else {
        setMessage('BUENAS NOCHES MI BB PRECIOSA');
      }
    };

    updateMessage();
    const interval = setInterval(updateMessage, 60000); // Actualiza cada minuto

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="container">
      <div className="glass">
        <div className="shine"></div>
      </div>
      <div className="thorns">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="leaves">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="petals">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="deadPetals">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <h4 className="texto">{message} ❤️</h4>
      </div>
    </div>
  );
}

export default App;