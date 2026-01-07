import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
 <nav className="text-white flex justify-between items-center 
w-screen md:w-[98%] mx-12 sm:w-[100%] lg:w-[100%]  mt-6 md:mt-20  ">



      {/* LOGO */}
      <h2 className="text-3xl font-bold text-purple-800 sm:text-3xl" >
        MyPortfolio
      </h2>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-12 text-xl ">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Hamburger Icon (Mobile Only) */}
      <div
        className="md:hidden flex flex-col gap-[6px] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {/* 3 lines of hamburger */}
        <span className="w-8 h-1 bg-white rounded"></span>
        <span className="w-8 h-1 bg-white rounded"></span>
        <span className="w-8 h-1 bg-white rounded"></span>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute  top-4 right-0 md:hidden bg-black/50 rounded-lg backdrop-blur-md w-full m-8 h-screen ">
          <ul className="absolute right-0 flex flex-col gap-4 text-lg px-4  w-40 sm:w-10 ">
            <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/skills">Skills</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/project">Project</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
