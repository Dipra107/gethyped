import React from "react";

// import all logos
import tho from "../assets/Tho.svg";
import de from "../assets/de.svg";
import zwarte from "../assets/zwarte.svg";
import bullit from "../assets/bullit.svg";
import morssinkhof from "../assets/morssinkhof.svg";
import salontopper from "../assets/salontopper.svg";
import sessingFlex from "../assets/seesing-flex.svg";
import graafschap from "../assets/graafschap-college.svg";
import fides from "../assets/fides.svg";
import srhk from "../assets/SRHK.svg";
import knltb from "../assets/knltb.svg";

const brands = [
    { img: tho, name: "THO" },
    { img: de, name: "De" },
    { img: zwarte, name: "Zwarte" },
    { img: bullit, name: "Bullit Digital" },
    { img: morssinkhof, name: "Morssinkhof" },
    { img: salontopper, name: "Salontopper" },
    { img: sessingFlex, name: "Sessing Flex" },
    { img: graafschap, name: "Graafschap College" },
    { img: fides, name: "Fides" },
    { img: srhk, name: "SRHK" },
    { img: knltb, name: "KNLTB" },
];

const Brands = () => {
    return (
        <section className="w-full bg-[#FAF4EC] py-20 overflow-hidden">

            {/* Heading */}
            <div className="max-w-7xl mx-auto px-6 mb-12 text-left">
                <h2 className="font-black font-semibold text-3xl md:text-5xl text-gray-900">
                    These brands <br /> got hyped.
                </h2>
            </div>

            {/* Marquee */}
            <div className="relative flex overflow-hidden group">

                <div className="flex gap-3 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                    {[...brands, ...brands].map((brand, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 bg-transparent backdrop-blur-sm border border-gray-400 rounded-2xl px-8 py-5 shadow-sm flex items-center justify-center hover:shadow-md transition cursor-grab"
                        >
                            <img
                                src={brand.img}
                                alt={brand.name}
                                className="h-30 md:h-45 object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>

            {/* Animation */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
            <div className="mt-16 border-t border-gray-300 max-w-7xl mx-auto"></div>
        </section>
    );
};

export default Brands;