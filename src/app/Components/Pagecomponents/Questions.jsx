"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../UiUx/Button";
import { QuestionSet1Data } from "@/app/Data/Data";


export const StartQuestion = ({ showGoQuestion, questionNo }) => {
    return (
        <div className="container m-auto ">
            <h2
                className={`uppercase text-[300px] leading-[280.1px] family-primary text-primary transition-all duration-500 ${showGoQuestion ? "pt-0" : "pt-30"
                    }`}
            >
                QUESTION {questionNo}
            </h2>

            <div className="flex justify-center">
                {showGoQuestion && (
                    <Image
                        src={"/Images/go-question.webp"}
                        alt="go question"
                        width={294}
                        height={438}
                    />
                )}
            </div>
        </div>
    );
};

export const Questions = ({
    questionRound,
    setshowGoQuestion,
    setstartQuestion,
    goToNextQuestion,
}) => {
    const currentquestion = QuestionSet1Data.find(
        q => q.id === questionRound
    );

    const [getAnswerWrong, setGetAnswerWrong] = useState(false);
    const [getAnswerTrue, setGetAnswerTrue] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const handelAnswer = answer => {
        if (answer === true) {
            setGetAnswerTrue(true);
        } else {
            setGetAnswerWrong(true);
        }
    };

    const handleNext = () => {
        setstartQuestion(false);
        setshowGoQuestion(false);
        goToNextQuestion();
    };
    const handleRetry = () => {
        setGetAnswerWrong(false);
        setGetAnswerTrue(false);
        setstartQuestion(false);
        setshowGoQuestion(false);
        setTimeout(() => setstartQuestion(true), 500);
    };

    return (
        <div>
            {getAnswerWrong ? (
                <AnswerFalse onRetry={handleRetry}/>
            ) : getAnswerTrue ? (
                <Answertrue onclick={handleNext} />
            ) : (
                <div
                    className={`grid grid-cols-[4fr_1fr] transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="relative max-w-[1100px] min-w-4xl m-auto bg-white [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_38px,100%_calc(100%-38px),calc(100%-38px)_100%,38px_100%,0_calc(100%-38px),0_38px)]">
                        <div className="border-2 border-white py-12 bg-[#282828] [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)]">

                            <h2 className="uppercase family-primary text-center text-[70px] leading-[80px] text-white px-10">
                                {currentquestion.question}
                            </h2>

                            <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,255,255,1)_51%,rgb(153_153_153/0%)_100%)]" />

                            <div className="grid grid-cols-2 gap-x-6 gap-y-10 max-w-[80%] m-auto pt-20 pb-10">
                                {currentquestion.options.map((data, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handelAnswer(data.option_key)}
                                        className="max-w-[430px] bg-[#00000099] hover:bg-ternary cursor-pointer w-full text-[26px] text-white py-4 rounded-lg m-auto"
                                    >
                                        {data.option_name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image
                            src={"/Images/give-answer.webp"}
                            alt=""
                            width={1000}
                            height={500}
                            className="max-w-[388px]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export const AnswerFalse = ({ onRetry }) => {
    const [goBack, setgoBack] = useState(false);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setFade(true);
            setTimeout(() => setgoBack(true), 300);
        }, 2000);

        const timer2 = setTimeout(() => {
            onRetry();
        }, 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="flex justify-center items-center relative">
            <Image
                src={"/Banners/ohno.webp"}
                alt=""
                width={1500}
                height={500}
                className={`transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"
                    }`}
            />

            <Image
                src={"/Banners/go-back.webp"}
                alt=""
                width={1500}
                height={500}
                className={`transition-opacity duration-300 ${goBack ? "opacity-100" : "opacity-0"
                    } absolute`}
            />
        </div>
    );
};


export const Answertrue = ({ onclick }) => {
    const [letsGO, setletsGO] = useState(false);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
            setTimeout(() => setletsGO(true), 300);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex justify-center items-center">
            <Image
                src={"/Banners/great.webp"}
                alt=""
                width={1500}
                height={500}
                className={`transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"
                    }`}
            />

            <div className="absolute left-0 right-0 m-auto text-center">
                <Image
                    src={"/Banners/lets-go.webp"}
                    alt=""
                    width={1500}
                    height={500}
                    className={`transition-opacity duration-300 ${letsGO ? "opacity-100" : "opacity-0"
                        }`}
                />

                <div
                    className={`absolute bottom-[10%] right-[20%] ${letsGO ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Button
                        onclick={onclick}
                        btn_name={"LET’S GO!"}
                        bg_color={"bg-gradient-green"}
                        text_color={"text-primary"}
                    />
                </div>
            </div>
        </div>
    );
};
