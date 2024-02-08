/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCYyYs7kxrmli4Un92kzy5j_tbINpXGyu0`; 
        script.async = true;
    script.onload = initializeMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    const initialLocation = { lat: 23.78616040739036, lng: 27.827448596169056 };

    new window.google.maps.Map(document.getElementById('map'), {
      center: initialLocation,
      zoom: 4,
    });
  };

  return <div id="map" style={{ height: '180px', width: '329px' }} />;
};

export default Map;
