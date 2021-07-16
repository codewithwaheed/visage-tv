import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";
import Livetv from "./Components/Livetv/Livetv";

export default function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
      <Sidebar />
      <Livetv />
    </div>
  );
}
