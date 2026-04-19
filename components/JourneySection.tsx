"use client";

import { motion } from "framer-motion";

export default function JourneySection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-emerald-500"></div>
          
          <h2 className="text-3xl font-bold mb-8 text-white">My <span className="text-blue-400">Journey</span></h2>
          
          <div className="space-y-6 text-neutral-400 leading-relaxed">
            <p>
              My journey began in Puducherry, where I developed a strong interest in technology and problem-solving. I pursued a Bachelor's degree in Computer Applications, building a solid foundation in programming, data management, and analytical thinking.
            </p>
            <p>
              Driven by my passion for the aviation industry, I went on to complete my MBA in Aviation Management from Hindustan Institute of Technology & Science. During this time, I gained in-depth knowledge of airline operations, airport management, and aviation regulations, while also working on research focused on passenger satisfaction and airline performance.
            </p>
            <p>
              My professional journey took off with an internship at Airports Authority of India in Chennai, where I gained hands-on exposure to airport operations, compliance, and process optimization.
            </p>
            <p>
              I further strengthened my expertise by working as an Assistant in Supply Chain Management at Star Air in Bangalore. Here, I was involved in end-to-end supply chain activities including procurement, logistics, inventory control, and pool management. I also contributed to aircraft component tracking, ERP system management, and asset monetization processes, gaining practical insights into aviation logistics and operational efficiency.
            </p>
            <p>
              A key highlight of my experience was being actively involved in aircraft dismantling (part-out) projects. I supported CAMO-controlled dismantling activities by reviewing technical records, tracking component history, and evaluating LLP/TBO status. I also assisted in identifying serviceable and high-value components for reuse and monetization, while ensuring proper documentation and compliance with aviation regulatory standards. This experience gave me a deeper understanding of aircraft lifecycle management and asset optimization.
            </p>
            <p>
              Today, I stand at the intersection of aviation and data-driven decision-making, equipped with strong analytical skills, technical knowledge, and industry experience. I am passionate about optimizing operations, improving efficiency, and contributing meaningfully to the aviation and supply chain sectors.
            </p>
          </div>
          
          <div className="mt-10 text-center">
            <a href="/files/cv.pdf" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors cursor-pointer">
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
