import React from "react";

export default function LiveTvCard({
  count,
  image,
  name,
  description,
  location,
}) {
  return (
    <div className="liveTvCard">
      <div className="cardBadge">{count}</div>
      <div className="circle">
        <img className="img" alt="logo" src={image}></img>
      </div>
      <div className="content">
        <div className="title">{name}</div>
        <div className="desc">{description}</div>
        <div className="location">
          <img className="marker mr-2" alt="marker" src="/img/marker.svg"></img>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
