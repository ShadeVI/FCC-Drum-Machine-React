import React, { useState, useEffect, useCallback } from "react";

const DrumPad = ({ pad, isOn, volume, setRunning }) => {
  const [isActive, setIsActive] = useState(false);
  const { keyTrigger, url, id } = pad;

  const play = useCallback(() => {
    if (isOn) {
      setRunning(id);
      setIsActive(true);
      const audio = document.getElementById(keyTrigger);
      audio.currentTime = 0;
      audio.volume = (volume / 100).toFixed(2);
      audio.play();
      setTimeout(() => setIsActive(false), 100);
    }
  }, [isOn, volume, setIsActive, id, setRunning]);

  const handleKeydown = useCallback(
    (e) => {
      if (e.key.toUpperCase() === keyTrigger) {
        play();
      }
    },
    [keyTrigger, play]
  );

  useEffect(() => {
    if (isOn) {
      document.addEventListener("keydown", handleKeydown);
    } else {
      document.removeEventListener("keydown", handleKeydown);
    }
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isOn, handleKeydown]);

  return (
    <div
      id="pad"
      className={`drum-pad d-flex justify-content-center align-items-center flex-wrap m-1  text-white col-3 ${
        isActive ? "bg-warning" : "bg-dark"
      }`}
      style={{ height: "100px" }}
      onClick={() => play(id)}
    >
      <audio className="clip" id={keyTrigger} src={url} />
      {keyTrigger}
    </div>
  );
};

export default DrumPad;
