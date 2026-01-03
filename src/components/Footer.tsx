"use client";
import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col">
          
          {/* Top Row: Branding & Navigation */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-10">
            <div className="flex items-center space-x-5">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="relative"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/175140016?v=4"
                  alt="Shauryam Singh"
                  className="h-16 w-16 rounded-[1.25rem] grayscale hover:grayscale-0 transition-all duration-700 border-2 border-white shadow-2xl"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white" />
              </motion.div>
              <div>
                <h4 className="font-black text-slate-900 text-3xl tracking-tighter leading-none">SHAURYAM.</h4>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">Full Stack Architect</p>
              </div>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-blue-600 hover:bg-white hover:shadow-xl transition-all"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Return to start</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Middle Section: Links & Socials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-slate-100 pb-20">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-2xl font-black text-slate-900 tracking-tight max-w-sm">
                Creating digital experiences where <span className="text-blue-600">innovation</span> meets logic.
              </p>
            </div>
            
            <div className="space-y-6">
              <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Contact Information</h5>
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-900">shauryamsingh9@gmail.com</p>
                <p className="text-sm font-bold text-slate-400">+91 6307257097</p>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Social Presence</h5>
              <div className="flex space-x-4">
                {[
                  { icon: <Github size={20} />, link: "https://github.com/Shauryam-singh/" },
                  { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/shauryam-singh" },
                  { icon: <Instagram size={20} />, link: "https://instagram.com/shauryam_singh" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    whileHover={{ y: -5, color: "#2563eb" }}
                    className="text-slate-400 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Final Bottom Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
              © 2025 <span className="text-slate-900">Shauryam Singh</span>. Built with React & Framer.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Open for Collaboration</span>
              </div>
              <span className="h-4 w-px bg-slate-200" />
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Lucknow, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}