import style from  './Content.module.css';
import React, { useState } from 'react';
import SimpleMap from './Map';
import swal from '@sweetalert/with-react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './buttons/button';


function Content() {
  const number = "+543874736563"
  const text = "hola si voy a tu fiesta "
  const [b,setb] = useState(0)

  //AQUI DEBES INTRODUCIR LOS LINKS DE PAGO
  const link1 = "pegar aqui el link de pago 1"
  const link2 = "pegar aqui el link de pago 2"

  //AQUI INTRODUCIR CBU Y ALIAS
  const CBU = 300015487521547851
  const ALIAS = "AliasDeTomas"
  
  //Aquí debes poner las coordenadas del centro del mapa y el zoom
  const defaultProps = {
    center: {
      lat: -34.61572577271519,
      lng: -58.63448748068737
    },
    zoom: 17
  };

  //Aquí debes poner las coordenadas del marcador de la ubicación de la fiesta y el texto
  const lat = -34.61572577271519
  const lng = -58.63448748068737
  const marcText = "Lugar de la fiesta"




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
        <div className={style.flechaWp}><p>Agendá el evento a tu calendario </p></div>
        <div className={style.calendar}>
          <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NTV1a2psZnUyNjBlNWdjM2h0ZG5ldDFtdWYgdG9tYXNiZW5qYW1pbjExN0Bt&amp;tmsrc=tomasbenjamin117%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_es-419.gif"/></a>
        </div>
        <div className={style.buttonPres} onClick={()=>setb(1)}><p>Regalos🎁</p></div>
        {b==1?
        <div className={style.cardPresent}>
          <h3 className={style.title2}>Para dejarme un regalo:</h3> 
          <h3 className={style.title2}>Por Trasferencia:</h3> 
          <div className={style.CBU}>
            <p className={style.title2}>
              CBU: 300015487521547851
            </p>
              <CopyToClipboard text={CBU} ><p className={style.Bcopy}>📄</p></CopyToClipboard>
          </div>
          <div className={style.ALIAS}>
            <p className={style.title2}>
              Alias: AliasDeTomas
            </p>
            <CopyToClipboard text={ALIAS} ><p className={style.Bcopy}>📄</p></CopyToClipboard>
          </div>
          <h3 className={style.title2}>ó link de pago...</h3> 
          <div className={style.buttonsPresents}>
            <Button
              title={"Regalo 1 ->$5k<-"}
              link={link1}
            />
            <Button
              title={"Regalo 2 ->$10k<-"}
              link={link1}
            />
          </div>
        </div>
      :null
        }
    </div>
  );
}

export default Content;
