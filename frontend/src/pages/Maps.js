import React, { useRef, useEffect } from "react";
import 'ol/ol.css';
import { vectorLayer, olMap } from '../utils/mapConfig';

export default function Maps() {
  const mapDiv = useRef(null);

  useEffect(() => {
    olMap.setTarget(mapDiv.current);
    return () => olMap.setTarget(undefined);
  }, []);

  const handleShowMarkers = () => { 
    olMap.addLayer(vectorLayer)
  };

  return (
    <div>
      <button onClick={handleShowMarkers} className=" wmb-2 btn btn-primary">Crear markers</button>
      <div style={{ width: '500px', height: '500px' }}>
        <div id='map' ref={mapDiv}  style={{ width: '500px', height: '500px' }} />
      </div>
    </div>
  );
}
