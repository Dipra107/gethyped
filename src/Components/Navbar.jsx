import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[#e6ded6] px-8 py-5 pb-0">
      
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-[26px] font-black tracking-tight">
          GETHYPED
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-[#f3efe9] px-7 py-2 rounded-full gap-8 text-[14px] font-medium">
          <a href="#" className="text-black">Expertises</a>
          <a href="#" className="text-black">Work</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Contact</a>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:flex items-center gap-2 bg-[#e88adf] hover:bg-[#df6ed4] text-white px-5 py-2 rounded-full text-sm font-medium">
          Get Results
          <span className="bg-white text-pink-500 text-xs px-2 py-[2px] rounded-full">
            🔥
          </span>
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-5 bg-[#f3efe9] rounded-2xl p-5 flex flex-col gap-5 md:hidden text-[15px] font-medium">
          <a href="#" className="text-black">Expertises</a>
          <a href="#" className="text-black">Work</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Contact</a>

          <button className="mt-2 bg-[#e88adf] text-white px-4 py-2 rounded-full flex items-center justify-center gap-2">
            Get Results
            <span className="bg-white text-pink-500 text-xs px-2 py-[2px] rounded-full">
              🔥
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;