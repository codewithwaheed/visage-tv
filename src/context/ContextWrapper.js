import React, { useState } from "react";
import AppContext from "./AppContext";

export default function ContextWrapper(props) {
  const [currentState, setCurrentState] = useState("tv");
  const [activeSideBar, setActiveSideBar] = useState(false);

  return (
    <AppContext.Provider
      value={{ currentState, setCurrentState, activeSideBar, setActiveSideBar }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
