import React from "react";

const NavBar = ({
  onHomeClick,
  onConfigureClick,
  onContactClick,
  onMonitorClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: "lightgrey",
        padding: "10px",
      }}
    >
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onConfigureClick}>Configure</button>
      <button onClick={onContactClick}>Contact</button>
      <button onClick={onMonitorClick}>Monitor</button>
    </div>
  );
};

export default NavBar;
