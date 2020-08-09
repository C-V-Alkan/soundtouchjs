import React from "react";
import PlayButton from "./PlayButton.component";
import PauseButton from "./PauseButton.component";
import Progress from "./Progress.component";

const Player = () => {
  return (
    <>
      <PlayButton />
      <PauseButton />
      <Progress />
    </>
  );
};

export default Player;
