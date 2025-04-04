import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bienvenida } from './app/pages/Bienvenida';
import { Ejercicios } from './app/pages/Ejercicios';

function App() {
  return (
    <div className='jumbo'>
      <div>
      <Bienvenida></Bienvenida>

      </div>
      
      <Ejercicios></Ejercicios>

    </div>
  );
}

export default App;
