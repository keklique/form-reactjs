import React from 'react';
import logo from './logo.svg';
import './App.css';
import SectorForm from './Components/SectorForm';

function App() {
  return (
    <div className="App w-full h-screen flex flex-col justify-center items-center bg-slate-500">
      <SectorForm/>
    </div>
  );
}

export default App;
