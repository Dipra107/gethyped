import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

import logo from "../assets/gethyped-logo.png";
import badge from "../assets/GH.png"; // round badge image

const Footer = () => {
  const menuItems = ["Expertises", "Work", "About", "Contact"];

  return (
    <footer className="w-full bg-[#FAF4EC] pt-28 text-black overflow-hidden">
      {/* CTA */}
      <div className="text-center mb-24 px-6">
        <h1 className="text-[40px] md:text-[95px] font-semibold leading-tight">
          Let’s Get Hyped!
        </h1>

        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {/* BUTTON 1 */}
          <button
            className="
              mt-3 md:mt-6 flex items-center gap-3 border border-black
              rounded-xl bg-[#FAF4EC] px-2 py-1 text-sm font-semibold
              transition-all duration-300 ease-out
              hover:scale-[1.04]
              hover:skew-x-[8deg]
              hover:skew-y-[-4deg]
              hover:shadow-md
              hover:rounded-tl-xl
              hover:rounded-br-xl
              hover:rounded-tr-[8px]
              hover:rounded-bl-[8px]
            "
          >
            <span>Mail ons direct</span>
            <span className="w-7 h-7 flex items-center justify-center bg-black rounded-md text-md text-white">
              ✉
            </span>
          </button>

          {/* BUTTON 2 */}
          <button
            className="
              mt-3 md:mt-6 flex items-center gap-3 border border-white
              rounded-xl bg-[#fa5424] px-2 py-1 text-sm text-white font-semibold
              transition-all duration-300 ease-out
              hover:scale-[1.04]
              hover:skew-x-[8deg]
              hover:skew-y-[-4deg]
              hover:shadow-md
              hover:rounded-tl-xl
              hover:rounded-br-xl
              hover:rounded-tr-[8px]
              hover:rounded-bl-[8px]
            "
          >
            <span>Get Results</span>
            <span className="w-7 h-7 flex items-center justify-center bg-white text-orange-600 rounded-md text-xs">
              🔥
            </span>
          </button>
        </div>
      </div>

      {/* 7xl wrapper */}
      <div className="w-full px-4 md:px-6">
        <div className="relative max-w-7xl mx-auto min-h-[340px] md:min-h-[440px] rounded-t-[30px] md:rounded-t-[56px] overflow-hidden">
          {/* Footer background shape */}
          <svg
            viewBox="0 0 1440 440"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0 360
                C 70 338, 145 320, 235 300
                C 390 266, 565 232, 760 195
                C 930 162, 1110 128, 1285 98
                C 1345 88, 1395 80, 1440 76
                L1440 440
                L0 440
                Z
              "
              fill="#d8d1c8"
            />
          </svg>

          {/* Left bottom logo */}
          <img
            src={logo}
            alt="Get Hyped logo"
            className="absolute md:left-2 bottom-0 z-20 w-[210px] md:w-[320px] object-contain"
          />

          {/* Right top round badge */}
          <img
            src={badge}
            alt="Get Hyped badge"
            className="absolute hidden md:block md:right-20 md:top-10 z-30 w-[72px] md:w-[106px] object-contain"
          />

          {/* Right side content */}
          <div className="relative z-20 flex justify-end h-full px-6 md:px-5 pt-24 md:pt-50">
            <div className="w-full max-w-[480px]">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_120px] gap-10 md:gap-10 items-start">
                {/* Left part of right section */}
                <div className="flex flex-col gap-10 items-center md:items-start">
                  {/* Nav pills */}
                  <div className="flex gap-1 flex-wrap mt-10 justify-center md:justify-start">
                    {menuItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="group relative inline-block overflow-hidden rounded-lg bg-white px-4 py-2 text-sm text-black no-underline"
                      >
                        {/* Orange layer */}
                        <span
                          className="
                            absolute inset-x-0 top-0 bottom-[-2px] bg-[#fa5424]
                            translate-y-[105%]
                            group-hover:translate-y-0
                            transition-transform duration-300 ease-out
                          "
                        ></span>

                        {/* Black layer */}
                        <span
                          className="
                            absolute inset-x-0 top-0 bottom-[-2px] bg-black
                            translate-y-[105%]
                            group-hover:translate-y-0
                            transition-transform duration-500 ease-out delay-100
                          "
                        ></span>

                        {/* Text wrapper */}
                        <span className="relative block overflow-hidden leading-none h-[1.1em]">
                          <span
                            className="
                              block text-black
                              group-hover:-translate-y-full
                              group-hover:opacity-0
                              transition-all duration-300
                            "
                          >
                            {item}
                          </span>

                          <span
                            className="
                              absolute left-0 top-0 block
                              translate-y-full opacity-0 text-white
                              group-hover:translate-y-0
                              group-hover:opacity-100
                              transition-all duration-500 ease-out delay-300
                            "
                          >
                            {item}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-semibold text-[15px]">Follow us</span>

                    <div className="flex gap-3">
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center text-black transition hover:scale-115"
                      >
                        <FaLinkedinIn size={16} />
                      </a>

                      <a
                        href="#"
                        aria-label="TikTok"
                        className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center text-black transition hover:scale-115"
                      >
                        <SiTiktok size={15} />
                      </a>

                      <a
                        href="#"
                        aria-label="Instagram"
                        className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center text-black transition hover:scale-115"
                      >
                        <FaInstagram size={16} />
                      </a>

                      <a
                        href="#"
                        aria-label="YouTube"
                        className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center text-black transition hover:scale-115"
                      >
                        <FaYoutube size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side info */}
                <div className="text-sm mt-2 text-black">
                  <div className="mb-5">
                    <h3 className="font-bold text-[16px] mb-1">Contact</h3>
                    <p>info@gethyped.nl</p>
                    <p>+31 6 1533 7496</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[16px] mb-1">Adres</h3>
                    <p>Beltrumsestraat 6,</p>
                    <p>7141 AL Groenlo</p>
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[13px] text-[#6b655e]">
                <p>© 2026 Get Hyped</p>
                <p>© Design by Dipra JR</p>
                <a href="#" className="no-underline hover:text-black transition">
                  Privacyvoorwaarden
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;