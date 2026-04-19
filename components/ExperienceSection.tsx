"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    date: "February 2025 – March 2026",
    title: "Assistant Supply Chain Management",
    company: "Star Air, Bangalore",
    description: [
      "Supporting end-to-end supply chain operations, including procurement coordination, logistics, and inventory control.",
      "Tracking material requisitions, managing purchase orders, and monitoring shortage risks to ensure uninterrupted stock availability.",
      "Assisted Material Planning Officers in data compilation required for Float calculations, Float Review, Surplus reviews, Non-moving parts etc.",
      "Collaborated with material officers to define part numbers and setup interchangeabilities in the ERP system after collecting the required data from IPC.",
      "Collaborated with cross-functional teams to streamline processes and improve operational efficiency.",
      "Collaborated with Repairs, Maintenance, and Warehouse teams to address material shortages from Nil stock reports, track Dues-In components, and resolve discrepancies efficiently."
    ]
  },
  {
    date: "Mar 2024 – Apr 2024",
    title: "Intern – Airport Operations",
    company: "Airports Authority of India, Chennai",
    description: [
      "Assisted in airport operations, project management, and data analysis for efficiency improvements.",
      "Supported operational teams in implementing workflow changes that enhanced efficiency by 20%.",
      "Gained exposure to airport regulatory compliance, air traffic flow, and operational planning."
    ]
  }
];

const research = [
  {
    date: "May 2024",
    title: "Passenger Satisfaction & Airline Performance Analysis",
    company: "Hindustan University",
    description: [
      "Conducted a comprehensive study on airline service quality and passenger behavioral intentions.",
      "Analyzed key service quality dimensions such as in-flight service, seat comfort, cabin environment, and baggage handling.",
      "Applied statistical tools including Factor Analysis and Chi-square test to identify relationships between service quality and customer satisfaction.",
      "Identified that in-flight amenities and overall service quality significantly influence passenger satisfaction and airline preference.",
      "Evaluated passenger behavior across different travel classes, highlighting high preference for economy class travel.",
      "Provided strategic recommendations to improve customer experience, service delivery, and airline competitiveness."
    ],
    links: [
      { name: "Learn More", url: "/files/research project.pdf" },
      { name: "View", url: "/files/research.pdf" }
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight flex items-center">
            <span className="text-blue-500 mr-4 text-2xl font-mono">02.</span> Experience & Research
            <div className="h-px bg-neutral-800 flex-1 ml-6"></div>
          </h2>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-neutral-800 pb-2 inline-block">Work Experience</h3>
              <div className="space-y-12 pl-6 md:pl-0 border-l border-neutral-800 md:border-none">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative md:grid md:grid-cols-4 md:gap-8 items-start group">
                    <div className="hidden md:block absolute w-px h-full bg-neutral-800 left-[24.5%] top-8 group-last:bg-transparent"></div>
                    <div className="md:text-right mt-1 mb-2 md:mb-0 text-neutral-500 font-mono text-sm relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[1.65rem] top-1.5 md:hidden"></div>
                      <div className="hidden md:block absolute w-3 h-3 bg-blue-500 rounded-full -right-[1.1rem] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      {exp.date}
                    </div>
                    <div className="md:col-span-3 pb-8">
                      <h4 className="text-xl font-bold text-neutral-100">{exp.title}</h4>
                      <h5 className="text-blue-500 font-medium mb-4">{exp.company}</h5>
                      <ul className="space-y-2 text-neutral-400">
                        {exp.description.map((desc, j) => (
                          <li key={j} className="flex"><span className="text-blue-500 mr-2 mt-1">▹</span><span className="flex-1">{desc}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-neutral-800 pb-2 inline-block">Research</h3>
              <div className="space-y-12 pl-6 md:pl-0 border-l border-neutral-800 md:border-none">
                {research.map((res, i) => (
                  <div key={i} className="relative md:grid md:grid-cols-4 md:gap-8 items-start group">
                    <div className="hidden md:block absolute w-px h-full bg-neutral-800 left-[24.5%] top-8 group-last:bg-transparent"></div>
                    <div className="md:text-right mt-1 mb-2 md:mb-0 text-neutral-500 font-mono text-sm relative">
                      <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[1.65rem] top-1.5 md:hidden"></div>
                      <div className="hidden md:block absolute w-3 h-3 bg-emerald-500 rounded-full -right-[1.1rem] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                      {res.date}
                    </div>
                    <div className="md:col-span-3 pb-8">
                      <h4 className="text-xl font-bold text-neutral-100">{res.title}</h4>
                      <h5 className="text-emerald-500 font-medium mb-4">{res.company}</h5>
                      <ul className="space-y-2 text-neutral-400 mb-6">
                        {res.description.map((desc, j) => (
                          <li key={j} className="flex"><span className="text-emerald-500 mr-2 mt-1">▹</span><span className="flex-1">{desc}</span></li>
                        ))}
                      </ul>
                      {res.links && (
                        <div className="flex gap-4">
                          {res.links.map((link, j) => (
                            <a key={j} href={link.url} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-sm transition-colors font-mono">
                              {link.name} <span className="ml-1">↗</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
