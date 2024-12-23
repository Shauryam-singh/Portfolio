import React, { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaPhp, FaGithub, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

function SkillsGui() {
  const [selectedCategory, setSelectedCategory] = useState("Languages");

  // Define technologies based on categories
  const categories = {
    Languages: [
      { icon: <FaReact className="text-2xl" />, name: "React" },
      { icon: <FaNodeJs className="text-2xl" />, name: "Node.js" },
      { icon: <FaPython className="text-2xl" />, name: "Python" },
      { icon: <FaPhp className="text-2xl" />, name: "PHP" },
    ],
    Databases: [
      { icon: <FaDatabase className="text-2xl" />, name: "MySQL" },
      { icon: <FaDatabase className="text-2xl" />, name: "PostgreSQL" },
    ],
    Frameworks: [
      { icon: <FaNodeJs className="text-2xl" />, name: "Express.js" },
      { icon: <FaDocker className="text-2xl" />, name: "Django" },
    ],
    Tools: [
      { icon: <FaGithub className="text-2xl" />, name: "GitHub" },
      { icon: <FaDocker className="text-2xl" />, name: "Docker" },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10 text-white rounded-lg max-w-3xl mx-auto space-y-8">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Coding Skills
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl mb-4 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I specialize in the following technologies:
      </motion.p>

      {/* Category Buttons */}
      <div className="flex gap-6 mb-6 flex-wrap justify-center">
        {["Languages", "Databases", "Frameworks", "Tools"].map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 text-white font-medium text-lg border-b-4 transition-all duration-300 ease-in-out ${
              selectedCategory === category
                ? "border-indigo-500 scale-110" // Active category has a blue bottom border
                : "border-transparent hover:border-white"
            } hover:scale-105 focus:outline-none`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Technologies */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-center">
        {categories[selectedCategory].map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center bg-gradient-to-r from-indigo-500 to-teal-400 rounded-lg p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}  // Start each technology off-screen slightly below
            animate={{ opacity: 1, y: 0 }}  // Animate into view
            transition={{ duration: 0.6, delay: index * 0.3 }}  // Staggered fade-in with slight delay
          >
            {tech.icon}
            <p className="text-xl sm:text-2xl font-semibold mt-2">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SkillsGui;
