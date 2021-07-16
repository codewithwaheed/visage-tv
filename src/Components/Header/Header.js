import React, { useContext } from "react";
import toggleContext from "../../context/toggleContext";
import "./Header.css";
function Header() {
  const { currentState, setCurrentState } = useContext(toggleContext);
  console.log("state", currentState);
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="/img/visage.svg" />
      </div>
      <div className="search_bar">
        <input
          class="input-text"
          id="Name"
          name="Name"
          placeholder="Search"
          type=""
          autocomplete=""
        />
        <img className="searchimg" src="/img/search.svg" />
      </div>
      <div className="twobtn">
        <button
          onClick={() => setCurrentState("tv")}
          className={
            currentState === "tv"
              ? "headerButton tv headerButtonActive"
              : "headerButton tv"
          }
        >
          Live Tv
        </button>
        <button
          onClick={() => setCurrentState("movie")}
          className={
            currentState === "movie"
              ? "headerButton  headerButtonActive"
              : "headerButton"
          }
        >
          Movies
        </button>
      </div>
      <div className="contactnoti">
        <button className="contactbtn">Contact</button>
        <img src="/img/notification.svg"></img>
      </div>
    </div>
  );
}

export default Header;
