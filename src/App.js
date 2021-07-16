import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ContactUs from "./pages/contactUs/ContactUs";
import ToggleContext from "./context/toggleContext";
import Sidebar from "./Components/Sidebar/sideBar";
export default function App() {
  const [currentState, setCurrentState] = useState("tv");
  return (
    <div>
      <ToggleContext.Provider value={{ currentState, setCurrentState }}>
        <Header />
        <div className="mainDiv">
          <Sidebar />
          <div className="contentDiv">
            <Route path="/" exact component={LandingPage} />
            <Route path="/contact-us" exact component={ContactUs} />
          </div>
        </div>
      </ToggleContext.Provider>
    </div>
  );
}
