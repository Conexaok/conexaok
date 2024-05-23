import React, { useState, useRef, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapPage = () => {
  const center = {
    lat: -7.9231409,
    lng: -34.8220655,
  };

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState(center);
    const markerRef = useRef(null);
    const eventHandlers = useMemo(() => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }), []);

    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d);
    }, []);

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable ? 'O marcador é arrastável' : 'Clique aqui para tornar o marcador arrastável'}
          </span>
        </Popup>
      </Marker>
    );
  }

  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={true} style={{ height: '50vh', width: '100%', borderRadius: '1%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
    </MapContainer>
  );
};

export default MapPage;
