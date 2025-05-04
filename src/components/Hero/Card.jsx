import React from "react";
import loadLink from "../../utils/loadLink";

const Card = () => {
  return (
    <div className="z-10 relative flex flex-col md:w-[18rem] font-roboto mt-[10rem] text-white">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-8 max-w-sm">
        <div className="">
          THE ONE AND ONLY OFFICIAL REBIRTH OF THE LEGENDARY B
          <span className="text-bonky-bg-4">ON</span>K G
          <span className="text-bonky-bg-4">AM</span>E.
        </div>
        <div
          onClick={() => loadLink("http://t.me/BonkyGameBot")}
          className="inline-block mt-5 p-2 rounded-md bg-bonky-bg-4"
        >
          <div className="">Play Now</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
