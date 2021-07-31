import React, { useContext, useState } from "react";
import "./sideBar.css";
import FeaturedIcon from "../../assets/images/featuredIcon";
import ComingSoonIcon from "../../assets/images/comingSoonIcon";
import EntertainmentIcon from "../../assets/images/entertainmentIcon";
import NewsIcon from "../../assets/images/newsIcon";
import RealityIcon from "../../assets/images/realityIcon";
import TvIcon from "../../assets/images/tvIcon";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const { activeSideBar, setActiveSideBar, currentState, setCurrentState } =
    useContext(AppContext);
  const [active, setActive] = useState("featured");

  const data = [
    { name: "featured", img: FeaturedIcon },
    { name: "Movies", img: TvIcon },
    { name: "Coming soon", img: ComingSoonIcon },
    { name: "Entertainment", img: EntertainmentIcon },
    { name: "News+Opinion", img: NewsIcon },
    { name: "Reality", img: RealityIcon },
  ];

  //   make component
  const makeComponent = (Component, isActive) => {
    const color1 = "#fff";
    const color2 = "#808191";
    return <Component color={isActive ? color1 : color2} />;
  };

  //   main return
  return (
    <>
      <div className="sideBar d-none d-md-block">
        <div className="innerSideBar">
          {data.map((item, index) => {
            const isActive = item.name === active;
            return (
              <div
                key={index}
                onClick={() => setActive(item.name)}
                className={isActive ? "item itemActive" : "item"}
              >
                <div className="circle">
                  {makeComponent(item.img, isActive)}
                </div>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-block d-md-none">
        <div
          onClick={() => setActiveSideBar(false)}
          className={
            activeSideBar ? "sideBarModal sideBarModalActive" : "sideBarModal"
          }
        ></div>
        <div
          className={
            activeSideBar
              ? "sideBar sideBarM  sideBarMActive"
              : "sideBar sideBarM "
          }
        >
          <div className="search_bar w-100 my-3 ">
            <input
              class="input-text"
              id="Name"
              name="Name"
              placeholder="Search"
              type=""
              autocomplete=""
            />
            <img
              className="searchimg pointer"
              src="/img/search.svg"
              style={{ right: "10px", top: "8px" }}
            />
          </div>
          <Link to="/">
            <div className="twobtn centerFlex mb-3">
              <button
                onClick={() => {
                  setCurrentState("tv");
                  setActiveSideBar(false);
                }}
                className={
                  currentState === "tv"
                    ? "headerButton tv headerButtonActive"
                    : "headerButton tv"
                }
                style={{ padding: "6px 24px" }}
              >
                Live Tv
              </button>
              <button
                onClick={() => {
                  setCurrentState("movie");
                  setActiveSideBar(false);
                }}
                className={
                  currentState === "movie"
                    ? "headerButton  headerButtonActive"
                    : "headerButton"
                }
                style={{ padding: "6px 24px" }}
              >
                Movies
              </button>
            </div>
          </Link>

          <div className="innerSideBar">
            {data.map((item, index) => {
              const isActive = item.name === active;
              return (
                <div
                  key={index}
                  onClick={() => {
                    setActive(item.name);
                    setActiveSideBar(false);
                  }}
                  className={isActive ? "item itemActive" : "item"}
                >
                  <div className="circle">
                    {makeComponent(item.img, isActive)}
                  </div>
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
