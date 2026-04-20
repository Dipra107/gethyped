import React from "react";
import girlImg from "../assets/girl.png";
import Video from "../assets/new-reach-loop.mp4";

const KnowSection = () => {
  return (
    <div className="w-full bg-[#FAF4EC] px-6 py-12 md:py-20 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        
        
        <div className="w-[280px] h-[380px] md:hidden rounded-2xl overflow-hidden shadow-lg rotate-4">
          <video
            src={Video}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* DESKTOP IMAGE (Hidden on mobile) */}
        <div className="w-[220px] h-[260px] hidden md:block rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src={girlImg}
            alt="model"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex-1 mr-25 text-left">
          <p className="text-[19px] md:text-[22px] leading-[1.6] md:leading-[1.7] font-semibold text-black">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
            Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
            Nooit meer content zonder resultaat.
          </p>

          <button className="mt-5 md:mt-6 inline-flex items-center gap-3 border border-black rounded-xl px-1 py-1 text-md text-black font-semibold transition-all duration-300 ease-out
            hover:bg-[#FAF4EC]
            hover:scale-x-105
            hover:skew-x-[8deg]
            hover:skew-y-[-4deg]
            hover:rounded-md
            hover:shadow-md
            mx-auto md:mx-0">
            Leer ons kennen
            <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">
              →
            </span>
          </button>
        </div>

        {/* RIGHT ARROW (Hidden on mobile) */}
        <div className="hidden md:flex group items-center justify-center w-[48px] h-[48px] border border-black rounded-xl flex-shrink-0 cursor-pointer overflow-hidden">
          <span className="text-xl text-orange-500 transform transition-all duration-300 ease-in-out group-hover:translate-y-2">
            ↓
          </span>
        </div>

      </div>
    </div>
  );
};

export default KnowSection;