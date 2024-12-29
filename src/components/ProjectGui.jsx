import React from 'react';
import { motion } from 'framer-motion';
import "../App.css";

function ProjectGui() {
  const projects = [
    {
      title: 'Task Manager App',
      languages: 'React, Html, TailwindCSS',
      image: '/assets/taskmanager.png',
      link: 'https://taskmanager-shauryam.vercel.app/',
    },
    {
      title: 'Smart Canteen',
      languages: 'Python, MySQL, Flask, Bootstrap',
      image: '/assets/smartcanteen.png',
      link: 'https://github.com/Shauryam-singh/Smart-Canteen',
    },
    {
      title: 'Advance Attendance',
      languages: 'Python, Flask, Html, CSS',
      image: '/assets/attendance.png',
      link: 'https://attendance-n47n.onrender.com',
    },
    {
      title: 'Women Safety',
      languages: 'Python, Flask, OpenCV, Mediapipe',
      image: '/assets/womensafety.png',
      link: 'https://github.com/Shauryam-singh/Women-Safety',
    },
    {
      title: 'Herbal Garden',
      languages: 'Python, Flask, OpenCV, Mediapipe',
      image: '/assets/herbalgarden.png',
      link: 'https://github.com/Shauryam-singh/Virtual-Herbal-Garden',
    },
  ];

  return (
    <motion.div 
      className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 text-white rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">
        Projects
      </h1>
      <p className="text-lg opacity-80 mb-6">I specialize in the following technologies:</p>

      <div className="overflow-y-auto w-full max-h-96 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
            >
              {/* Project Image */}
              <div className="aspect-w-16 aspect-h-9">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-lg"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Project Info */}
              <div className="p-4 bg-gray-800 text-white rounded-b-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.languages}</p>
                <a
                  href={project.link}
                  className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full transition-transform transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectGui;
