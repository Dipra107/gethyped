import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

import logo from "../assets/gethyped-logo.png";
import badge from "../assets/GH.png";

const Footer = () => {
  const menuItems = ["Expertises", "Work", "About", "Contact"];

  return (
    <footer className="w-full bg-[#FAF4EC] pt-28 text-black overflow-hidden">
      {/* CTA - Hidden on Mobile */}
      <div className="hidden md:block text-center mb-24 px-6">
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
            className="absolute inset-0 w-full h-full md:block hidden"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0 360
                C 70 330, 145 320, 235 300
                C 390 266, 565 232, 760 195
                C 930 162, 1110 128, 1285 98
                C 1345 88, 1395 80, 1440 76
                L1440 440
                L0 440
                Z
              "
              fill="#eae4d8"
            />
          </svg>

          {/* Mobile Background */}
          <div className="absolute inset-0 bg-[#eae4d8] md:hidden"></div>

          {/* Left bottom logo */}
          <div className="absolute left-0 right-0 md:right-auto md:left-2 bottom-auto top-10 md:top-auto md:bottom-0 z-20 flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Get Hyped logo"
              className="w-[280px] md:w-[320px] object-contain"
            />
            {/* Mobile Only Button */}
            <button className="md:hidden mt-6 flex items-center gap-3 border border-white rounded-xl bg-[#fa5424] px-2 py-1.5 text-sm text-white font-semibold">
              <span>Get hyped! Neem contact op</span>
              <span className="w-6 h-6 flex items-center justify-center bg-white text-orange-600 rounded-md">🔥</span>
            </button>
          </div>

          {/* Right top round badge */}
          <img
            src={badge}
            alt="Get Hyped badge"
            className="absolute hidden md:block md:right-20 md:top-10 z-30 w-[72spx] md:w-[106px] object-contain"
          />

          {/* Right side content */}
          <div className="relative z-20 flex justify-center md:justify-end h-full px-6 md:px-5 pt-60 md:pt-50 pb-10">
            <div className="w-full max-w-[480px]">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_120px] gap-10 md:gap-10 items-start">

                <div className="flex flex-col gap-10 items-center md:items-start">
                  {/* Nav pills */}
                  <div className="flex gap-1 flex-wrap justify-center md:justify-start">
                    {menuItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="group relative inline-block overflow-hidden rounded-lg bg-white px-4 py-2 text-sm text-black no-underline"
                      >
                        <span className="absolute inset-x-0 top-0 bottom-[-2px] bg-[#fa5424] translate-y-[105%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                        <span className="absolute inset-x-0 top-0 bottom-[-2px] bg-black translate-y-[105%] group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100"></span>
                        <span className="relative block overflow-hidden leading-none h-[1.1em]">
                          <span className="block text-black group-hover:-translate-y-full group-hover:opacity-0 transition-all duration-300">{item}</span>
                          <span className="absolute left-0 top-0 block translate-y-full opacity-0 text-white group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-300">{item}</span>
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <span className="font-semibold hidden md:block text-[15px]">Follow us</span>
                    <div className="flex gap-2 md:">
                      {[FaLinkedinIn, SiTiktok, FaInstagram, FaYoutube].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center text-black transition hover:scale-115">
                          <Icon size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info & Address */}
                <div className="text-center md:text-left text-sm text-black">
                  <div className="mb-5">
                    <h3 className="font-bold text-[16px] hidden md:block mb-1">Contact</h3>
                    <p className="hover:text-orange-500 transition cursor-pointer">info@gethyped.nl</p>
                    <p className="hover:text-orange-500 transition cursor-pointer">+31 6 1533 7496</p>
                  </div>
                  <div>
                    <h3 className="font-bold hidden md:block text-[16px] mb-1">Adres</h3>
                    <p className="hover:text-orange-500 transition cursor-pointer">
                      Beltrumsestraat 6, <br className="md:hidden" /> 7141 AL Groenlo
                    </p>
                  </div>
                </div>
              </div>


              <div className="md:mt-12 mt-6 flex flex-col items-center md:flex-row md:justify-between text-[13px] text-[#6b655e] gap-3">

                <a href="#" className="hover:text-orange-500 transition order-1 md:order-2">
                  Privacyvoorwaarden
                </a>

                <p className="order-2 md:order-1">
                  © 2026 Get Hyped
                </p>

                <a href="#" className="hover:text-orange-500 transition order-3 md:order-3 text-center">
                  Developed by Dipra Sarker
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