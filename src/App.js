import React from "react";
import { PlayerProvider } from "./Player.context";
import LoadButton from "./components/LoadButton.component";
import Player from "./components/Player.component";

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const gainNode = audioCtx.createGain();

export default function App() {
  return (
    <>
      <PlayerProvider {...{ audioCtx, gainNode }}>
        <LoadButton />
        <br />
        <Player />
      </PlayerProvider>
    </>
  );
}
