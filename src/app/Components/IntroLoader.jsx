"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroLoader({ children }) {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let value = 0;

        const timer = setInterval(() => {
            value += 1;

            if (value >= 100) {
                value = 100;
                setProgress(100);
                clearInterval(timer);

                setTimeout(() => setDone(true), 150);
                return;
            }

            setProgress(value);
        }, 20);

        return () => clearInterval(timer);
    }, []);

    if (done) return children;

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Image
                src="/Banners/Loadingbanner.webp"
                alt="Loading"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full h-[18%] flex items-end justify-center pb-10">
                <div className="w-full max-w-4xl px-6 h-full">
                    <div className="h-[8px] w-full bg-white/30 rounded-lg">
                        <div
                            className="h-full bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]  transition-[width] duration-100 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                        <div
                            className="h-[0px] bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] relative gradient-shadow  bg-white rounded-xl transition-[width] duration-100 ease-out"
                            style={{
                                "--shadow-width": `${progress}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
