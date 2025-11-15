import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
} from 'react-icons/si';
import { MdAnimation } from 'react-icons/md'; // Placeholder for Framer Motion

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React JS', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node JS', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Framer Motion', icon: <MdAnimation className="text-pink-400" /> },
];

const Skills = () => {
  return (
    <>
    <section className=" flex flex-col items-center text-white py-12 px-6 md:px-20 ">
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
        id="Skills"
      >
      <h2 className="text-3xl font-bold mb-4 text-purple-900">What I Do</h2>

      </motion.div>
      <p className="text-md mb-8 max-w-2xl ">
        <span className='text-purple-900 font-bold text-2xl'>I’m </span>Mahaveer from Budaun, India. I’ve completed my BCA and currently pursuing Full Stack Web Development at PW Skills. I specialize in building responsive React apps, integrating APIs, and polishing UI/UX with animations and modern design.
      </p>


      <div className='h-4'></div>
        <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false, amount: 0.2 }}
        
      >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col h-18 w-40 items-center bg-purple-950 p-4 rounded-tl-xl
            rounded-br-xl hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
        </div>
        </motion.div>
      {/* </div> */}

    </section>
    
    </>
  );
};

export default Skills;
