import React from "react";
import { usePlayer } from "../Player.context";

const LoadButton = () => {
  const { loadFile } = usePlayer();
  const onChange = (e) => {
    const fileTest = /(.mp3)$/i.test(e.target.value);
    if (fileTest) loadFile(e.target.files[0]);
  };
  return (
    <>
      <label>
        <input type="file" onChange={onChange} />
      </label>
    </>
  );
};

export default LoadButton;
