import React, { useState } from "react";

const Configure = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    relationship: "",
  });

  const [disabilities, setDisabilities] = useState({
    blindness: false,
    deafness: false,
    mobilityImpairment: false,
  });

  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleDisabilityChange = (e) => {
    setDisabilities({ ...disabilities, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Emergency Contact Info:", contactInfo);
    console.log("Disability Information:", disabilities);
    // Additional logic for form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Configure Settings</h2>
      <div>
        <h3>Emergency Contact Information</h3>
        {/* Emergency Contact Inputs */}
        {/* ... */}
      </div>
      <div>
        <h3>Disability Information</h3>
        <label>
          <input
            type="checkbox"
            name="blindness"
            checked={disabilities.blindness}
            onChange={handleDisabilityChange}
          />
          Blindness
        </label>
        <label>
          <input
            type="checkbox"
            name="deafness"
            checked={disabilities.deafness}
            onChange={handleDisabilityChange}
          />
          Deafness
        </label>
        <label>
          <input
            type="checkbox"
            name="mobilityImpairment"
            checked={disabilities.mobilityImpairment}
            onChange={handleDisabilityChange}
          />
          Mobility Impairment
        </label>
      </div>
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default Configure;
