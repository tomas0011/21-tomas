import './Content.css';
import React, { useState } from 'react';

function Content() {
  const [value, setValue] = useState(0)
  const [buttonClass, setButtonClass] = useState('button-color-1')

  const handlerOnClick = () => {
    setValue(value + 1)
    setButtonClass(`button-color-${Math.ceil(Math.random() * 10)}`)
  }

  return (
    <div className="Content">
      <h1>Aca va a estar la info de mi pumple</h1>
      <h3>Y tenemos contador {value}</h3>
      <button onClick={handlerOnClick} className={buttonClass}>no toques el boton</button>
    </div>
  );
}

export default Content;
