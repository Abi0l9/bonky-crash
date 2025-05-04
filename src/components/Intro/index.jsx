import React from "react";
import BCRASH from "../../assets/bg/b-crash.png";

const Intro = () => {
  return (
    <div className="w-full px-2 md:px-10  text-white mt-[10rem]">
      <div className="flex flex-col-reverse md:flex-row items-center bg-bonky-bg-4 p-4 py-10 rounded-md">
        <div className="flex flex-col md:w-4/6">
          <div className="mb-3">
            <p className="font-semibold text-xl font-roboto">
              Introducing Bonky Crash
            </p>
            <p className="text-xs">
              Get ready to experience the rush of a lifetime!
            </p>
          </div>
          <p className="text-sm">
            Bonky Crash is the electrifying revival of the classic crash game
            that took the gaming world by storm. With multipliers of up to 50x,
            the potential for massive wins is limitless. Whether you’re a
            seasoned player or just starting out, Bonky Crash offers an
            unparalleled gaming experience.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-2/6">
          <img src={BCRASH} alt="bonky crash" className="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
