import React from "react";
import "./Home.css";

import { Links } from "./Links";
import { Icons } from "./Icons";
import Photo from "../assets/photos/shanks.jpg";

export function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        <div className="home_profile">
          <div className="home_function">
            <p>DEVELOPER FRONT END</p>
          </div>
          <div className="home_name">
            <p>Pedro Neto</p>
          </div>
          <div className="home_photo">
            <img src={Photo} alt="Imagem do desenvolvedor" />
          </div>
        </div>
      </div>
      <div className="home_music">

      </div>
      <div className="home_links">
        <Links/>
        <Icons/>
      </div>
    </div>
  );
}
