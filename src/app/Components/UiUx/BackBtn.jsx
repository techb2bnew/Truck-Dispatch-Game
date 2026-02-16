import Image from "next/image";
import React from "react";

const BackBtn = () => {
  return (
    <button className="uppercase text-3xl flex items-center gap-3 justify-center text-white px-8 py-7 border-2 border-white tracking-[3px]">
      <Image
        src={"/icons/arrow-left.svg"}
        alt="arrow"
        width={41}
        height={24}
        className=""
      />

      Back
    </button>
  );
};

export default BackBtn;
