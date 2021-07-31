import React from "react";
import "./movie.css";
import MoviesList from "./MoviesList";
export default function Movies(props) {
  console.log(props.deviceType);
  const data = [
    { title: "GODS EGYPS", image: "/img/movie1.svg" },
    { title: "US", image: "/img/movie2.svg" },

    { title: "RONS GONE WRONG", image: "/img/movie3.svg" },
    { title: "JOHAN CATER", image: "/img/movie4.svg" },
  ];

  // main return
  return (
    <div className="moviesRow">
      <MoviesList data={data} title="Most Recent" {...props} />
      <MoviesList data={data} title="Most Recent" {...props} />
    </div>
  );
}
