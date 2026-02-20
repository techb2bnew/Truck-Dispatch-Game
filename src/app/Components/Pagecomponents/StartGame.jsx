"use client";
import React, { useEffect, useState } from "react";
import BackBtn from "../UiUx/BackBtn";
import { InputComponent } from "./InputComponent";
import UnlockLevels from "./UnlockLevels";
import SelectTruck from "./SelectTruck";
import YourBass from "./YourBass";
import SearchLoad from "./SearchLoad";
import QAfirst from "./QAfirst";
import QueAnsSet1 from "./QueAnsSet1";
import StartJourney from "./StartJourney";
import IntroLoader from "../IntroLoader";
import Profile from "./Profile";
import BiddingForLoads from "./BiddingForLoads";

const StartGame = ({ setCurrentComponent }) => {
  const [currentContinew, setCurrentcontinew] = useState("Your_name");
  const [name, setname] = useState("");
  const [userId, setUserId] = useState("");
  const [hideBackBtn, setHideBackBtn] = useState(false);
  const generateUniqueId = name => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const timePart = `${hours}${minutes}${seconds}`;
    const datePart = `${year}${month}${day}`;
    return `${name.toUpperCase()}-${datePart}-${timePart}`;
  };
  const handleContinue = () => {
    if (!name) return;
    const id = generateUniqueId(name);
    setUserId(id);
    setCurrentcontinew("Your_id");
  };
  const backActions = {
    Your_name: () => setCurrentComponent("Home"),
    Your_id: () => setCurrentcontinew("Your_name"),
    Unlock_Levels: () => setCurrentcontinew("Your_id"),
    Select_Truck: () => setCurrentcontinew("Unlock_Levels"),
    Choose_state: () => setCurrentcontinew("Select_Truck"),
    Search_load: () => setCurrentcontinew("Choose_state"),
    Bidding_ForLoads : ()=> setCurrentcontinew('Search_load'),
    QA_first: () => setCurrentcontinew("Bidding_ForLoads"),
    Que_Ans_Set1: () => setCurrentcontinew("QA_first"),
    Start_journey : () => setCurrentcontinew('Que_Ans_Set1')
  };
  let currentbg =
    currentContinew === "Que_Ans_Set1"
      ? "/Banners/questionansbanner.webp"
      : currentContinew === 'Start_journey' 
      ? '/Banners/start-journey.webp'
      : currentContinew === 'User_Profile' 
      ? '/Banners/black-bg.webp'
      : "/Banners/Loadingbanner.webp";
  useEffect(() => {
    if (currentContinew === "Start_journey") {
      setHideBackBtn(true);

      const timer = setTimeout(() => {
        setHideBackBtn(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentContinew]);
  return (
    <div
      className={`bg-contain bg-center h-screen fixed overflow-hidden w-full`}
      style={{ backgroundImage: `url(${currentbg})` }}
    >
      <div className={`${hideBackBtn || currentContinew === 'User_Profile' ? '' : 'p-10'}`}>
        {backActions[currentContinew] && !hideBackBtn && (
          <div onClick={backActions[currentContinew]}>
            <BackBtn />
          </div>
        )}

        <div className={`${currentContinew === "Choose_state" || currentContinew === 'Bidding_ForLoads' || currentContinew === "Search_load" || currentContinew === 'User_Profile' || hideBackBtn ? 'pt-2' : 'pt-12'} `}>
          {currentContinew === "Your_name" || currentContinew === "Your_id"
            ? <InputComponent
              setcontinew={currentContinew}
              name={name}
              setname={setname}
              userId={userId}
              handleContinue={handleContinue}
              continew2={() => setCurrentcontinew("Unlock_Levels")}
            />
            : currentContinew === "Unlock_Levels" ? <UnlockLevels onclick={() => setCurrentcontinew("Select_Truck")} />
            : currentContinew === "Select_Truck" ? <SelectTruck onclick={() => setCurrentcontinew("Choose_state")} />
            : currentContinew === "Choose_state" ? <YourBass onclick={() => setCurrentcontinew("Search_load")} />
            : currentContinew === "Search_load" ? <SearchLoad onclick={() => setCurrentcontinew("Bidding_ForLoads")} />
            : currentContinew === "Bidding_ForLoads" ? <BiddingForLoads onclick={() => setCurrentcontinew("QA_first")} />
            : currentContinew === "QA_first" ? <QAfirst onclick={() => setCurrentcontinew("Que_Ans_Set1")} />
            : currentContinew === "Que_Ans_Set1" ? <QueAnsSet1 onclick={() => setCurrentcontinew("Start_journey")} />
            : currentContinew === "Start_journey" ? <IntroLoader><StartJourney setCurrentcontinew={setCurrentcontinew} /></IntroLoader>
            : currentContinew === "User_Profile" ? <Profile />
            : null}

        </div>
      </div>
    </div>
  );
};

export default StartGame;
