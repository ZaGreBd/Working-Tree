import React from "react";

import { Links } from "./Links";
import { Icons } from "./Icons";
import { Musics } from "./Musics";
import Photo from "../assets/photos/eu.jpg";

export function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        <div className="home_profile">
          <div className="home_function">
            <p>Desenvolvedor Front-end</p>
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
        <Musics />
      </div>
      <div className="home_links">
        <Links />
        <Icons />
      </div>
    </div>
  );
}
