import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// 🎬 Videos from src/assets
import bullit from "../assets/Bullit-Loop.mp4";
import roasta from "../assets/roasta-loop.mp4";
import loco from "../assets/loco-bites-loop.mp4";

const Card = ({ video, title, tag, color, bg, startTime = 0 }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = startTime;
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = startTime;
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-[28px] overflow-hidden border-[5px] ${color} w-[290px] h-[400px] shadow-lg`}
        >
            {/* VIDEO ONLY */}
            <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div
                className={`absolute bottom-0 left-0 right-0 text-white ${bg} px-5 pt-6 pb-5`}
                style={{ clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
                <h3 className="text-[17px] font-semibold leading-snug">
                    {title}
                </h3>
                <span className="inline-block mt-3 px-3 py-1 bg-white/20 rounded-full text-xs">
                    {tag}
                </span>
            </div>

            {/* Arrow */}
            <div className="absolute bottom-5 right-5 bg-white text-black p-2 rounded-full shadow-md">
                <ArrowUpRight size={16} />
            </div>
        </div>
    );
};

export default function ContentSection() {
    return (
        <section className="bg-[#FAF4EC] py-28 px-10">
            <div className="max-w-7xl mx-auto">

                {/* TEXT */}
                <div className="max-w-xl mb-10">
                    <h1 className="text-[64px] text-black font-extrabold leading-[1.05] mb-6">
                        Content <br />
                        dat scoort.
                    </h1>

                    <p className="text-[18px] w-[280px] text-black font-semibold pt-4 mb-8 leading-relaxed">
                        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
                    </p>
                    <button
                        className="h-9 flex items-center gap-2 text-black border border-black rounded-xl text-sm font-medium px-1 bg-[#FAF4EC] transition-all duration-300 ease-out
      hover:bg-[#ddd6cc]
      hover:scale-x-105
      hover:skew-x-[8deg]
      hover:skew-y-[-4deg]
      hover:rounded-md
      hover:shadow-md">
                  
                        Bekijk al ons werk

                        <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">
                            →
                        </span>
                    </button>
                </div>

                {/* CARDS */}
                <div className="relative h-[900px] -mt-24">

                    {/* CARD 1 */}
                    <div className="absolute left-0 bottom-[200px]">
                        <Card
                            video={bullit}
                            title="Van nul naar vol, binnen 3 weken"
                            tag="Bullit"
                            color="border-orange-500"
                            bg="bg-orange-500"
                            startTime={2.8}
                        />
                    </div>

                    {/* CARD 2 */}
                    <div className="absolute left-[420px] bottom-[420px]">
                        <Card
                            video={roasta}
                            title="Zacht in smaak, sterk in beeld"
                            tag="Roasta"
                            color="border-blue-500"
                            bg="bg-blue-500"
                            startTime={0.8}
                        />
                    </div>

                    {/* CARD 3 */}
                    <div className="absolute left-[840px] bottom-[650px]">
                        <Card
                            video={loco}
                            title="Content die écht raakt"
                            tag="Loco"
                            color="border-green-500"
                            bg="bg-green-500"
                            startTime={2.8}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}