import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/gethyped-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[#FAF4EC] px-8 py-5 pb-2 md:pb-7">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* --- Logo --- */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="GETHYPED"
            className="h-10 md:h-13 object-contain cursor-pointer"
          />
        </a>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex bg-[#ffffff] rounded-lg gap-1 text-[15px] font-medium p-1">
          {["Expertises", "Work", "About", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="group relative inline-block overflow-hidden rounded-lg px-3 py-2"
            >
              <span className="absolute inset-0 bg-[#fa5424] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100"></span>
              
              <span className="relative block overflow-hidden leading-none h-[1.1em]">
                <span className="block text-black group-hover:opacity-0 transition-all duration-300">
                  {item}
                </span>
                <span className="absolute left-0 top-0 block opacity-0 text-white group-hover:opacity-100 transition-all duration-500 ease-out delay-300">
                  {item}
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* --- Desktop Button --- */}
        <button className="hidden md:flex items-center gap-2 bg-[#fcb8fa] text-black px-1 py-1 rounded-lg text-[16px] font-medium cursor-pointer transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:rounded-md hover:shadow-md">
          <span className="pl-2">Get Results</span>
          <span className="bg-white text-md px-2 py-[2px] rounded-lg">
            🔥
          </span>
        </button>

        {/* --- Mobile Hamburger Button --- */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-black bg-[#fcb8fa] rounded-lg p-2 focus:outline-none transition-transform active:scale-90"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* --- FULL SCREEN MOBILE MENU (ZOOM & POP ANIMATION) --- */}
      <div
        className={`fixed inset-0 z-[999] bg-[#fcb8fa] transition-all duration-700 md:hidden flex flex-col p-8 ${
          open 
            ? "translate-y-0 scale-100 opacity-100" 
            : "-translate-y-full scale-95 opacity-0"
        }`}
        style={{
          transitionTimingFunction: open 
            ? "cubic-bezier(0.34, 1.56, 0.64, 1)" 
            : "ease-in-out"
        }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between w-full">
          <img src={logo} alt="Logo" className="h-10 object-contain" />
          <button
            onClick={() => setOpen(false)}
            className="text-black bg-white rounded-lg p-2 shadow-sm active:scale-75 transition-transform"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Menu Links - Zoom In & Staggered Effect */}
        <div className="flex-grow flex flex-col items-center justify-center gap-6">
          {["Expertises", "Work", "About", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              onClick={() => setOpen(false)}
              className={`group relative inline-block overflow-hidden text-xl bg-white rounded-2xl px-10 py-4 min-w-[220px] text-center shadow-lg font-bold text-black no-underline transition-all duration-500 ${
                open ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: open ? `${(i + 1) * 100}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)" // Elastic zoom
              }}
            >
              {/* Animation Layers */}
              <span className="absolute inset-0 bg-[#fa5424] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100"></span>
              
              <span className="relative block overflow-hidden leading-none h-[1.1em]">
                <span className="block group-hover:opacity-0 transition-all duration-300">
                  {item}
                </span>
                <span className="absolute left-0 top-0 block opacity-0 text-white group-hover:opacity-100 transition-all duration-500 ease-out delay-300 w-full text-center">
                  {item}
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Bottom Button */}
        <div className={`pb-10 flex justify-center transition-all duration-700 delay-500 ${
          open ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 shadow-2xl active:scale-90 transition-all font-bold text-lg">
            Get Results
            <span className="bg-white text-pink-500 rounded-lg px-2 py-1 flex items-center justify-center">
              🔥
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;