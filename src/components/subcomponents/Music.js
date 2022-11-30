import React from "react";
import "./Music.css";

export function Music(props) {
  return (
    <iframe
      className="music"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={props.title}
      src={props.src}
    ></iframe>
  );
}
