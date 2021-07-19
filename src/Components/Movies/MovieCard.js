import React from "react";

export default function MovieCard({ title, image }) {
  return (
    <div
      className="movieCard"
      style={{
        backgroundImage: `url(${image}`,
      }}
    >
      <div className="name">{title}</div>
    </div>
  );
}
