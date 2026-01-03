"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background: Clean and Minimal */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/40 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.015]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\' fill=\'%23000\' fill-opacity=\'1\'/%3E%3C/svg%3E")' }} 
        />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 pt-20 max-w-7xl">
        
        {/* Left Side: Editorial Typography (7 Columns) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                Available for new opportunities
              </span>
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85]">
              Shauryam <br />
              <span className="text-blue-600 italic">Singh.</span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                Specialized in {" "}
                <span className="text-blue-600">
                  <Typewriter
                    words={["React & Node.js", "Python & C++", "Scalable Systems", "Full Stack Dev"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                I build high-performance software where <span className="text-slate-900">engineering precision</span> meets user-centric design. Shipping from India to the world.
              </p>
            </div>
          </div>

          {/* Socials & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#project"
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 uppercase"
            >
              Explore Portfolio <FiArrowRight size={18} />
            </motion.a>
            
            <div className="flex items-center gap-6">
              {[
                { icon: <FiGithub />, href: "https://github.com/shauryam-singh" },
                { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/shauryam-singh" },
                { icon: <FiMail />, href: "mailto:shauryamsingh9@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -4, color: "#2563eb" }}
                  href={social.href}
                  className="text-3xl text-slate-300 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Identity (5 Columns) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative hidden lg:flex justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5]">
            {/* The Image Frame */}
            <div className="absolute inset-0 rounded-[3.5rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl z-10">
              <img
                src="https://avatars.githubusercontent.com/u/175140016?v=4"
                alt="Shauryam Singh"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 hover:scale-100"
              />
            </div>

            {/* Floating Tech Badges - Minimalist Style */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 p-5 bg-white rounded-3xl shadow-xl border border-slate-50"
            >
              <div className="text-blue-600 font-black text-2xl tracking-tighter">JS</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 p-5 bg-white rounded-3xl shadow-xl border border-slate-50"
            >
              <div className="text-indigo-600 font-black text-2xl tracking-tighter">PY</div>
            </motion.div>

            {/* Decorative Background Card */}
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-slate-100 rounded-[3.5rem] -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}