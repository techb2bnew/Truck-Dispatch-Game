"use client";
import React, { useState } from "react";
import BackBtn from "../UiUx/BackBtn";
import { InputComponent } from "./InputComponent";
import UnlockLevels from "./UnlockLevels";
import SelectTruck from "./SelectTruck";
import YourBass from "./YourBass";
import SearchLoad from "./SearchLoad";

const StartGame = ({ setCurrentComponent }) => {
  const [currentContinew, setCurrentcontinew] = useState("Your_name");
  const [name, setname] = useState("");
  const [userId, setUserId] = useState("");
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
    Select_Truck : () => setCurrentcontinew("Unlock_Levels"),
    Choose_state : () => setCurrentcontinew("Select_Truck"),
    Search_load : () => setCurrentcontinew("Choose_state")
  };

  return (
    <div className="bg-[url(/Banners/Loadingbanner.webp)] bg-contain bg-center h-screen"> 
      <div className="p-10">
        {backActions[currentContinew] &&
          <div onClick={backActions[currentContinew]}>
            <BackBtn />
          </div>}

        <div className={`${currentContinew === "Choose_state" || currentContinew === "Search_load" ? 'pt-2' : 'pt-12'} `}>
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
            : currentContinew === "Select_Truck" ? <SelectTruck onclick={()=> setCurrentcontinew("Choose_state")}/> 
            : currentContinew === "Choose_state" ? <YourBass onclick={()=> setCurrentcontinew("Search_load")}/> 
            : currentContinew === "Search_load" ? <SearchLoad />
            : null}
            
        </div>
      </div>
    </div>
  );
};

export default StartGame;
