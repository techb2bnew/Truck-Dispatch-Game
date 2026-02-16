import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../UiUx/Button";

const LandingPage = ({onclick}) => {
  return (
    <div className="relative">
      <Image
        src={"/Banners/landingbanner.webp"}
        alt="Banner"
        width={2000}
        height={500}
        className="object-cover max-h-screen"
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-between h-[90%]">
          <div className="text-center">
            <h2 className="uppercase family-primary text-[90px] leading-20.5 text-white">
              Truck
            </h2>
            <h1 className="uppercase family-primary text-[150px] leading-34.5 text-primary">
              Dispatcher
            </h1>
          </div>

          <div className="flex items-center gap-5 justify-center">
            <Link href={"/about"}>
              <Button
                btn_name={"About Game"}
                bg_color={"bg-black"}
                text_color={"text-white"}
              />
            </Link>
            <Button
              onclick={onclick}
              btn_name={"Start Game"}
              bg_color={"bg-gradient-green"}
              text_color={"text-primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
