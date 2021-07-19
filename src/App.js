import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ContactUs from "./pages/contactUs/ContactUs";
import Sidebar from "./Components/Sidebar/sideBar";
import ContextWrapper from "./context/ContextWrapper";
export default function App() {
  return (
    <div>
      <ContextWrapper>
        <Header />
        <div className="mainDiv">
          <Sidebar />
          <div className="contentDiv">
            <Route path="/" exact component={LandingPage} />
            <Route path="/contact-us" exact component={ContactUs} />
          </div>
        </div>
      </ContextWrapper>
    </div>
  );
}
