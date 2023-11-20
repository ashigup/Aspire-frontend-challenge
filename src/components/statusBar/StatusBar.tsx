import React from "react";
import "./StatusBar.css";
const StatusBar = () => {
  return (
    <div className="statusbar">
      <div className="net-wifi">📶GS 🛜</div>
      <div className="time">9:41 AM</div>
      <div className="battery">58% 🔋</div>
    </div>
  );
};

export default StatusBar;
