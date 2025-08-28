

import React, { useState,useRef, useEffect } from 'react';
import {  MapStyle, config  } from '@maptiler/sdk';
import * as maptilersdk from '@maptiler/sdk';
import { WindLayer } from '@maptiler/weather';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function Map() {


 const weatherLayer = new WindLayer();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lat: 139.753, lng: 35.6844 };
  const zoom = 8;
  maptilersdk.config.apiKey = 'OrlWXEjYDmLpSd5zUFI6';

const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
useEffect(() => {



navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      




  



console.log(long)


   if (map.current) return; // stops map from intializing more than once

});





    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [long,lat],
      zoom: zoom
    });





 const weatherLayer = new WindLayer();


  map.current.on('load', function () {
  map.current.setPaintProperty("Water", 'fill-color', "rgba(0, 0, 0, 0.4)");
  map.current.addLayer(weatherLayer, 'Water');
  
});








  }, [long,lat,zoom]);






  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

