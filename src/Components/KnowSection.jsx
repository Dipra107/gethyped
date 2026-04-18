import React from "react";
import girlImg from "../assets/girl.png";

const KnowSection = () => {
  return (
    <div className="w-full bg-[#FAF4EC] px-6 py-20 flex justify-center">
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
        <div className="flex-1 min-w-0 max-w-[420px] mx-auto">

          <p className="text-[15px] md:text-[22px] leading-[1.5] md:leading-[1.7] font-semibold text-black text-left">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
            Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
            Nooit meer content zonder resultaat.
          </p>

          <button className="mt-3 md:mt-6 flex items-center gap-3 border border-black rounded-xl px-1 py-1 text-md text-black font-semibold transition-all duration-300 ease-out
  hover:bg-[#FAF4EC]
  hover:scale-x-105
  hover:skew-x-[8deg]
  hover:skew-y-[-4deg]
  hover:rounded-md
  hover:shadow-md">
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