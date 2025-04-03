import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bienvenida } from './app/pages/Bienvenida';
import { Ejercicios } from './app/pages/Ejercicios';

function App() {
  return (
    <div className='jumbo'>
      <Bienvenida></Bienvenida>
      <Ejercicios></Ejercicios>

    </div>
  );
}

export default App;
