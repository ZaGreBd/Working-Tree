import React from "react";
import "./Musics.css";

import { Music } from "./subcomponents/Music";

export function Musics() {
  return (
    <div className="musics">
        <Music title="Circles" src="https://open.spotify.com/embed/track/21jGcNKet2qwijlDFuPiPb?utm_source=generator" />
        <Music title="Billie Bossa Nova" src="https://open.spotify.com/embed/track/2KnuaZYoGzDoHiBTNYOTXG?utm_source=generator" />
    </div>
  );
}