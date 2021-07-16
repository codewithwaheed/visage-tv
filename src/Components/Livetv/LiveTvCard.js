import React from "react";

export default function LiveTvCard() {
  return (
    <div className="liveTvCard">
      <div className="cardBadge">123</div>
      <div className="circle">
        <img className="img" alt="logo" src="/img/tvIcon1.svg"></img>
      </div>
      <div className="content">
        <div className="title">NCIS</div>
        <div className="desc">out of the discreption</div>
        <div className="location">
          <img className="marker mr-2" alt="marker" src="/img/marker.svg"></img>
          <span>Canada, Alberta.v</span>
        </div>
      </div>
    </div>
  );
}
