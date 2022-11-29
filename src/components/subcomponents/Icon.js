import React from "react";
import "./Icon.css"

export function Icon(props){
    return (
        <a href={props.href}>
            <img src={props.image} alt={props.alt} />
        </a>
    )
}