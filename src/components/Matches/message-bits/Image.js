import React from "react";
import "./style.css";

export default function Image({ image, name, matchDate }) {
  return (
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src={image} alt={name} />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{name || "Jack Black"}</p>
        <p className="text-gray-600">{matchDate || "Today 3:53pm"}</p>
      </div>
    </div>
  );
}
