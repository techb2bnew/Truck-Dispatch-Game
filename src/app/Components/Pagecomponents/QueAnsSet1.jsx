"use client";
import React, { useEffect, useState } from "react";
import { QuestionSet1Data } from "@/app/Data/Data";
import { StartQuestion, Questions } from "./Questions";

const QueAnsSet1 = ({onclick}) => {
  const [showGoQuestion, setshowGoQuestion] = useState(false);
  const [startQuestion, setstartQuestion] = useState(false);
  const [questionRound, setquestionRound] = useState(1);

  const totalQuestions = QuestionSet1Data.length;

  useEffect(() => {
    setshowGoQuestion(false);
    setstartQuestion(false);

    const t1 = setTimeout(() => setshowGoQuestion(true), 1000);
    const t2 = setTimeout(() => setstartQuestion(true), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [questionRound]);
   
  const handelstartJourney = ()=>{
     onclick()
  }

  const goToNextQuestion = () => {
    if (questionRound < totalQuestions) {
      setquestionRound(prev => prev + 1);
    } else {
     handelstartJourney()
    }
  };

  return (
    <div>
      {!startQuestion ? (
        <StartQuestion
          questionNo={questionRound}
          showGoQuestion={showGoQuestion}
        />
      ) : (
        <Questions
          questionRound={questionRound}
          setshowGoQuestion={setshowGoQuestion}
          goToNextQuestion={goToNextQuestion}
          setstartQuestion={setstartQuestion}
        />
      )}
    </div>
  );
};

export default QueAnsSet1;
