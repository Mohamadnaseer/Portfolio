"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/5 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold tracking-tighter mix-blend-difference z-10 text-white">
            <Link href="#hero">M.N</Link>
          </div>
          <div className="hidden md:flex space-x-6 text-xs font-mono text-neutral-400">
            <Link href="#hero" className="hover:text-blue-400 transition-colors">HOME</Link>
            <Link href="#about" className="hover:text-blue-400 transition-colors">ABOUT</Link>
            <Link href="#experience" className="hover:text-blue-400 transition-colors">EXPERIENCE</Link>
            <Link href="#education" className="hover:text-blue-400 transition-colors">EDUCATION</Link>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</Link>
            <Link href="#blog" className="hover:text-blue-400 transition-colors">BLOG</Link>
            <Link href="#contact" className="hover:text-blue-400 border border-blue-500/30 px-3 py-1 rounded hover:bg-blue-500/10 transition-colors -my-1">CONTACT</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
