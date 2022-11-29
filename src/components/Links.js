import React from "react";
import "./Links.css";

import { Link } from "./subcomponents/Link";
import Globe from "../assets/icons/globe.svg";
import Pinterest_logo from "../assets/icons/pinterest.svg";
import Spotify_logo from "../assets/icons/spotify.svg";

export function Links() {
  return (
    <div className="links">
      <ul>
        <Link
          media_name="Portfólio"
          href="https://open.spotify.com/user/22ljhlejgkl7aqiwhg2vjlphq"
          image={Globe}
          alt="Ícone de globo"
        />
        <Link
          media_name="Pinterest"
          href="https://br.pinterest.com/pedrodindinho16/"
          image={Pinterest_logo}
          alt="Ícone do Pinterest"
        />
        <Link
          media_name="Spotify"
          href="https://open.spotify.com/user/22ljhlejgkl7aqiwhg2vjlphq"
          image={Spotify_logo}
          alt="Ícone do Spotify"
        />
      </ul>
    </div>
  );
}
