import React from "react";

const Controllers = ({ volume, setVolume, isOn, setIsOn }) => {
  return (
    <>
      <div className="row p-2 m-2">
        <label className="fs-4 text-center" htmlFor="volume">
          Volume: {volume === 100 ? "MAX" : volume === 0 ? "MUTED" : volume}
        </label>
        <input
          className="my-2"
          type="range"
          id="volume"
          step="1"
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value))}
        />
      </div>
      <div className="row p-2 m-2">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="turnOnOff"
            checked={isOn}
            onClick={() => setIsOn(!isOn)}
          />
          <label class="form-check-label" for="turnOnOff">
            Turn on/off the drum machine
          </label>
        </div>
      </div>
    </>
  );
};

export default Controllers;
