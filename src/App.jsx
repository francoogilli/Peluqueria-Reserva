// App.jsx
import React from 'react';
import GoogleCalendarIframe from './components/GoogleCalendarIframe';
import './App.css'; // Importa un archivo CSS para personalizar el estilo si es necesario

const App = () => {
  return (
    <div className="app-container">
      <GoogleCalendarIframe />
    </div>
  );
};

export default App;
