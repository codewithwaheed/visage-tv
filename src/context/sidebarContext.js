import { createContext } from "react";

const sideBarContext = createContext({
  activeSideBar: false,
  setActiveSideBar: (state) => {},
});

export default sideBarContext;
