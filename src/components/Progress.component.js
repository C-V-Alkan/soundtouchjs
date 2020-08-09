import React from "react";
import { usePlayer } from "../Player.context";

const Progress = () => {
  const { playHead, duration, progress, resetPlayHead } = usePlayer();
  const onClick = ({ target, pageX }) => {
    if (duration !== "0:00") {
      const pos = target.getBoundingClientRect();
      const relX = pageX - pos.x;
      const perc = relX / target.offsetWidth;
      resetPlayHead(perc);
    }
  };

  return (
    <div>
      <p>current: {playHead}</p>
      <p>length： {duration}</p>
      <span>progress bar</span>
      <progress
        onClick={onClick}
        id="progressMeter"
        value={progress}
        max="100"
        style={seekBar}
      />
      <span>seek bar</span>
      <input type="range" style={seekBar} defaultValue="0" />
    </div>
  );
};

const seekBar = {
  width: "100%"
};

export default Progress;
