import React from 'react'
// import hero from '../assets/2.jpg'
import mahi from '../assets/mahi2.png'
import Navbar from './Navbar'
import Footer from './Footer'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center mt-48 px-4">
  <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
        id="Hero"
      >
        {/* Image + About Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:mx-20 gap-2">

          {/* Image */}

          <div className=" md:w-64">
           <img 
  src={mahi}
  className="
    shadow-xl rounded-full h-60 md:h-56 w-48 md:w-44 sm:h-40 sm:w-32 object-cover
    transition-transform duration-800 ease-out
    hover:[transform:rotateX(15deg)_rotateY(15deg)_scale(1.1)]
  "
/>

          </div>

          {/* About */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-snug">
              Hey, I'm
              <span className="text-purple-900 block text-4xl sm:text-5xl md:text-6xl">
                Mahaveer Singh
              </span>
              A <span className="text-purple-900">Frontend Developer</span>
            </h1>
          </div>
        </div>
</motion.div>

<div className='h-4'></div>
        {/* Description */}
        <div className="flex justify-center mt-16 px-6 md:px-12">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center max-w-3xl">
            As a Frontend Developer, I focus on building high-performance,
            scalable, and visually appealing web applications using React.js.
          </p>
        </div>
      </div>
      {/* --------Empty div--------- */}
      <div className='sm:h-2 md:h-32'></div>
     
      <Footer />
    </>
  )
}

export default Hero
