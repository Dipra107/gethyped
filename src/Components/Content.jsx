import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import bullit from "../assets/Bullit-Loop.mp4";
import roasta from "../assets/roasta-loop.mp4";
import loco from "../assets/loco-bites-loop.mp4";

const Card = ({ video, title, tag, color, bg, startTime = 0 }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (isMobile && videoRef.current) {
            videoRef.current.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }, []);

    const handleMouseEnter = () => {
        if (window.innerWidth >= 768 && videoRef.current) {
            videoRef.current.currentTime = startTime;
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 768 && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = startTime;
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-[28px] overflow-hidden border-[5px] ${color} w-[290px] h-[400px] shadow-lg transition-all duration-300 ease-in-out transform md:hover:rotate-[-4deg] md:hover:scale-105 cursor-pointer`}
        >
            <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            />

            <div
                className={`absolute bottom-0 left-0 right-0 text-white ${bg} px-9 pt-9 pb-7`}
                style={{ clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
                <h3 className="text-[19px] font-semibold leading-snug">{title}</h3>
                <span className="inline-block mt-3 px-3 py-1 bg-white/30 rounded-lg text-xs font-medium">{tag}</span>
            </div>

            <div className="absolute bottom-24 right-2 bg-white text-black p-2 rounded-full shadow-md">
                <ArrowUpRight size={18} />
            </div>
        </div>
    );
};

export default function ContentSection() {
    return (
        <section className="bg-[#FAF4EC] py-16 md:py-28 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                
                {/* TEXT & BUTTON - ALWAYS LEFT ALIGNED */}
                <div className="max-w-xl md:px-15 mb-12 md:mb-10 text-left">
                    <h1 className="text-[50px] md:text-[80px] text-black font-bold leading-[1.1] mb-6">
                        Content <br className="hidden md:block"/>
                        dat scoort.
                    </h1>

                    <p className="text-[18px] w-[320px] md:w-[280px] text-black font-semibold pt-2 mb-8 leading-relaxed">
                        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep.
                    </p>
                    
                    <button className="h-10 flex items-center gap-3 text-black border border-black rounded-xl text-sm font-medium px-1 bg-transparent transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:shadow-md">
                        <span className="pl-3">Bekijk al ons werk</span>
                        <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">→</span>
                    </button>
                </div>

                {/* CARDS SECTION - CENTERED ON MOBILE */}
                <div className="relative flex flex-col items-center md:block gap-12 w-full md:h-[900px] mt-10 md:-mt-24">
                    
                    {/* CARD 1 */}
                    <div className="md:absolute md:left-0 rotate-[-4deg] md:bottom-[350px]">
                        <Card
                            video={bullit}
                            title={<><span>Van nul naar vol,</span><br/><span>binnen 3 weken</span></>}
                            tag="Bullit"
                            color="border-[#fa5424]"
                            bg="bg-[#fa5424]"
                            startTime={2.8}
                        />
                    </div>

                    {/* CARD 2 */}
                    <div className="md:absolute md:left-[350px] rotate-3 md:bottom-[450px]">
                        <Card
                            video={roasta}
                            title={<><span>Zacht in smaak,</span><br/><span>sterk in beeld</span></>}
                            tag="Roasta"
                            color="border-[#0d8dff]"
                            bg="bg-[#0d8dff]"
                            startTime={0.8}
                        />
                    </div>

                    {/* CARD 3 */}
                    <div className="md:absolute md:left-[700px] rotate-[-2deg] md:bottom-[550px]">
                        <Card
                            video={loco}
                            title={<><span>Content die écht</span><br/><span>smaak en raakt</span></>}
                            tag="Loco"
                            color="border-[#33c791]"
                            bg="bg-[#33c791]"
                            startTime={2.8}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}