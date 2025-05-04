import React from "react";
import Card from "./Card";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";

const cards = [
  {
    title: "01 STAGE",
    stages: ["Launch website", "Launch bonky crash"],
  },

  {
    title: "03 STAGE",
    stages: [
      "Launch $BONKY token",
      "$50,000 market cap",
      "$100,000 market cap",
      "$500,000 market cap",
      "$1,000,000 market cap",
      "Listing CEX 1",
      "$2,000,000 market cap",
    ],
  },
  {
    title: "02 STAGE",
    stages: [
      "Reach 100 daily users",
      "Announce partnerships",
      "Ambassadador program",
      "Bonky Crash Challenge",
    ],
  },
  {
    title: "04 STAGE",
    stages: ["Listing CEX 2"],
  },
];

const Plan = () => {
  return (
    <div className="">
      <div className="w-3/4 mt-[10rem] flex flex-col mx-auto">
        <div className="text-white font-semibold mb-3">
          OUR PLAN WITH $BONKY
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 2 }}
          gutterBreakpoints={{ 350: "12px", 750: "12px", 900: "12px" }}
        >
          <Masonry>
            {cards.map((card, idx) => (
              <Card data={card} key={idx} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Plan;
