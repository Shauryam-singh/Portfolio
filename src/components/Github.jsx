import React from 'react';
import { FaGithub } from 'react-icons/fa'; // GitHub icon from react-icons
import { motion } from 'framer-motion';

function Github() {
  return (
    <div className="flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10 text-white rounded-lg max-w-3xl mx-auto space-y-6">
      {/* GitHub Logo */}
      <motion.div
        className="text-6xl sm:text-7xl mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FaGithub />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Looking to see some of my work?
      </motion.h2>

      {/* GitHub Link */}
      <motion.a
        href="https://github.com/shauryam-singh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg sm:text-xl text-indigo-200 hover:text-indigo-500 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Check out my GitHub
      </motion.a>
    </div>
  );
}

export default Github;
