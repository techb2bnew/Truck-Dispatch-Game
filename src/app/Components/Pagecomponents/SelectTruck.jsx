"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../UiUx/Button";

const SelecttruckData = [
  {
    id: 1,
    truck_img: "/Images/dry-van.webp",
    icons: "/icons/run-man.svg"
  },
  {
    id: 2,
    truck_img: "/Images/reefer.webp",
    icons: "/icons/punch.svg"
  },
  {
    id: 3,
    truck_img: "/Images/heater.webp",
    icons: "/icons/spark.svg"
  },
  {
    id: 4,
    truck_img: "/Images/flat-bed2.webp",
    icons: "/icons/heal.svg"
  }
];
const SelectTruck = ({ onclick }) => {
  const [selectedTrucks, setSelectedTrucks] = useState([]);

  const handleSelect = id => {
    setSelectedTrucks(
      prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  console.log("selectedTrucks", selectedTrucks);

  return (
    <div className="relative max-w-[1400.2px] m-auto bg-white [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_38px,100%_calc(100%-38px),calc(100%-38px)_100%,38px_100%,0_calc(100%-38px),0_38px)]">
      <div className="border-2 border-white py-12 bg-[#282828] [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)] backdrop-blur-xl">
        <h2 className="uppercase family-primary text-center text-[70px] leading-17.5 text-white">
          select your truck types
        </h2>
        <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,255,255,1)_51%,rgb(153_153_153/0%)_100%)]" />

        <div className="pt-10 grid grid-cols-4 gap-4 max-w-[90%] m-auto">
          {SelecttruckData.map((data, index) => {
            const isSelected = selectedTrucks.includes(data.id);

            return (
              <div
                key={index}
                onClick={() => handleSelect(data.id)}
                className="bg-primary relative py-1.5"
              >
                <Image
                  src={data.truck_img}
                  alt=""
                  width={1000}
                  height={500}
                  className="max-w-[95%] m-auto"
                />
                <div className="absolute top-2 left-2 min-w-14 flex justify-center">
                  <Image
                    src={data.icons}
                    alt="icon"
                    width={50}
                    height={50}
                    className="w-auto h-8 "
                  />
                </div>

                {isSelected &&
                  <div className="absolute top-[2%] left-[2.5%] w-[95%] h-[95%] flex justify-center bg-[#000000b8]">
                    <Image
                      src={"/icons/green-select.svg"}
                      alt=""
                      width={1000}
                      height={500}
                      className="max-w-[72px]"
                    />
                  </div>}
              </div>
            );
          })}
        </div>
        <div className="pt-10 flex justify-center">
          <Button
            onclick={() => {
              if (selectedTrucks.length <= 0) return;
              onclick();
            }}
            btn_name={"continue"}
            bg_color={"bg-gradient-green"}
            text_color={"text-primary"}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectTruck;
