"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-neutral-900/30">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight flex items-center">
            <span className="text-blue-500 mr-4 text-2xl font-mono">01.</span> About Me
            <div className="h-px bg-neutral-800 flex-1 ml-6"></div>
          </h2>
          <div className="text-neutral-400 max-w-3xl space-y-6 text-lg leading-relaxed">
            <p>
              I hold an MBA in Aviation Management with hands-on experience in airline supply chain operations and airport management. Skilled in procurement coordination, inventory management, logistics, and regulatory compliance, with strong technical expertise in ERP systems, data analysis, and reporting. Seeking to contribute to Supply Chain operations by combining aviation knowledge with analytical and process optimization skills.
            </p>
            <p>
              I've also pursued courses in Machine Learning and earned Diplomas in Network Technology and Computer Hardware Maintenance.
            </p>
            <p>
              During my BCA, I developed a 'Real Estate Management System' and worked on Machine Learning projects like 'Flight Price Prediction' and 'Review Scraper.'
            </p>
            <p>
              I'm now actively seeking opportunities in aviation, aiming to leverage my skills and education to make a meaningful impact. Let's connect and explore possibilities!
            </p>
            <div className="pt-6">
              <a 
                href="https://www.linkedin.com/in/mohamadnaseer/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded transition-colors font-mono text-sm"
              >
                Learn More (LinkedIn)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
