"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Flight ticket Price Prediction",
    description: "Machine learning model to predict flight ticket prices.",
    link: "#"
  },
  {
    title: "Car Price Prediction",
    description: "Predictive model for estimating used car prices.",
    link: "https://github.com/Mohamadnaseer/Car-Price-Prediction.git"
  },
  {
    title: "Student mark Prediction",
    description: "Data analysis tool for student academic performance.",
    link: "https://github.com/Mohamadnaseer/Student-mark-Prediction.git"
  },
  {
    title: "Web Scrapping",
    description: "Automated scripts for extracting structured data.",
    link: "https://github.com/Mohamadnaseer/web-scrapping.git"
  },
  {
    title: "Django",
    description: "Various backend projects developed using Django.",
    link: "https://github.com/Mohamadnaseer/django.git"
  },
  {
    title: "C#",
    description: "Software development projects utilizing C# and .NET.",
    link: "https://github.com/Mohamadnaseer/csharp_project.git"
  },
  {
    title: "Real Estate Management",
    description: "Management system for real estate properties.",
    link: "https://github.com/Mohamadnaseer/Real-Estate-management-system.git"
  },
  {
    title: "Exploratory Data Analysis",
    description: "In-depth EDA and visualization on datasets.",
    link: "https://github.com/Mohamadnaseer/EDA-Exploratory-data-analysis-.git"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-neutral-900/30">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight flex items-center">
            <span className="text-blue-500 mr-4 text-2xl font-mono">04.</span> Completed Projects
            <div className="h-px bg-neutral-800 flex-1 ml-6"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-blue-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-100 mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
