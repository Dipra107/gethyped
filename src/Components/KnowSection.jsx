import React from "react";
import girlImg from "../assets/girl.png";

const KnowSection = () => {
  return (
    <div className="w-full bg-[#e9e1d8] px-6 py-20 flex justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between gap-6">

        {/* LEFT IMAGE */}
        <div className="w-[150px] h-[180px] md:w-[220px] md:h-[260px] rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src={girlImg}
            alt="model"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex-1 min-w-0">

          <p className="text-[16px] md:text-[25px] leading-[1.5] md:leading-[1.7] font-semibold text-black">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
            Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
            Nooit meer content zonder resultaat.
          </p>

          {/* BUTTON */}
          <button className="mt-5 md:mt-6 flex items-center gap-3 border border-black rounded-xl px-3 py-2 md:px-4 md:py-2 text-lg text-black font-semibold hover:bg-black hover:text-white transition">
            Leer ons kennen
            <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">
              →
            </span>
          </button>

        </div>

        {/* RIGHT ARROW */}
        <div className="group flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] border border-black rounded-xl flex-shrink-0 cursor-pointer overflow-hidden">

          <span className="text-2xl md:text-xl text-orange-500 transform transition-all duration-300 ease-in-out group-hover:translate-y-2">
            ↓
          </span>

        </div>

      </div>
    </div>
  );
};

export default KnowSection;