import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const { currentState, setCurrentState, setActiveSideBar, activeSideBar } =
    useContext(AppContext);
  return (
    <div className="Navbar">
      {/* SideBarButton */}
      <div className="d-inline d-md-none">
        <div
          onClick={() => setActiveSideBar((prev) => !prev)}
          className={
            activeSideBar
              ? " dashboardNavaBarButton activeSideBar "
              : "dashboardNavaBarButton"
          }
        >
          <div className="dashboardNavBarLine dashboardNavBarLine1"></div>
          <div className="dashboardNavBarLine dashboardNavBarLine2"></div>
          <div className="dashboardNavBarLine dashboardNavBarLine3"></div>
        </div>
      </div>
      {/* SideBarButton ends */}
      <div className="logo">
        <img src="/img/visage.svg" />
      </div>
      <div className="search_bar d-none d-md-flex">
        <input
          class="input-text"
          id="Name"
          name="Name"
          placeholder="Search"
          type=""
          autocomplete=""
        />
        <img className="searchimg pointer" src="/img/search.svg" />
      </div>
      <Link to="/">
        <div className="twobtn d-none d-md-flex">
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
      </Link>
      <div className="contactnoti">
        <Link to="/contact-us">
          <button className="headerButton d-none d-md-block">Contact</button>
        </Link>

        <img
          src="/img/notification.svg"
          alt="notiIcon"
          className="pointer"
        ></img>
      </div>
    </div>
  );
}

export default Header;
