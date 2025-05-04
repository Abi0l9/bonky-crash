import React from "react";
import frame from "../../assets/bg/vid-frame.png";
import loadLink from "../../utils/loadLink";

const Game = () => {
  return (
    <div className="w-full px-10 flex flex-col items-center my-[10rem] text-white">
      <div className="font-semibold text-xl mb-3">THE $BONKY CRASH GAME</div>
      <div
        onClick={() => loadLink("http://t.me/BonkyGameBot")}
        className="w-full"
      >
        <img src={frame} alt="video frame" className="w-full" />
      </div>
      <div className="px-5 text-gray-400 mt-1 text-[10px] text-center">
        We offer up to 50x payouts!, Get ready to multiply your rewards and take
        your gameplay to the next level
      </div>
    </div>
  );
};

export default Game;
