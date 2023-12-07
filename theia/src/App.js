import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Configure from "./Configure";
import Monitor from "./Monitor";

function App() {
  const [displayedContent, setDisplayedContent] = useState("Home"); // default content

  const handleHome = () => setDisplayedContent("Home");
  const handleConfigure = () => setDisplayedContent(<Configure />);
  const handleMonitor = () => setDisplayedContent(<Monitor />);
  const handleContact = () =>
    setDisplayedContent(
      <>
        <div>"Contact This number for assistance"</div>
        <div>xxx-xxx-xxxx</div>
      </>
    );

  return (
    <div className="App">
      <NavBar
        onHomeClick={handleHome}
        onConfigureClick={handleConfigure}
        onContactClick={handleContact}
        onMonitorClick={handleMonitor}
      />
      <div>{displayedContent}</div>
    </div>
  );
}

export default App;
