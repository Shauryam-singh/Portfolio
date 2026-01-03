"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const sections = ["home", "about", "resume", "services", "project", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled || mobileMenuOpen 
            ? "py-3 bg-white/70 backdrop-blur-xl border-b border-slate-100 shadow-sm" 
            : "py-8 bg-transparent"
        }`}
      >
        {/* Subtle Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-600 origin-left"
          style={{ scaleX }}
        />

        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Brand with Perspective Hover */}
          <motion.a 
            whileHover={{ x: 5 }}
            href="#home" 
            className="flex items-center gap-3 relative z-[101]"
          >
            <div className="h-9 w-9 rounded-lg overflow-hidden border border-slate-200 shadow-inner group">
              <img 
                src="https://avatars.githubusercontent.com/u/175140016?v=4" 
                alt="Logo" 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <span className="font-black text-lg tracking-tighter uppercase text-slate-900">
              Shauryam<span className="text-blue-600">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav - Pill Design */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
              {sections.map((section) => (
                <li key={section} className="relative">
                  <a
                    href={`#${section}`}
                    className={`relative z-10 px-5 py-2 text-[9px] font-black uppercase tracking-[0.25em] transition-all duration-500 block ${
                      activeSection === section ? "text-white" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {section}
                  </a>
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-slate-900 rounded-full z-0"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:block">
              <motion.a
                whileHover={{ y: -1 }}
                href="#contact"
                className="group text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2"
              >
                Start a Project
                <span className="w-8 h-[1px] bg-blue-600 group-hover:w-12 transition-all duration-500" />
              </motion.a>
            </div>

            {/* Premium Hamburger Toggle */}
            <button
              className="relative z-[101] w-10 h-10 flex lg:hidden flex-col items-center justify-center rounded-full bg-slate-900 group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-4 flex flex-col gap-1">
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                  className="h-[1.5px] bg-white w-full block"
                />
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                  className="h-[1.5px] bg-white w-full block"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Fullscreen Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="fixed inset-0 bg-white z-[90] lg:hidden flex flex-col h-[100dvh] w-full overflow-hidden"
            >
              {/* Scrollable Content Wrapper */}
              <div className="flex-1 overflow-y-auto pt-32 pb-10 px-6 flex flex-col">
                
                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                  <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4">Site Map</p>
                  {sections.map((section, i) => (
                    <motion.div
                      key={section}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.2 }}
                    >
                      <a
                        href={`#${section}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-baseline gap-4 text-6xl font-black tracking-tighter leading-[0.9] transition-all ${
                          activeSection === section ? "text-blue-500" : "text-slate-900 hover:text-slate-500"
                        }`}
                      >
                        <span className="text-xs font-medium opacity-30 italic">0{i+1}</span>
                        {section}
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Section - Pushed to bottom of the viewport */}
                <div className="mt-auto pt-10 border-t border-slate-100">
                  <div className="grid grid-cols-1 gap-10">
                    
                    {/* Location Block */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                          Available For Work
                        </p>
                      </div>
                      <p className="text-slate-900 text-sm font-bold uppercase tracking-tight">
                        Lucknow, IN <span className="text-slate-300 mx-1">—</span> 2026
                      </p>
                    </div>

                    {/* Social Block */}
                    <div className="space-y-4">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        Digital Spaces
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { label: "GitHub", href: "https://github.com/shauryam-singh" },
                          { label: "LinkedIn", href: "https://linkedin.com/in/shauryam-singh" },
                          { label: "Gmail", href: "mailto:shauryamsingh9@gmail.com" }
                        ].map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[100px] text-center py-4 px-2 rounded-2xl bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-700 active:bg-blue-600 active:text-white active:scale-95 transition-all border border-slate-100"
                          >
                            {social.label}
                          </a>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}