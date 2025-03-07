// components/CustomButton.tsx
import React from "react";
import { CustomButtonProps } from "../types";


const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <button
      type="submit" className="bg-blue-700 lg:w-20 text-white p-3 rounded-xl"
    >
      {text}
    </button>
  );
};

export default CustomButton;
