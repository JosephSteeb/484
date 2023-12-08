import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationPointerIcon from './assets/location-pointer.svg';

const locationIcon = new L.Icon({
  iconUrl: locationPointerIcon,
  iconRetinaUrl: locationPointerIcon,
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-icon'
});

const Monitor = () => {
// Coordinates for Voiland College of Engineering and Architecture
const position = [46.7304, -117.1752];

return (
  <MapContainer center={position} zoom={17} style={{ height: '500px', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position} icon={locationIcon}>
      <Popup>
        Voiland College of Engineering and Architecture, Pullman, WA
      </Popup>
    </Marker>
  </MapContainer>
);
};

export default Monitor;
