import React from "react";
import CardItem from "./CardItem";

const Card = ({ data }) => {
  const { title, stages } = data;
  return (
    <div className=" bg-[#0B0624] w-full text-white flex flex-col gap-1 p-4 rounded-md">
      <div className=" font-semibold">{title}</div>
      <div className="flex flex-col gap-y-1">
        {stages.map((stage, idx) => (
          <CardItem stage={stage} key={idx}></CardItem>
        ))}
      </div>
    </div>
  );
};

export default Card;
