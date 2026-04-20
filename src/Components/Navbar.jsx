import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/gethyped-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[#FAF4EC] px-8 py-5 pb-2 md:pb-7">

      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="GETHYPED"
            className="h-8 md:h-13 object-contain cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-[#ffffff] rounded-lg gap-1 text-[15px] font-medium">
          {["Expertises", "Work", "About", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="group relative inline-block overflow-hidden rounded-lg px-3 py-2"
            >
              {/* ORANGE LAYER */}
              <span
                className="absolute inset-0 bg-[#fa5424] 
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-300 ease-out"
              ></span>

              {/* BLACK LAYER */}
              <span
                className="absolute inset-0 bg-black 
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-out delay-100"
              ></span>

              {/* TEXT WRAPPER */}
              <span className="relative block overflow-hidden leading-none h-[1.1em]">
                {/* TOP TEXT */}
                <span
                  className="block text-black 
                    group-hover:opacity-0
                    transition-all duration-300"
                >
                  {item}
                </span>

                {/* BOTTOM TEXT */}
                <span
                  className="absolute left-0 top-0 block 
                    opacity-0 text-white
                    group-hover:opacity-100
                    transition-all duration-500 ease-out delay-300"
                >
                  {item}
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:flex items-center gap-2 bg-[#fcb8fa] text-black px-1 py-1 rounded-lg text-[16px] font-medium cursor-pointer transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:rounded-md hover:shadow-md">
          Get Results
          <span className="bg-white text-md px-2 py-[2px] rounded-lg transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:rounded-md hover:shadow-md">
            🔥
          </span>
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black bg-[#fcb8fa] rounded-lg p-2 focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-5 bg-[#fcb8fa] rounded-2xl p-5 flex flex-col gap-5 md:hidden text-[15px] font-medium">
          {["Expertises", "Work", "About", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="group relative inline-block overflow-hidden text-xl bg-white rounded-lg px-3 py-2 mx-auto"
            >
              {/* ORANGE LAYER */}
              <span
                className="absolute inset-0 bg-[#fa5424] 
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-300 ease-out"
              ></span>

              {/* BLACK LAYER */}
              <span
                className="absolute inset-0 bg-black 
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-out delay-100"
              ></span>

              {/* TEXT WRAPPER */}
              <span className="relative block overflow-hidden leading-none h-[1.1em]">
                {/* TOP TEXT */}
                <span
                  className="block text-black 
                    group-hover:opacity-0
                    transition-all duration-300"
                >
                  {item}
                </span>

                {/* BOTTOM TEXT */}
                <span
                  className="absolute left-0 top-0 block 
                    opacity-0 text-white
                    group-hover:opacity-100
                    transition-all duration-500 ease-out delay-300"
                >
                  {item}
                </span>
              </span>
            </a>
          ))}

          {/* Get Results Button */}
          <button className="mt-2 bg-black text-white px-2 py-2 rounded-xl flex items-center justify-center gap-2 mx-auto transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:rounded-md hover:shadow-md">
              
            Get Results
            <span className="bg-white text-pink-500 text-lg px-2 py-[2px] rounded-lg transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:rounded-md hover:shadow-md">
              🔥
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;