"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-900 via-background to-background -z-10"></div>
      <div className="text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-blue-400 font-mono mb-4 text-lg"
        >
          I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white"
        >
          Mohamad Naseer.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-neutral-400 tracking-tighter mb-6"
        >
          Static Web Designer | Aviation Supply Chain 
          <br className="hidden md:block"/> | Supply Chain Analyst
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10"
        >
          Passionate about Aviation and leveraging technology and data.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded font-mono transition-colors"
          >
            REACH ME
          </a>
        </motion.div>
      </div>
    </section>
  );
}
