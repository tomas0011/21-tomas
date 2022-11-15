import React from "react";
import GoogleMapReact from 'google-map-react';
import style from  './Content.module.css';
const Marcador = ({ text }) => <div className={style.marcador}><p>{text}</p></div>;

export default function SimpleMap({defaultProps,lat,lng,marcText}){

  return (
    // Important! Always set the container height explicitly
    <div className={style.map}>
    
      <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyB296GccNp2d58UJuM5x5FDGDLehoMX3iw"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marcador
          lat={lat}
          lng={lng}
          text={marcText}
        />
      </GoogleMapReact>

    </div>
  );
}