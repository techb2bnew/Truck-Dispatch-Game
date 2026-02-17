"use client";
import React from "react";

const Button = ({ bg_color, text_color, btn_name, onclick }) => {

  const handleClick = () => {
    const audio = new Audio("/audio/btnclikeffact.mp3");
    audio.play();

    onclick && onclick();
  };

  return (
    <div className="w-fit border-2 border-[#ffffff5a]">
      <button
        onClick={handleClick}
        type="button"
        className={`${bg_color} ${text_color} uppercase px-10 pt-5 pb-3 text-[26px] m-px tracking-[5px] cursor-pointer`}
      >
        {btn_name}
      </button>
    </div>
  );
};

export default Button;
