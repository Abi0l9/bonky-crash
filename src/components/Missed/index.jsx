import React from "react";
import MAN from "../../assets/bg/Rectangle 6.png";

const Missed = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <img src={MAN} alt="man with hat" />
      <div className="my-2 text-[#FAA317] text-center">
        YOU MISSED OUT ON $BONK DON’T MISS $BONKY!
      </div>
    </div>
  );
};

export default Missed;
