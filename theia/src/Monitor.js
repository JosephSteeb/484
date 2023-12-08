import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationPointerIcon from "./assets/locationPointer.png";
import "./Monitor.css"; // Import the CSS file

const locationIcon = new L.Icon({
  iconUrl: locationPointerIcon,
  iconRetinaUrl: locationPointerIcon,
  iconSize: new L.Point(30, 30),
  className: "leaflet-div-icon",
});

const Monitor = () => {
  // Coordinates for Voiland College of Engineering and Architecture
  const position = [46.7304, -117.165];

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showEmergencyContacted, setShowEmergencyContacted] = useState(false);
  const [showEmergencyPopup, setShowEmergencyPopup] = useState(false);

  const handleAlertButtonClick = () => {
    setModalMessage("Emergency Alerted!");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleContactEmergencyClick = () => {
    // Show the emergency popup
    setShowEmergencyPopup(true);
  };
  

  const handleCloseEmergencyContacted = () => {
    // Close the "Emergency Service Contacted" popup
    setShowEmergencyContacted(false);
  };

  const handleCloseEmergencyPopup = () => {
    // Close the emergency popup
    setShowEmergencyPopup(false);
  };

  return (
    <div>
      <MapContainer
        center={position}
        zoom={17}
        style={{ height: "500px", width: "100%" }}
      >
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
        <div className="modal-container">
          <p>{modalMessage}</p>
          <div className="button-column">
            <div style={{ padding: "10px" }}>Alert Status</div>
            <button className="plain-button">Pending........</button>
          </div>
          <button onClick={handleContactEmergencyClick}>
            Contact Emergency Service 911
          </button>
          <button onClick={handleCloseModal} className="end-alert-button">
            End Alert
          </button>
        </div>
      )}

      {/* Emergency Service Contacted Popup */}
      {showEmergencyContacted && (
        <div className="emergency-contacted-popup">
          <p>Emergency Service Contacted</p>
          <button
            onClick={handleCloseEmergencyContacted}
            className="plain-button"
          >
            Close
          </button>
        </div>
      )}

      {/* Emergency Popup */}
      {showEmergencyPopup && (
        <div className="emergency-popup">
          <p>Emergency Service Popup</p>
          <button onClick={handleCloseEmergencyPopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Monitor;
