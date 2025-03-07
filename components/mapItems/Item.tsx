import React from "react";
import { Adress } from "../types";

interface ItemBoxProps {
  data: Adress[];
}

const ItemBox: React.FC<ItemBoxProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 lg:gap-10 text-base">
      {data.map((adress) => (
        <div key={adress.id} className="flex flex-col items-start">
          <span className="font-semibold">{adress.title}</span>
          <p className="font-normal opacity-70">{adress.data}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemBox;