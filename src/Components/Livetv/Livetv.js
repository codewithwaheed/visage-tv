import React from "react";
import "./Livetv.css";
import LiveTvCard from "./LiveTvCard";
export default function LiveTv() {
  return (
    <div className="liveTvRow liveTV">
      <div className="secTitle">Live TV</div>
      <div className="tvCardFlex">
        <LiveTvCard />
      </div>
    </div>
  );
}
