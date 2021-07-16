import React, { useState } from "react";
import "./sideBar.css";
import FeaturedIcon from "../../assets/images/featuredIcon";
import ComingSoonIcon from "../../assets/images/comingSoonIcon";
import EntertainmentIcon from "../../assets/images/entertainmentIcon";
import NewsIcon from "../../assets/images/newsIcon";
import RealityIcon from "../../assets/images/realityIcon";
import TvIcon from "../../assets/images/tvIcon";
export default function Sidebar() {
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
    <div className="sideBar">
      <div className="innerSideBar">
        {data.map((item, index) => {
          const isActive = item.name === active;
          return (
            <div
              key={index}
              onClick={() => setActive(item.name)}
              className={isActive ? "item itemActive" : "item"}
            >
              <div className="circle">{makeComponent(item.img, isActive)}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
