import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="mt-32 py-16 px-6 gap-10 sm:px-12 flex flex-col md:flex-row justify-between items-center w-full  text-white">
      
      {/* -------- Buttons ---------- */}
     <div className="flex flex-row md:flex-row gap-6 mb-8 md:mb-0 items-center">
  <Link
    to="/contact"
    className="flex justify-center items-center bg-purple-700 text-white h-10 rounded-lg hover:bg-white hover:text-black transform hover:scale-105 transition duration-300 w-40"
  >
    Contact
  </Link>

  <Link
    to="/project"
    className="flex justify-center items-center bg-white text-purple-700 h-10 rounded-lg hover:bg-purple-900 hover:text-white transform hover:scale-105 transition duration-300 w-40"
  >
    Project
  </Link>
</div>


      {/* -------- Social Icons ---------- */}
      <div className="mt-10 sm:mt-28">
        <ul className="flex gap-8 sm:gap-10 text-3xl justify-center">
          <a href="https://github.com/mahaveer800" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-black duration-200" />
          </a>

          <a href="https://www.linkedin.com/in/mahaveer-singh-29a359363/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-800 duration-200" />
          </a>

          <a href="https://wa.me/+91" target="_blank" rel="noreferrer">
            <FaWhatsapp className="hover:text-green-600 duration-200" />
          </a>

          <a href="https://www.instagram.com/lozer_bravo" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-red-600 duration-200" />
          </a>

          <a href="mailto:mahaveer56it@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="hover:text-blue-600 duration-200" />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
