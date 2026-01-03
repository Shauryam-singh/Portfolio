"use client";
import { motion } from "framer-motion";
import { FiBookOpen, FiStar, FiAward, FiArrowUpRight } from "react-icons/fi";

const educationData = [
  {
    from: "2023",
    to: "Present",
    org: "SRM University, Delhi-NCR",
    role: "Bachelor's in Computer Science",
    desc: "Currently pursuing a degree in CS while building real-world projects in React, Python, C++, and Node.js. Focused on full-stack architecture and algorithm optimization.",
    icon: <FiBookOpen />,
  },
  {
    from: "2022",
    to: "2023",
    org: "Central Academy, Lucknow",
    role: "Higher Secondary (XII)",
    desc: "Specialized in PCM with Computer Science. Actively led technical workshops and participated in regional coding hackathons.",
    icon: <FiStar />,
  },
  {
    from: "2019",
    to: "2020",
    org: "Central Academy, Lucknow",
    role: "Secondary School (X)",
    desc: "Foundation in science and mathematics. First introduced to C++ and Web Technologies, sparking a lifelong interest in software development.",
    icon: <FiAward />,
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header - Matching "Work." style */}
        <div className="pt-10 pb-16 border-b border-slate-100 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <h2 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter">
            Journey<span className="text-blue-600">.</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-[250px] mb-4 uppercase text-xs tracking-[0.3em]">
            The academic path and milestones that shaped my expertise.
          </p>
        </div>

        {/* Vertical List Layout */}
        <div className="space-y-0">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative grid md:grid-cols-12 gap-8 py-12 border-b border-slate-50 last:border-none hover:bg-slate-50/50 transition-colors px-4 -mx-4 rounded-[2rem]"
            >
              {/* Left Side: Time Period */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black text-blue-600 uppercase tracking-widest">
                    {item.from} — {item.to}
                  </span>
                  <div className="h-[1px] flex-1 bg-blue-100 md:hidden" />
                </div>
              </div>

              {/* Middle Side: Icon & Details */}
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex w-14 h-14 shrink-0 rounded-2xl bg-white border border-slate-100 shadow-sm items-center justify-center text-slate-900 text-2xl group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
                      {item.org}
                    </h3>
                    <p className="text-blue-600 font-bold uppercase text-[10px] tracking-[0.2em] mb-4">
                      {item.role}
                    </p>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Index/Decoration */}
              <div className="md:col-span-3 flex md:justify-end items-center">
                <span className="text-6xl md:text-8xl font-black text-slate-50 opacity-[0.05] group-hover:opacity-100 group-hover:text-blue-50 transition-all duration-500">
                  0{index + 1}
                </span>
              </div>
              
              {/* Hover Interaction Arrow */}
              <div className="absolute top-12 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                <FiArrowUpRight className="text-3xl text-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to match the "Archive" vibe */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[3rem] bg-slate-100 text-center space-y-6 shadow-2xl shadow-blue-900/10"
        >
          <h4 className="text-slate-900 text-3xl font-black tracking-tight">Interested in the full story?</h4>
          <p className="text-slate-500 max-w-lg mx-auto">
            I’m always open to discussing technical collaborations and innovative software engineering roles.
          </p>
          <div className="pt-4">
             <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-sm tracking-widest hover:bg-blue-600 hover:text-white transition-all"
            >
              GET IN TOUCH
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}