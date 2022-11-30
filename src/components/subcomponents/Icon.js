import React from "react";
// import "./Icon.css"

export function Icon(props){
    return (
        <a className="icon" href={props.href} target="_blank" rel="noreferrer">
            <img src={props.image} alt={props.alt} />
        </a>
    )
}