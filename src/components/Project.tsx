"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Healthify - Virtual Herbal Garden",
    tech: ["React", "Flask", "Scikit-learn"],
    desc: "A full-stack platform for plant recognition and disease suggestions using ML. Achieved ~92% accuracy with 8,000+ plant images and optimized prediction speed by 30%.",
    image: "/healthify.webp",
    link: "https://github.com/Shauryam-singh/Virtual-Herbal-Garden",
    github: "https://github.com/Shauryam-singh/Virtual-Herbal-Garden",
    year: "2025",
  },
  {
    title: "AI-CodeReview-Assistant",
    tech: ["React", "Flask", "Python"],
    desc: "An AI-powered tool that automates code reviews, reducing manual review time by 40-60%. Integrated modern frameworks to streamline developer workflows.",
    image: "/aicodereview.webp",
    link: "https://github.com/Shauryam-singh/AI-CodeReview-Assistant",
    github: "https://github.com/Shauryam-singh/AI-CodeReview-Assistant",
    year: "2025",
  },
  {
    title: "Women Safety AI",
    tech: ["OpenCV", "Mediapipe", "Python"],
    desc: "An AI-powered safety application that detects distress signals and gestures to trigger automated emergency alerts.",
    image: "/womensafety.webp",
    link: "https://github.com/Shauryam-singh/Women-Safety",
    github: "https://github.com/Shauryam-singh/Women-Safety",
    year: "2024",
  }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <div ref={container} className="min-h-screen flex items-center justify-center relative py-12 md:py-24">
      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 w-full`}>
        
        {/* Project Image Area - Locked to 16:9 Ratio */}
        <motion.div 
          style={{ scale }}
          className="w-full lg:w-[60%] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-slate-50 aspect-video relative group shadow-2xl border border-slate-100"
        >
          <motion.img
            style={{ y }}
            src={project.image}
            alt={project.title}
            // h-[120%] ensures the image is taller than the 16:9 container for parallax room
            className="w-full h-[120%] object-cover absolute top-0 grayscale group-hover:grayscale-0 transition-all duration-1000 will-change-transform"
          />
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700" />
          
          <div className="absolute bottom-8 left-8 flex gap-2">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-xl">
              Made in {project.year}
            </span>
          </div>
        </motion.div>

        {/* Project Content Area */}
        <motion.div 
          style={{ opacity }}
          className="w-full lg:w-[40%] space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-7xl font-black text-slate-50 tracking-tighter select-none">0{index + 1}</span>
              <div className="h-[2px] flex-1 bg-slate-100" />
            </div>
            
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              {project.title.split(' ')[0]} <br />
              <span className="text-blue-600">{project.title.split(' ').slice(1).join(' ')}</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span key={t} className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-400">
                {t}
              </span>
            ))}
          </div>

          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            {project.desc}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            {/*<motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] tracking-[0.2em] shadow-2xl shadow-slate-200 uppercase"
            >
              Live Demo <FiExternalLink />
            </motion.a>*/}
            <a 
              href={project.github} 
              target="_blank"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase transition-colors"
            >
              <FiGithub size={18} /> Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Project() {
  return (
    <section id="project" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="pt-10 pb-16 border-b border-slate-100 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <h2 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter">
            Work<span className="text-blue-600">.</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-[250px] mb-4 uppercase text-xs tracking-[0.3em]">
            Curated selection of my favorite builds and research.
          </p>
        </div>

        {/* Parallax List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Archive - Matching the Bottom CTA style */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-20 p-16 rounded-[4rem] bg-slate-50 border border-slate-100 text-center space-y-8"
        >
          <h4 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
            Exploring the full <br /> <span className="text-blue-600 italic">Technical Archive?</span>
          </h4>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest max-w-md mx-auto">
            Browse through 20+ experiments and open-source contributions on GitHub.
          </p>
          <div className="flex justify-center pt-4">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/Shauryam-singh" 
              target="_blank"
              className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xs tracking-widest hover:bg-blue-600 transition-all shadow-2xl uppercase"
            >
              <FiGithub size={20} /> View All Repositories
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}