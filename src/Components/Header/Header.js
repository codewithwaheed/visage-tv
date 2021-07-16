import React from "react";
import "./Header.css";
function Header() {
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
        <button className="livetv">Live Tv</button>
        <button className="movies">Movies</button>
      </div>
      <div className="contactnoti">
        <button className="contactbtn">Contact</button>
        <img src="/img/notification.svg"></img>
      </div>
    </div>
  );
}

export default Header;
