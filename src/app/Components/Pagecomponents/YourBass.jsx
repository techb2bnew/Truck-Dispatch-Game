import React from "react";
import ChooseStateMap from "./ChooseStateMap";
import Button from "../UiUx/Button";
import { PiArrowBendDownRight } from "react-icons/pi";
const YourBass = ({ onclick }) => {
  const listdata = [
    "Printables maps",
    "What time is it in...",
    "Convert time zones ",
    "Custom US Map ",
    "Times at a glance"
  ];
  return (
    <div className="relative max-w-[1400.2px] m-auto bg-white [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_38px,100%_calc(100%-38px),calc(100%-38px)_100%,38px_100%,0_calc(100%-38px),0_38px)]">
      <div className="border-2 border-white py-12 bg-[#282828] [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)] backdrop-blur-xl">
        <h2 className="uppercase family-primary text-center text-[70px] leading-17.5 text-white">
          choose your bass
        </h2>
        <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,255,255,1)_51%,rgb(153_153_153/0%)_100%)]" />

        <div className="grid grid-cols-[2fr_5fr]">
          <div className="ps-10 py-6">
            <h3 className="text-2xl text-[#297D72] family-primary">US MAP</h3>
            <h2 className="text-3xl pt-6 text-white">
              <span className="family-primary font-light text-5xl leading-[30px]">
                {" "}Time Zones Map{" "}
              </span>is the easiest way to tell what time it is across the US.
            </h2>

            <div className="grid grid-cols-2 gap-y-2 pt-6">
              {listdata.map((data, index) =>
                <div className="flex items-center text-white gap-2" key={index}>
                  <PiArrowBendDownRight fontSize={28} />
                  {data}
                </div>
              )}
            </div>
          </div>
          <ChooseStateMap />
        </div>
        <div className="pt-5 flex justify-center">
          <Button
            onclick={onclick}
            btn_name={"continue"}
            bg_color={"bg-gradient-green"}
            text_color={"text-primary"}
          />
        </div>
      </div>
    </div>
  );
};

export default YourBass;
