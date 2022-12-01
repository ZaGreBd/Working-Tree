import React from "react";

export function Icon(props){
    return (
        <a className="icon" href={props.href} target="_blank" rel="noreferrer">
            <img src={props.image} alt={props.alt} />
        </a>
    )
}