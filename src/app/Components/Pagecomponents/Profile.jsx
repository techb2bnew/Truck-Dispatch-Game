import React from "react";
import ProfileHeader from "./ProfileHeader";
import Image from "next/image";
import Button from "../UiUx/Button";
const Profile = () => {
  const userDestinations = [
    {
      id: 1,
      from: "Levittown,PA",
      to: "Aberdeen,MD"
    },
    {
      id: 2,
      from: "Levittown,PA",
      to: "Aberdeen,MD"
    }
  ];
  return (
    <div className="relative">
      <div className="absolute right-0 -top-2 z-10">
        <ProfileHeader current={3} total={5} />
      </div>

      <div className="relative h-screen pt-[91.1px] flex justify-end items-center">
        <Image
          src={"/Images/guide.webp"}
          alt=""
          width={1000}
          height={500}
          className="max-w-3xl absolute left-0 bottom-0 z-10"
        />

        <div className="flex justify-end items-center pe-[5%] w-full">
          <div className="relative max-w-[1150.2px] w-full bg-white [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_38px,100%_calc(100%-38px),calc(100%-38px)_100%,38px_100%,0_calc(100%-38px),0_38px)]">
            <div className="border-2 border-white py-12 bg-[#282828] [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)] backdrop-blur-xl">
              <h2 className="uppercase family-primary text-center text-[70px] leading-17.5 text-white">
                Answer some questions
              </h2>
              <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,255,255,1)_51%,rgb(153_153_153/0%)_100%)]" />

              <div className="bg-[#00000099] py-6 px-6 rounded-lg max-w-[90%] mx-auto mt-8 min-h-60">
                {userDestinations.map((data, index) =>
                  <div key={index} className="grid grid-cols-3 pb-3">
                    <div>
                      <p className="text-[26px] text-white text-center">
                        {data.from}
                      </p>
                    </div>
                    <div>
                      <p className="max-w-[80%] m-auto border-b-2 border-white h-1/2" />
                    </div>
                    <div>
                      <p className="text-[26px] text-white text-center">
                        {data.to}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-5 flex justify-center">
                <Button
                  // onclick={onclick}
                  btn_name={"LET’S GO!"}
                  bg_color={"bg-gradient-green"}
                  text_color={"text-primary"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
