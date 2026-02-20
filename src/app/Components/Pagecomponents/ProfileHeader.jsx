import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import CountUp from "react-countup";
const ProfileHeader = ({ current, total }) => {
  return (
    <div className="relative">
      <Image
        src={"/icons/profile-header-outer.svg"}
        alt=""
        width={1000}
        height={500}
        className=""
      />
      <div className="grid grid-cols-3 absolute  top-1/2 -translate-y-1/2 w-full">
        <div className="mb-[13%] max-w-[193px] m-auto  flex justify-between items-center gap-8 w-fit px-5 py-1.5 bg-[#00000099] rounded-md">
          <p />
          <p className="text-white family-primary text-[20px] leading-5 pt-1.5">
            <CountUp end={current} duration={1} />/<CountUp end={total} duration={1} />
          </p>
          <FaPlus fontSize={25} className=" text-primary" />
        </div>
        <div className="mb-[13%] relative max-w-[193px] m-auto  flex items-center gap-8 w-fit px-5 py-1.5 bg-[#00000099] rounded-md">
          <Image
            src={"/icons/cropped-coin.svg"}
            alt=""
            width={50}
            height={50}
            className="absolute -left-5"
          />
          <p />
          <p className="text-white family-primary text-[20px] leading-5 pt-1.5">
            <CountUp end={8127} duration={1.5} separator="," />
          </p>
          <FaPlus fontSize={25} className=" text-primary" />
        </div>
        <div className="grid grid-cols-[90px_4fr] max-w-[293px] m-auto w-full">
          <Image
            src={"/Images/Rookie.webp"}
            alt=""
            width={90}
            height={90}
            className=""
          />
          <div className="flex flex-col justify-center">
            <h4 className="ps-3 family-primary text-2xl leading-6 text-white">
              Ankit
            </h4>
            <h2 className="ps-3 family-primary text-primary text-2xl leading-6">
              Lv 1
            </h2>
            <div className="h-2.5 bg-black max-w-45 w-full rounded-sm overflow-hidden">
              <span
                className="h-full block bg-gradient-primary"
                style={{
                  width: `${current / total * 100}%`,
                  transform: "skewX(-20deg)",
                  transformOrigin: "right"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
