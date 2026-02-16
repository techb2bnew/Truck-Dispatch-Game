import React from "react";
import Button from "../UiUx/Button";

export const InputComponent = ({
  setcontinew,
  continew2,
  name,
  setname,
  userId,
  handleContinue
}) => {
  return (
    <div className="relative max-w-6xl m-auto bg-white [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_38px,100%_calc(100%-38px),calc(100%-38px)_100%,38px_100%,0_calc(100%-38px),0_38px)]">
      {setcontinew === "Your_name"
        ? <div className="border-2 border-white py-18 bg-[#282828] [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)] backdrop-blur-xl">
            <h2 className="uppercase family-primary text-center text-[70px] leading-17.5 text-white">
              what is your name ?
            </h2>
            <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,255,255,1)_51%,rgb(153_153_153/0%)_100%)]" />

            <div className="pt-10 flex flex-col items-center">
              <input
                type="text"
                name="name"
                id=""
                className="outline-none border-none text-white bg-[#00000099] w-2xl m-auto px-6 py-5 text-2xl uppercase text-center rounded-lg"
                onChange={e => setname(e.target.value)}
                value={name}
              />

              <h4 className="text-4xl text-white family-primary pt-12 tracking-[1px]">
                Please type your name
              </h4>

              <div className="pt-12">
                <Button
                  onclick={handleContinue}
                  btn_name={"continue"}
                  bg_color={"bg-gradient-green"}
                  text_color={"text-primary"}
                />
              </div>
            </div>
          </div>
        : <div className="border-2 border-white py-18 bg-[#282828] [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)] backdrop-blur-xl">
            <h2 className="uppercase family-primary text-center text-[70px] leading-17.5 text-white">
              what is your ID ?
            </h2>
            <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,255,255,1)_51%,rgb(153_153_153/0%)_100%)]" />

            <div className="pt-10 flex flex-col items-center">
              <div className="outline-none border-none text-white bg-[#00000099] w-2xl m-auto px-6 py-5 text-2xl uppercase text-center rounded-lg">
                {userId}
              </div>

              <h4 className="text-4xl text-white family-primary pt-12 tracking-[1px]">
                Your game ID
              </h4>

              <div className="pt-12">
                <Button
                  onclick={continew2}
                  btn_name={"continue"}
                  bg_color={"bg-gradient-green"}
                  text_color={"text-primary"}
                />
              </div>
            </div>
          </div>}
    </div>
  );
};