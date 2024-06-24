import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  const mascards = () => {
    setContador(contador + 1);
  };

  const generarTarjetas = () => {
    const tarjetas = [];
    for (let i = 0; i < contador; i++) {
      tarjetas.push(
        <div key={i} className="tarjeta">
          Tarjeta {i + 1}
        </div>
      );
    }
    return tarjetas;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>tienda</h1>
        <button onClick={mascards}>Agregar prodcuto</button>
        <p>Cantidad de productos {contador}</p>
        <div className="tarjetas-container">
          {generarTarjetas()}
        </div>
      </header>
    </div>
  );
}

export default App;