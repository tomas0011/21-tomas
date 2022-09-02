import './Content.css';
import React, { useState } from 'react';

function Content() {
  const [valor, setValor] = useState(0)

  const handlerOnClick = () => {
    setValor(valor + 1)
  }

  return (
    <div className="Content">
      <h1>Aca va a estar la info de mi pumple</h1>
      <h3>Y tenemos contador {valor}</h3>
      <button onClick={handlerOnClick}>no toques el boton</button>
    </div>
  );
}

export default Content;
