"use client";
import { motion } from "framer-motion";
import { 
  FiLayout, FiCode, FiServer, 
  FiDatabase, FiShield, FiCpu, FiArrowRight 
} from "react-icons/fi";

const services = [
  {
    title: "Interface Design",
    desc: "Crafting high-fidelity, user-centric wireframes and digital interfaces. I prioritize clean aesthetics and fluid responsiveness across all device breakpoints.",
    tech: ["Figma", "UX Strategy", "Responsive"],
    icon: <FiLayout />,
  },
  {
    title: "Frontend Engineering",
    desc: "Developing fast, interactive client-side applications. I use modern component architectures to build scalable interfaces that feel instantaneous.",
    tech: ["React.js", "Node.js", "Tailwind"],
    icon: <FiCode />,
  },
  {
    title: "Backend Architecture",
    desc: "Engineering the invisible core of your application. I build robust server environments and handle complex business logic to ensure 99.9% reliability.",
    tech: ["Node.js", "Express", "Python"],
    icon: <FiCpu />,
  },
  {
    title: "Database Systems",
    desc: "Designing optimized data schemas for speed and integrity. I implement relational and non-relational structures tailored to your specific query needs.",
    tech: ["PostgreSQL", "MongoDB", "SQL"],
    icon: <FiDatabase />,
  },
  {
    title: "API Development",
    desc: "Building secure, documented RESTful bridges. I ensure seamless data communication between your frontend, backend, and third-party integrations.",
    tech: ["REST", "Webhooks", "JSON"],
    icon: <FiServer />,
  },
  {
    title: "Cloud & Security",
    desc: "Hardening your application against vulnerabilities. I manage the full deployment lifecycle, from SSL implementation to automated cloud scaling.",
    tech: ["AWS", "Auth0", "Docker"],
    icon: <FiShield />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header - Matching "Work." style */}
        <div className="pt-10 pb-16 border-b border-slate-100 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <h2 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter">
            Expertise<span className="text-blue-600">.</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-[280px] mb-4 uppercase text-xs tracking-[0.3em] leading-relaxed">
            A comprehensive suite of technical capabilities for the modern digital era.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white p-12 hover:bg-slate-50 transition-colors duration-500 relative overflow-hidden"
            >
              {/* Icon & Index */}
              <div className="flex justify-between items-start mb-12">
                <div className="text-4xl text-slate-900 group-hover:text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {service.icon}
                </div>
                <span className="text-6xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed mb-10 text-sm font-medium">
                {service.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white border border-slate-100 text-slate-400 text-[9px] font-black uppercase tracking-widest rounded-md group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover Decorative Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Minimal Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <div className="px-12 py-10 rounded-[2.2rem] bg-white shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="text-left">
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">Have a specific requirement?</h4>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">I am open to custom technical consultations.</p>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-[0.2em] uppercase flex items-center gap-3 hover:bg-blue-600 transition-colors"
              >
                Start a conversation <FiArrowRight />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}