import { createContext } from "react";

const AppContext = createContext({
  currentState: "tv",
  setCurrentState: (state) => {},
  activeSideBar: false,
  setActiveSideBar: (state) => {},
});

export default AppContext;
