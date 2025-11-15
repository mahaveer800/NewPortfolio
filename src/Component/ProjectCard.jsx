import React from 'react';
import RealState from '../../src/assets/realstate1.png';
import Chatbot from '../../src/assets/chatbot.png';
import Youtube from '../../src/assets/youtube.png';
import Resturant from '../../src/assets/restuarent.png';
import { motion } from 'framer-motion';
const projects = [
  {
    title: 'Real state App',
    description: 'A responsive real estate website built with React and Tailwind CSS.',
    image: RealState,
    live: 'https://real-estate-two-lake.vercel.app/',
    github: 'https://github.com/mahaveer800/Real_Estate',
  },
  
    {
    title: 'Chatbot App',
    description: 'A Chatbot create by using react and Gemeni API.',
    image: Chatbot,
    live: 'https://chatbot-six-lime.vercel.app/',
    github: 'https://github.com/mahaveer800/Chatbot',
  },

    {
    title: 'Youtube App',
    description: 'AYoutube page with animations and smooth scroll created by React and youtube API.',
    image: Youtube,
    live: 'https://youtube-clone-one-rouge.vercel.app/',
    github: 'https://github.com/mahaveer800/Youtube-clone',
  },

    {
    title: 'Food Day App',
    description: 'A food Disributer page with animations and smooth scroll.',
    image: Resturant,
    live: 'https://github.com/mahaveer800/Hospital-Management',
    github: 'https://github.com/mahaveer800/Hospital-Management',
  },
  // Add more projects here
];

const Project = () => {
  return (

    <div className="min-h-screen  px-6 py-12">
     <div className='h-2'></div>
       <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
        id="Project"
      >
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200  bg-neutral-700 "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white text-sm mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-white hover:text-black"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default Project;
