import React from 'react';
import { motion } from 'framer-motion';
import "../App.css";

function ProjectGui() {
  const projects = [
    {
      title: 'Project 1',
      languages: 'React, Node.js',
      image: 'https://divinerx.vercel.app/projets/pepsitube.webp',
      link: '#',
    },
    {
      title: 'Project 2',
      languages: 'Python, Django',
      image: 'https://divinerx.vercel.app/projets/shadowsdash.webp',
      link: '#',
    },
    {
      title: 'Project 3',
      languages: 'PHP, MySQL',
      image: 'https://divinerx.vercel.app/projets/dartnodes.webp',
      link: '#',
    },
    {
      title: 'Project 4',
      languages: 'Java, Spring',
      image: 'https://divinerx.vercel.app/projets/quackhost.webp',
      link: '#',
    },
  ];

  return (
    <motion.div 
      className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 text-white rounded-lg"
      initial={{ opacity: 0 }}  // Initial state for container
      animate={{ opacity: 1 }}  // Final state: fully visible
      transition={{ duration: 1, ease: "easeInOut" }}  // Smooth transition for container fade-in
    >
      <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">
        Projects
      </h1>
      <p className="text-lg opacity-80 mb-6">I specialize in the following technologies:</p>

      {/* Scrollable Container for Projects */}
      <div className="overflow-y-auto w-full max-h-96 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}  // Start each project off-screen slightly below
              animate={{ opacity: 1, y: 0 }}  // Animate into view
              transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}  // Staggered fade-in with smooth ease-out
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-300"
                initial={{ scale: 1 }}  // Initial scale (no scaling)
                whileHover={{ scale: 1.05 }}  // Slightly scale up on hover
                transition={{ duration: 0.3 }}
              />
              
              {/* Project Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-lg transition-opacity duration-300 group-hover:opacity-100 hover:backdrop-blur-sm">
                <div className="absolute bottom-0 w-full p-4">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-semibold text-white mb-2"
                    initial={{ opacity: 0 }}  // Start with hidden text
                    animate={{ opacity: 1 }}  // Fade in text
                    transition={{ delay: index * 0.3, duration: 0.4 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base text-white mb-4"
                    initial={{ opacity: 0 }}  // Start with hidden text
                    animate={{ opacity: 1 }}  // Fade in text
                    transition={{ delay: index * 0.4, duration: 0.4 }}
                  >
                    {project.languages}
                  </motion.p>
                  <motion.a
                    href={project.link}
                    className="px-6 py-2 bg-blue-500 text-white rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ opacity: 0 }}  // Initially hidden link
                    animate={{ opacity: 1 }}  // Fade in link on hover
                    transition={{ delay: index * 0.5, duration: 0.4 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectGui;
