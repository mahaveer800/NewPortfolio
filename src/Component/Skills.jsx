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
  { name: 'HTML',
     icon: <FaHtml5 className="text-orange-500" /> 
    },
  { name: 'CSS',
     icon: <FaCss3Alt className="text-blue-500" />
     },
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
   <section
  id="Skills"
  className="flex items-center justify-center h-[90vh] text-white py-6"
>
      {/* MAIN CENTER WRAPPER */}
      <div className="max-w-6xl w-full flex flex-col items-center justify-center text-center gap-5">


        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-purple-500">
            What I Do
          </h2>
        </motion.div>

        {/* DESCRIPTION */}
        <p className="text-md mb-14 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          <span className="text-purple-500 font-bold text-xl">I’m </span>
          Mahaveer from Budaun, India. I’ve completed my BCA and currently
          pursuing Full Stack Web Development at PW Skills. I specialize in
          building responsive React apps, integrating APIs, and polishing
          UI/UX with animations and modern design.
        </p>

        {/* SKILLS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-40 bg-purple-950 p-4 rounded-xl
                hover:bg-purple-800 transition duration-300"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
