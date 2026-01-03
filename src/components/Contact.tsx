"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    toast.loading("Relaying message...", { id: "send" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      )
      .then(() => {
        toast.success("Message delivered successfully!", { id: "send" });
        form.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Handshake failed. Please try again.", { id: "send" });
    });
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <Toaster position="bottom-right" />
      
      {/* Background Subtle Detail */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-100" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header - Matching "Work." and "Story." style */}
        <div className="pt-10 pb-16 border-b border-slate-100 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <h2 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter">
            Contact<span className="text-blue-600">.</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-[280px] mb-4 uppercase text-xs tracking-[0.3em] leading-relaxed">
            Ready to initiate a project or technical consultation?
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Editorial Info (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-none">
                Let's architect <br />
                <span className="text-blue-600 italic">digital excellence.</span>
              </h3>
              <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-medium">
                My inbox is always open for collaborations, research opportunities, or just a coffee chat.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:shauryamsingh9@gmail.com" className="group block p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Direct Email</p>
                    <p className="text-slate-900 font-black text-sm">shauryamsingh9@gmail.com</p>
                  </div>
                </div>
              </a>

              <a href="tel:+916307257097" className="group block p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Mobile Connection</p>
                    <p className="text-slate-900 font-black text-sm">+91 6307257097</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <motion.a whileHover={{ y: -4 }} href="https://www.linkedin.com/in/shauryam-singh" className="p-5 bg-slate-900 text-white rounded-2xl hover:bg-blue-600 transition-colors shadow-lg"><FiLinkedin size={20} /></motion.a>
              <motion.a whileHover={{ y: -4 }} href="https://github.com/shauryam-singh" className="p-5 bg-slate-900 text-white rounded-2xl hover:bg-blue-600 transition-colors shadow-lg"><FiGithub size={20} /></motion.a>
            </div>
          </motion.div>

          {/* Right Side: The Form (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-2 md:p-4 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
          >
            <form ref={form} onSubmit={sendEmail} className="bg-slate-50 p-8 md:p-12 rounded-[3rem] space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Identity</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-slate-300 font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Digital Address</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="email@example.com"
                    className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-slate-300 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Topic of Interest</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project, Hire, or Inquiry"
                  className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-slate-300 font-medium"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Brief Narrative</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your vision..."
                  className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-slate-300 font-medium resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-slate-900 text-white font-black py-6 rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-4 shadow-xl shadow-slate-900/10 text-xs tracking-[0.2em] uppercase"
              >
                Transmit Message <FiSend size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}