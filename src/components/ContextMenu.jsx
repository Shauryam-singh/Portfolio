import React from "react";

function ContextMenu({ x, y, onCustomizeClick }) {
  return (
    <ul
      className="absolute bg-white/10 backdrop-blur-lg rounded-lg py-1 sm:py-2 z-50 shadow"
      style={{ top: y, left: x }}
    >
      <li
        onClick={onCustomizeClick}  // Correct usage of onClick
        className="flex items-center px-3 sm:px-4 py-2 text-sm text-white hover:backdrop-blur-md cursor-pointer">
        <img src="src/assets/customize.jpg" alt="Customize" className="w-5 h-5 mr-3"/>
        Customize
      </li>
    </ul>
  );
}

export default ContextMenu;
