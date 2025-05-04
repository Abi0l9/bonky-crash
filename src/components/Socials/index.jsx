import React from "react";
import telegram from "../../assets/bg/telegram.png";
import twitter from "../../assets/bg/twitter.png";
import loadLink from "../../utils/loadLink";

const Socials = () => {
  return (
    <div className="flex items-center font-poppins font-bold gap-x-10 justify-center pb-8">
      <div
        onClick={() => loadLink("https://t.me/bonkycrash")}
        className="flex gap-x-2 text-white  hover:text-blue-500 cursor-pointer "
      >
        <img src={telegram} alt="telegram" />
        <div className="">Telegram</div>
      </div>

      <div
        onClick={() => loadLink("https://x.com/bonkybsc")}
        className="flex gap-x-2 text-white hover:text-blue-500 cursor-pointer"
      >
        <img src={twitter} alt="twitter" />
        <div className="">Twitter</div>
      </div>
    </div>
  );
};

export default Socials;
