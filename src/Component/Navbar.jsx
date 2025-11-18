import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between text-white md:mt-12">
      
      {/* Logo */}
      <div className="h-20 md:mt-12 flex items-center px-8">
        <h2 className="text-3xl font-bold text-purple-800">
          MyPortfolio
        </h2>
      </div>

      {/* Navbar Menu */}
      <div>
        <ul className="flex w-md justify-around font-small text-xl text-white cursor-pointer">
          <li >
            <Link to="/">Home</Link>
          </li>

           <li>
            <Link to="/skills">Skills</Link>
          </li>

          <li >
            <Link to="/project">Project</Link>
          </li>

          {/* <li className="cursor-pointer">
            <Link to="/resume">Resume</Link>
          </li> */}

          <li >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
