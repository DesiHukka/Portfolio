import React from "react";

function Skillset({ icon, name }) {
  return (
    <div className="w-56 h-56 flex flex-col justify-center items-center gap-1 border-4 border-gray-500">
      <img src={icon} className="w-36 h-36 object-cover" />
      <span>{name}</span>
    </div>
  );
}

export default Skillset;
