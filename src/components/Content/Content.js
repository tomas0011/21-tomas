import style from  './Content.module.css';
import React, { useState } from 'react';
import SimpleMap from './Map';
import swal from '@sweetalert/with-react'

function Content() {
  const [value, setValue] = useState(0)
  const [comentario, setComentario] = useState('')
  const number = "+543874736563"
  const text = "hola si voy a tu fiesta "
  
  //Aquí debes poner las coordenadas del centro del mapa y el zoom
  const defaultProps = {
    center: {
      lat: -24.854499,
      lng: -65.460731
    },
    zoom: 17
  };

  //Aquí debes poner las coordenadas del marcador de la ubicación de la fiesta y el texto
  const lat = -24.854499
  const lng = -65.460731
  const marcText = "Lugar de la fiesta"


  function Presents(){
    swal(
      <div>
        <h1>Para dejarme un regalo:</h1>
        <p>
          CBU: 300015487521547851
        </p>
        <p>
          Alias: TomasV
        </p>
        <a href={`Link1`}><p>🎁 Regalo 1</p></a>
        <a href={`Link2`}><p>🎁 Regalo 2</p></a>
      </div>
    )
  }

  return (
    <div className={style.Content}>
      <div>
        <div className={style.name}><p>Tomas's</p></div>
        <div className={style.title}><p>POOL</p></div>
        <div className={style.title}><p>PARTY</p></div>
      </div>
      <div>
        <h2 className={style.title2}>¿ Dónde ?</h2>
      </div>
      <div className={style.gif}>
        <img src='https://i.pinimg.com/originals/b6/fd/18/b6fd1893a54478eb393d13c5d1994ef7.gif' alt='gif'/>
      </div>
      <SimpleMap
        defaultProps= {defaultProps}
        lat = {lat}
        lng = {lng}
        marcText = {marcText}
      />
      <div className={style.traje}>
        <div className={style.traje1}>
        </div>
        <div className={style.traje2}>
        </div>
        <div>
          <h2 className={style.title3}> ⚠ No olvides llevar traje de baño</h2>
        </div>
      </div>       
      <div className={style.buttons}>
        <div className={style.flechaWp}><p>Envía un mensaje para confirmar </p></div>
      </div>
     
      <div>
          <a href={`https://wa.me/${number}?text=${text}`}>
            <div className={style.wp}></div>
          </a>
        </div>
        
        <div className={style.buttonPres} onClick={Presents}><p>Regalos</p></div>
    </div>
  );
}

export default Content;
