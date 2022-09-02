import './Content.css';
import React, { useState } from 'react';
import comentariosRandom from './comentariosRandom';

function Content() {
  const [value, setValue] = useState(0)
  const [buttonClass, setButtonClass] = useState('button-color-1')
  const [comentario, setComentario] = useState('')
  

  const handlerOnClick = () => {
    setValue(value + 1)
    setButtonClass(`button-color-${Math.ceil(Math.random() * 10)}`)
    setComentario(comentariosRandom[Math.ceil(Math.random() * 20)])
  }

  return (
    <div className="Content">
      <h1>Aca va a estar la info de mi pumple</h1>
      <h3>Y tenemos contador de datos {value}</h3>
      <h4>{comentario}</h4>
      <button onClick={handlerOnClick} className={buttonClass}>no toques el boton</button>
    </div>
  );
}

export default Content;
