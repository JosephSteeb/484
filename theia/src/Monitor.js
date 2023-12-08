import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationPointerIcon from './assets/locationPointer.png';

const locationIcon = new L.Icon({
  iconUrl: locationPointerIcon,
  iconRetinaUrl: locationPointerIcon,
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-icon'
});

const Monitor = () => {
// Coordinates for Voiland College of Engineering and Architecture
const position = [46.7304, -117.165];

const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleAlertButtonClick = () => {
    setModalMessage('Emergency Alerted!');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
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
      <button onClick={handleAlertButtonClick}>Alert</button>

      {showModal && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', width: '80%', height: '70%', zIndex: 1000 }}>
          <p>{modalMessage}</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Monitor;
