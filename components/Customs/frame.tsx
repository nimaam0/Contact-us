import React from "react";
import { Customframe } from "../types";


const CustomFrame: React.FC<Customframe> = ({ width,height }) => {
  return (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509304!2d144.9559283159049!3d-37.81720974202106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a7d45fa5f3ed!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1633029587394!5m2!1sen!2s"
    width={width}
    height={height}
    style={{ border: 0 }}
    loading="lazy"
  ></iframe>
  );
};

export default CustomFrame;