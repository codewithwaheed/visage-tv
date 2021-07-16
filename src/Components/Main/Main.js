import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import Livetv from "../Livetv/Livetv";
function Main() {
  return (
    <div className="Main">
      <Sidebar />
      <Livetv />
    </div>
  );
}

export default Main;
