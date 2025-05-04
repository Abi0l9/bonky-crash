import React from "react";

const CardItem = ({ stage }) => {
  return (
    <div className="flex gap-1 bg-[#1B1F5C] items-center p-1 pl-2 rounded-md ">
      <div className="bg-bonky-bg-4 h-3 w-3 rounded-full"></div>
      <div className=" text-white py-2 px-4 text-sm">{stage}</div>
    </div>
  );
};

export default CardItem;
