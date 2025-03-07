import React from "react";
import { Custominput } from "../types";


const CustomInput: React.FC<Custominput> = ({ placeholder }) => {
  return (
    <input type="text" placeholder={placeholder} className="bg-blue-950 p-3 border border-gray-500 rounded-xl" />

  );
};

export default CustomInput;