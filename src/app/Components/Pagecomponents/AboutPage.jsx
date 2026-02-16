import React from "react";
import BackBtn from "../UiUx/BackBtn";
import Link from "next/link";

const desdata = [
  "This training game is an interactive simulation designed specifically for truck dispatcher students who want to understand how the U.S. trucking industry works in real life. Players step into the role of a truck dispatcher and learn how to manage loads, drivers, and schedules while operating in a fast-paced and competitive environment. The game focuses on practical knowledge and decision-making skills that every successful dispatcher must master.",
  "The game is organized into multiple modules, each covering a core area of truck dispatching. These modules include U.S. time zones and state geography, trailer and equipment types, load planning and rate confirmations, routing and deadhead management, and professional communication with brokers and drivers. Each module presents realistic scenarios where players must analyze information, make correct choices, and respond to challenges just as they would in real dispatch operations.",
  "As players progress through the game, they face increasingly complex situations that test their ability to balance time, compliance, and profitability. The game tracks performance based on accuracy, efficiency, communication quality, and profit management. By the end of the game, students gain hands-on experience, confidence, and a clear understanding of how to handle real-world dispatch tasks, preparing them for success in a professional dispatcher role."
];
const AboutPage = () => {
  return (
    <div className="bg-[url(/Banners/about-bg-banner.webp)] h-screen">
      <div className="p-10 w-[65%] h-full flex flex-col gap-[12%]">
        <Link href={"/"}>
          <BackBtn />
        </Link>

        <div>
          <h2 className="uppercase text-[80px] text-primary  family-primary">
            truck dispatcher
          </h2>

          <div className="space-y-2">
            {desdata.map((data, index) =>
              <p className="text-xl text-white" key={index}>
                {data}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
