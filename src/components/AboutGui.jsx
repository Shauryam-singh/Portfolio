import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion

function AboutGui() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  // Motion variants for the animations
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
  };

  const handleCvClick = () => {
    window.location.href = "/assets/ShauryamSingh_Resume.pdf";
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 text-white rounded-lg max-w-full sm:max-w-2xl mx-auto">
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold font-mono mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        Hey! I'm Shauryam Singh
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ delay: 0.2 }}
      >
        A Front End Developer
      </motion.p>
      <motion.p
        className="text-sm sm:text-base leading-relaxed mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ delay: 0.4 }}
      >
        I'm a <strong>18-year-old Front End Developer</strong> specializing in technologies like <b>React</b>, <b>Next.js</b>, <b>JavaScript</b>, <b>Html</b>, and <b>CSS</b>.
        I thrive on solving complex problems, writing clean code, and constantly learning to stay ahead of industry trends.
      </motion.p>
      <motion.p
        className="text-sm sm:text-base leading-relaxed mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ delay: 0.6 }}
      >
        With a strong background in front-end, I enjoy creating impactful, user-centric web applications and contributing to high-performance software systems.
      </motion.p>
      <motion.p
        className="text-sm sm:text-base leading-relaxed mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ delay: 0.8 }}
      >
        I believe in the power of continuous improvement and am always exploring new technologies and development practices. I'm passionate about creating applications that drive meaningful change and innovation.
      </motion.p>

      {/* Button with delayed appearance */}
      <motion.button
        className="bg-white text-black font-semibold px-6 py-3 mt-4 rounded-lg text-sm sm:text-base"
        initial="hidden"
        animate={showButton ? "visible" : "hidden"}
        variants={buttonVariant}
        onClick={handleCvClick}
      >
        My CV
      </motion.button>
    </div>
  );
}

export default AboutGui;
