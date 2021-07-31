import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
export default function Player() {
  const [hide, sethide] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/contact-us") sethide(true);
    return () => {
      sethide(false);
    };
  }, [path]);
  return (
    <div className={hide ? "d-none" : ""}>
      <ReactPlayer
        width="100%"
        height="442px"
        style={{ padding: "20px 30px" }}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        controls={true}
      />
    </div>
  );
}
