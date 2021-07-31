import React, { useContext } from "react";
import "./landingPage.css";
import LiveTv from "../../Components/Livetv/Livetv";
import Movies from "../../Components/Movies/Movies";
import AppContext from "../../context/AppContext";
import Player from "../../Components/Player/Player";

export default function LandingPage(props) {
  const { currentState } = useContext(AppContext);

  // main return
  return (
    <>
      <div>{currentState === "tv" ? <LiveTv /> : <Movies {...props} />}</div>
    </>
  );
}
