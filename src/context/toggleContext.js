import { createContext } from "react";

const toggleContext = createContext({
  currentState: "tv",
  setCurrentState: (state) => {},
});

export default toggleContext;
