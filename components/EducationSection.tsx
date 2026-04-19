"use client";

import { motion } from "framer-motion";

const education = [
  {
    date: "2022 - 2024",
    title: "MBA (Aviation Management)",
    school: "Hindustan Institute of Technology & Science, Chennai",
    description: "During my MBA in Aviation Management, I actively promoted collaboration, offering real-world insights that enriched class projects and discussions."
  },
  {
    date: "2019 - 2022",
    title: "BCA (Computer Application)",
    school: "Achariya Arts and Science College, Villianur, Puducherry",
    description: "During my BCA, I showcased my commitment to practical problem-solving through projects like the 'Real Estate Management System' and Machine Learning applications, while excelling in coursework."
  }
];

const certifications = [
  { date: "FEBRUARY 2022", title: "Big Data Analysis", org: "Skill India" },
  { date: "FEBRUARY 2022", title: "Cloud Architecture with AWS", org: "Skill India" },
  { date: "NOVEMBER 2021", title: "DNT (Diploma in Networking Technology)", org: "TCIL-IT Education & Training" },
  { date: "MARCH 2021", title: "DCHM (Diploma in Computer Hardware Maintenance)", org: "TCIL-IT Education & Training" },
  { date: "JULY 2021", title: "Machine Learning Masters", org: "ineuron.ai" }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-neutral-900/30">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight flex items-center">
            <span className="text-blue-500 mr-4 text-2xl font-mono">03.</span> Education & Certifications
            <div className="h-px bg-neutral-800 flex-1 ml-6"></div>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
              <div className="space-y-8 pl-6 border-l border-neutral-800">
                {education.map((edu, i) => (
                  <div key={i} className="relative">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[1.95rem] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <div className="text-neutral-500 font-mono text-sm mb-1">{edu.date}</div>
                    <h4 className="text-xl font-bold text-neutral-100">{edu.title}</h4>
                    <h5 className="text-blue-500 font-medium mb-3">{edu.school}</h5>
                    <p className="text-neutral-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Courses & Certifications</h3>
              <div className="space-y-6 pl-6 border-l border-neutral-800">
                {certifications.map((cert, i) => (
                  <div key={i} className="relative">
                    <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[1.95rem] top-1.5"></div>
                    <div className="text-neutral-500 font-mono text-sm mb-1">{cert.date}</div>
                    <h4 className="text-lg font-bold text-neutral-200">{cert.title}</h4>
                    <h5 className="text-indigo-400 text-sm">{cert.org}</h5>
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
