import React, { useState } from "react";
import DrumPad from "./DrumPad";
import Controllers from "./Controllers";
import bank from "../bank";

const DrumBase = () => {
  const [volume, setVolume] = useState(50);
  const [isOn, setIsOn] = useState(true);
  const [running, setRunning] = useState("");

  return (
    <main className="bg-light p-3 mx-auto">
      <div className="row">
        <div className="col-6 d-flex flex-wrap">
          {bank.map((pad) => {
            return (
              <DrumPad
                key={pad.id}
                pad={pad}
                isOn={isOn}
                volume={volume}
                setRunning={setRunning}
              />
            );
          })}
        </div>

        <div className="col-6">
          <Controllers
            volume={volume}
            setVolume={setVolume}
            isOn={isOn}
            setIsOn={setIsOn}
          />
          <div id="display" className="row text-center my-5">
            <p className="fs-1">{isOn ? running : ""}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DrumBase;
