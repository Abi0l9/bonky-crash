import React from "react";

const Tokenomics = () => {
  return (
    <div className="my-[7rem] flex flex-col items-center w-3/4">
      <div className="text-white text-center text-2xl font-semibold">
        Tokenomics
      </div>
      <div className="flex flex-col md:flex-row items-center w-full mt-4">
        <div className="hidden md:flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#666666]"></div>
          <div className="font-semibold text-white">Liquidity</div>
        </div>
        <div className="mb-3 font-poppins relative h-48 w-full flex flex-col items-center justify-center">
          <div className="absolute w-48 h-48 rounded-full bg-linear-to-b from-[#E02EDD] from-0% via-[#A34A59] to-[#666666]"></div>
          <div className="absolute w-45 h-45 rounded-full bg-bonky-bg-2"></div>
          <div className="absolute w-36 h-36 rounded-full bg-bonky-bg">
            <div className="w-full h-full flex flex-col items-center justify-center gap-[1px]">
              <div className="font-semibold text-xl text-[#F5CDD4]">$BONKY</div>
              <div className="text-center  my-1  ">
                <div className="font-semibold text-gray-400">Total Supply</div>
                <div className="font-semibold text-[#FFEBEF]">
                  1,000,000,000
                </div>
              </div>
              <div className="font-semibold text-[#FFEBEF]">Tokens</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-y-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#E02EDD]"></div>
            <div className="font-semibold text-white">Locked</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#A34A59]"></div>
            <div className="font-semibold text-white">Unlocked</div>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#666666]"></div>
            <div className="font-semibold text-white">Liquidity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
