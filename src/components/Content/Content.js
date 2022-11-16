import style from  './Content.module.css';
import React, { useState } from 'react';
import SimpleMap from './Map';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import whatsappIcon from '../../utils/whatsappIcon.ico';
import calendarIcon from '../../utils/calendarIcon.ico';
import copypasteIcon from '../../utils/copypasteIcon.ico';


function Content() {
  const number = "+5491125336221"
  const text = "hola, si voy a tu fiesta!"
  const [b,setb] = useState(0)

  //AQUI INTRODUCIR CBU Y ALIAS
  const CBU = '1430001713019572830012'
  const ALIAS = "coco.melon.lata"
  
  //Aquí debes poner las coordenadas del centro del mapa y el zoom
  const defaultProps = {
    center: {
      lat: -34.62623298094043,
      lng: -58.626851830512045
    },
    zoom: 15
  };

  //Aquí debes poner las coordenadas del marcador de la ubicación de la fiesta y el texto
  const lat = -34.62623298094043
  const lng = -58.626851830512045
  const marcText = "Ubicacion"

  function setB(){
    if(b==0)setb(1)
    else setb(0)
  }

  return (
    <div className={style.Content}>
      <div>
        <div className={style.name}><p>TOMAS</p></div>
        <div className={style.title}><p>#21</p></div>
        <div className={style.title}><p>FEST</p></div>
      </div>
      <div>
        <h2 className={style.title2}>22:00 PM</h2>
      </div>
      <div>
        <h2 className={style.title2}>¿ Lugar ?</h2>
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
        <div>
          <h2 className={style.title3}> ⚠ Hay picina ⚠ </h2>
        </div>
      </div>
     
      <div>
          <a href={`https://wa.me/${number}?text=${text}`}>
            <button class={style.whatsappButton}>
            <img class={style.icon} src={whatsappIcon}/>
              Envía un mensaje para confirmar
              <img class={style.icon} src={whatsappIcon}/>
            </button>
          </a>
        </div>
        <div className={style.calendar}>
          <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NTV1a2psZnUyNjBlNWdjM2h0ZG5ldDFtdWYgdG9tYXNiZW5qYW1pbjExN0Bt&tmsrc=tomasbenjamin117%40gmail.com">
            <button class={style.calendarButton}>
              <img class={style.icon} src={calendarIcon}/>
              Agendá el evento a tu calendario
              <img class={style.icon} src={calendarIcon}/>
            </button>
          </a>
        </div>
        <div className={style.buttonPres} onClick={setB}><p>Regalos</p></div>
        {b==1?
        <div className={style.cardPresent}>
          <div className={style.CBU}>
            <p className={style.title2}>
              CBU: {CBU}
            </p>
              <CopyToClipboard text={CBU} ><p className={style.Bcopy}><img src={copypasteIcon}/></p></CopyToClipboard>
          </div>
          <div className={style.ALIAS}>
            <p className={style.title2}>
              Alias: {ALIAS}
            </p>
            <CopyToClipboard text={ALIAS} ><p className={style.Bcopy}><img src={copypasteIcon}/></p></CopyToClipboard>
          </div>
        </div>
      :null
        }
    </div>
  );
}

export default Content;
