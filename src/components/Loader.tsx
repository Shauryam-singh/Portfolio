import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [percent, setPercent] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2,
      ease: "circOut",
      onUpdate: (latest) => setPercent(Math.round(latest)),
    });
    return controls.stop;
  }, [count]);

  const words = "INITIALIZING PORTFOLIO".split("");

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white"
    >
      {/* 1. The Main Branding Shape */}
      <div className="relative mb-12">
        <motion.div
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 2, ease: "anticipate", repeat: Infinity }}
          className="w-20 h-20 border-[3px] border-slate-100 border-t-blue-600 rounded-full"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-xs font-black text-slate-900">{percent}%</span>
        </motion.div>
      </div>

      {/* 2. Staggered Text Reveal */}
      <div className="flex overflow-hidden mb-6">
        {words.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: i * 0.05,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 inline-block w-[1.2em]"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* 3. The Minimalist Progress Line */}
      <div className="w-64 h-[1px] bg-slate-100 relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "circOut" }}
          className="absolute h-full left-0 top-0 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"
        />
      </div>

      {/* 4. Background Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        className="absolute bottom-10 text-[12vw] font-black text-slate-900 pointer-events-none select-none"
      >
        SHAURYAM
      </motion.div>
    </motion.div>
  );
};

export default Loader;