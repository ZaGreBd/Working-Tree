import React from "react";
import "./Link.css";

export function Link(props) {
  return (
    <a className="link" href={props.href} target="_blank" rel="noreferrer">
      <li>
        <img src={props.image} alt={props.alt} />
        <p>{props.media_name}</p>
      </li>
    </a>
  );
}
