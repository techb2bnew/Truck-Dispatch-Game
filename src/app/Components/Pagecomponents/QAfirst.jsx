import React from "react";
import Button from "../UiUx/Button";

const QAfirst = ({ onclick }) => {
  return (
    <div className="relative max-w-6xl m-auto bg-white [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_38px,100%_calc(100%-38px),calc(100%-38px)_100%,38px_100%,0_calc(100%-38px),0_38px)]">
      <div className="border-2 border-white py-12 bg-[#282828] [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)] backdrop-blur-xl">
        <h2 className="uppercase family-primary text-center text-[70px] leading-17.5 text-white">
          Answer some questions
        </h2>
        <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,255,255,1)_51%,rgb(153_153_153/0%)_100%)]" />

        <div className="mt-10 max-w-[85%] m-auto bg-[#00000099] rounded-lg">
          <h4 className="uppercase text-[26px] text-white text-center pt-6 pb-10 tracking-[3px]">
            To proceed further, you’ll need to answer <br /> some questions
          </h4>
        </div>

        <div className="pt-20 flex justify-center">
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

export default QAfirst;
