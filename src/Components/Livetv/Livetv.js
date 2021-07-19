import React from "react";
import "./Livetv.css";
import LiveTvCard from "./LiveTvCard";
export default function LiveTv() {
  // data
  const data = [
    {
      count: 123,
      image: "/img/tvIcon1.svg",
      name: "NCIS",
      description: "out of the discreption",
      location: "Canada, Alberta.v",
    },
    {
      count: 123,
      image: "/img/tvIcon2.svg",
      name: "NCIS",
      description: "out of the discreption",
      location: "Canada, Alberta.v",
    },
    {
      count: 123,
      image: "/img/tvIcon3.svg",
      name: "NCIS",
      description: "out of the discreption",
      location: "Canada, Alberta.v",
    },
    {
      count: 123,
      image: "/img/tvIcon1.svg",
      name: "NCIS",
      description: "out of the discreption",
      location: "Canada, Alberta.v",
    },
    {
      count: 123,
      image: "/img/tvIcon2.svg",
      name: "NCIS",
      description: "out of the discreption",
      location: "Canada, Alberta.v",
    },
    {
      count: 123,
      image: "/img/tvIcon3.svg",
      name: "NCIS",
      description: "out of the discreption",
      location: "Canada, Alberta.v",
    },
    {
      count: 123,
      image: "/img/tvIcon1.svg",
      name: "NCIS",
      description: "out of the discreption",
      location: "Canada, Alberta.v",
    },
    {
      count: 123,
      image: "/img/tvIcon2.svg",
      name: "NCIS",
      description: "out of the discreption",
      location: "Canada, Alberta.v",
    },
    {
      count: 123,
      image: "/img/tvIcon3.svg",
      name: "NCIS",
      description: "out of the discreption",
      location: "Canada, Alberta.v",
    },
  ];

  // main return
  return (
    <div className="liveTvRow liveTV">
      <div className="secTitle">Live TV</div>
      <div className="tvCardFlex">
        {data.map((item, index) => {
          return <LiveTvCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
