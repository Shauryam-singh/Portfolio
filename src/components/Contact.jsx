import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10 text-white rounded-lg max-w-3xl mx-auto space-y-6">
      {/* Envelope Icon */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/assets/contact.jpg" alt="" className="w-24 sm:w-36" />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Need to get in touch?
      </motion.h2>

      {/* Contact Link */}
      <motion.a
        href="mailto:shauryamsingh@gmail.com"// 
        className="text-lg sm:text-xl text-indigo-200 hover:text-indigo-500 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Send me an Email
      </motion.a>
    </div>
  );
}

export default Contact;
