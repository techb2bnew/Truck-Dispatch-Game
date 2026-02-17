'use state'
import React, { useState } from "react";
import Image from "next/image";
import Button from "../UiUx/Button";

const levelsdata = [
  {
    id: 1,
    level_icon: "/icons/level1icon.svg",
    start_got: 2,
    level_achive: true
  },
  {
    id: 2,
    level_icon: "/icons/level1icon.svg",
    start_got: 3,
    level_achive: true
  },
  {
    id: 3,
    level_icon: "/icons/level1icon.svg",
    start_got: 3,
    level_achive: true
  },
  {
    id: 4,
    level_icon: "/icons/level1icon.svg",
    start_got: 3,
    level_achive: false
  },
  {
    id: 5,
    level_icon: "/icons/level1icon.svg",
    start_got: 3,
    level_achive: false
  },
  {
    id: 6,
    level_icon: "/icons/level1icon.svg",
    start_got: 2,
    level_achive: false
  },
  {
    id: 7,
    level_icon: "/icons/level1icon.svg",
    start_got: 3,
    level_achive: false
  },
  {
    id: 8,
    level_icon: "/icons/level1icon.svg",
    start_got: 3,
    level_achive: false
  },
  {
    id: 9,
    level_icon: "/icons/level1icon.svg",
    start_got: 3,
    level_achive: false
  },
  {
    id: 10,
    level_icon: "/icons/level1icon.svg",
    start_got: 3,
    level_achive: false
  }
];
const UnlockLevels = ({ onclick }) => {
const getDefaultLevel = () => {
  const achievedLevels = levelsdata.filter(l => l.level_achive);
  return achievedLevels.length
    ? achievedLevels[achievedLevels.length - 1].id
    : null;
};

const [selectedLevels, setSelectedLevels] = useState(getDefaultLevel);

const handleSelect = (id) => {
  if (selectedLevels === id) return;
  const level = levelsdata.find(l => l.id === id);
  if (!level?.level_achive) return;

  setSelectedLevels(id);
};

  return (
    <div className="relative max-w-[1400.2px] m-auto bg-white [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_38px,100%_calc(100%-38px),calc(100%-38px)_100%,38px_100%,0_calc(100%-38px),0_38px)]">
      <div className="border-2 border-white py-12 bg-[#282828] [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)] backdrop-blur-xl">
        <h2 className="uppercase family-primary text-center text-[70px] leading-17.5 text-white">
          unlock levels
        </h2>

        <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,255,255,1)_51%,rgb(153_153_153/0%)_100%)]" />
        <div className="pt-4 grid grid-cols-5 gap-4 max-w-[80%] m-auto gap-y-6">
          {levelsdata.map((data, index) =>
            <div className="max-w-[150px]" key={index}>
              <div className="relative" onClick={() => handleSelect(data.id)}>
                <Image
                  src={
                    data.level_achive === true
                      ? data.level_icon
                      : "/icons/lock-level.svg"
                  }
                  alt={`Level ${data.id}`}
                  width={1000}
                  height={500}
                  className="max-w-[140px] m-auto"
                />

                {
                  selectedLevels === data.id &&
                  <div className="absolute top-0 left-[2.5%] w-[95%] h-full rounded-2xl flex justify-center bg-[#000000b8]">
                    <Image
                      src={"/icons/green-select.svg"}
                      alt=""
                      width={1000}
                      height={500}
                      className="max-w-[52px]"
                    />
                  </div>
                }
              </div>

              <div className="flex items-center justify-center pt-3">
                {[
                  ...Array(data.level_achive === false ? 3 : data.start_got)
                ].map((_, i) => {
                  return (
                    <Image
                      key={i}
                      src={"/icons/level1star.svg"}
                      alt="start"
                      width={1000}
                      height={500}
                      className="max-w-9 rotate-12 gap-2"
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="pt-6 flex justify-center">
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

export default UnlockLevels;
