"use client";
import { motion } from "motion/react";
import { FiDownload, FiMessageCircle, FiCode, FiCpu, FiLayers } from "react-icons/fi";

export default function About() {
  const stats = [
    { label: "Projects Built", value: "15+", icon: <FiCode className="text-blue-600" /> },
    { label: "Tech Stack", value: "10+", icon: <FiCpu className="text-indigo-600" /> },
    { label: "Experience", value: "Fresh", icon: <FiLayers className="text-blue-500" /> },
  ];

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header - Matching "Work." style */}
        <div className="pt-10 pb-16 border-b border-slate-100 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <h2 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter">
            Story<span className="text-blue-600">.</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-[250px] mb-4 uppercase text-xs tracking-[0.3em]">
            A developer crafting digital excellence at the intersection of logic and art.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: The Visual Identity (5 Columns) */}
          <div className="lg:col-span-5 relative w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="rounded-[3rem] overflow-hidden bg-slate-50 p-4 border border-slate-100 shadow-2xl">
                <img
                  src="https://avatars.githubusercontent.com/u/175140016?v=4"
                  alt="Shauryam Singh"
                  className="rounded-[2rem] w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute top-12 -right-6 bg-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 animate-bounce">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Available Now</span>
              </div>
            </motion.div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Side: The Narrative (7 Columns) */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                Turning complex problems into <span className="text-blue-600">elegant solutions.</span>
              </h3>

              <p className="text-xl text-slate-500 leading-relaxed mb-10">
                I'm <span className="text-slate-900 font-bold underline decoration-blue-600/30 decoration-4 underline-offset-4">Shauryam Singh</span>, a software engineer who specializes in building high-performance applications. Based in India, I focus on shipping clean code that inspires through both <span className="text-slate-900 font-semibold">engineering excellence</span> and intuitive design.
              </p>

              {/* Stats Grid - Cleaner White Style */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {stats.map((stat, i) => (
                  <div key={i} className="group p-6 rounded-3xl bg-white border border-slate-100 hover:border-blue-600/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                    <div className="mb-4 text-2xl group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-3 mb-12">
                {["Python", "React.js", "C++", "Node.js", "Full Stack", "System Architecture"].map((tag) => (
                  <span key={tag} className="px-5 py-2 rounded-xl bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-widest border border-slate-100">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/resume_shauryam_singh.pdf"
                  className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 uppercase"
                >
                  <FiDownload size={18} /> Download CV
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-900 rounded-2xl font-black text-xs tracking-[0.2em] flex items-center justify-center gap-3 uppercase transition-colors hover:bg-slate-900 hover:text-white"
                >
                  <FiMessageCircle size={18} /> Let's Talk
                </motion.a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}