import React from "react";
import logo from "../assets/gethyped-logo.png";

const Footer = () => {
    return (
        <footer className="w-full bg-[#FAF4EC] pt-36 relative overflow-hidden text-black">

            {/* CTA */}
            <div className="text-center mb-28 text-black">
                <h1 className="text-[40px] md:text-[90px] font-semibold text-black leading-tight">
                    Let’s Get Hyped!
                </h1>

                <div className="flex justify-center gap-4 mt-8">

                    {/* BUTTON 1 */}
                    <button
                        className="h-9 flex items-center gap-2 text-black border border-black rounded-xl text-sm font-medium px-2 bg-[#FAF4EC]
            transition-all duration-300 ease-out transform
            hover:bg-[#ddd6cc]
            hover:scale-105
            hover:rotate-1
            hover:rounded-md
            hover:shadow-md"
                    >
                        <span>Mail ons direct</span>
                        <span className="w-7 h-7 flex items-center justify-center bg-black text-white rounded-md text-xs">
                            ✉
                        </span>
                    </button>

                    {/* BUTTON 2 */}
                    <button
                        className="h-9 flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-2 text-sm shadow-md
            transition-all duration-300 ease-out transform
            hover:scale-105
            hover:rotate-1
            hover:rounded-md
            hover:shadow-lg"
                    >
                        <span>Get Results</span>
                        <span className="w-7 h-7 flex items-center justify-center bg-white text-orange-600 rounded-md text-xs">
                            🔥
                        </span>
                    </button>

                </div>
            </div>

            {/* CURVE SVG */}
            <div className="relative">
                <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
                    <path
                        fill="#cfc7bd"
                        d="M0,220 C300,120 900,380 1440,220 L1440,320 L0,320 Z"
                    />
                </svg>

                {/* CONTENT */}
                <div className="absolute top-0 w-full pt-20 pb-14 text-black">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start text-black">

                        {/* LEFT LOGO */}
                        <div className="relative">
                            <img
                                src={logo}
                                alt="logo"
                                className="w-52 md:w-80 absolute -bottom-16 md:-bottom-28 left-0 rotate-[-6deg]"
                            />
                        </div>

                        {/* CENTER */}
                        <div className="flex flex-col gap-8 items-center md:items-start text-black">

                            <div className="flex gap-3 flex-wrap justify-center md:justify-start text-black">
                                {["Expertises", "Work", "About", "Contact"].map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-[#e8e1d8] rounded-full text-sm text-black hover:bg-[#ddd6cc] transition"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 text-black">
                                <span className="font-medium text-black">Follow us</span>
                                <div className="flex gap-3 text-black">
                                    {["in", "t", "ig", "yt"].map((s, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 bg-[#e8e1d8] rounded-full flex items-center justify-center text-sm text-black"
                                        >
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm text-black font-semibold">
                                © 2025 Get Hyped
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div className="text-sm space-y-5 text-black">
                            <div>
                                <h3 className="font-semibold text-black mb-1">Contact</h3>
                                <p>info@gethyped.nl</p>
                                <p>+31 6 1533 7496</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-black mb-1">Adres</h3>
                                <p>Beltrumse straat 6,</p>
                                <p>7141 AL Groenlo</p>
                            </div>

                            <p className="text-xs text-black mt-6">
                                Privacyvoorwaarden
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* ROTATING BADGE */}
            <div className="absolute right-10 top-[55%] hidden md:block">
                <div className="w-24 h-24 rounded-full bg-pink-300 flex items-center justify-center">
                    <span className="font-bold text-lg text-black">GH</span>
                </div>
            </div>

            {/* ANIMATION */}
            <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }
      `}</style>

        </footer>
    );
};

export default Footer;