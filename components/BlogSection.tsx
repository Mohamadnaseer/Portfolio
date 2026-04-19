"use client";

import { motion } from "framer-motion";

const articles = [
  {
    title: "Attended workshop on entrepreneurial skills development",
    category: "Management",
    date: "21-AUG-2023",
    description: "I had the privilege of attending a dynamic workshop focused on entrepreneurship development. This intensive program was an immersive experience that delved deep into the world of startups, innovation, and business growth. Over the course of the workshop, I had the chance to learn from seasoned entrepreneurs, industry experts, and successful business leaders. From understanding the fundamentals of business planning to mastering the art of pitching ideas, this workshop was a crash course in turning entrepreneurial dreams into reality. In this blog post, I'll share some of the invaluable insights and strategies I gained during my time at the workshop."
  },
  {
    title: "Conducted Seminar on Privatization of Air India",
    category: "Management",
    date: "27-APR-2022",
    description: "In the realm of aviation, few topics have generated as much intrigue and discussion as the privatization of Air India. With a profound passion for the aviation industry, I had the privilege of conducting a seminar that delved deep into the intricacies of this transformational process. Exploring the complexities of privatizing a national carrier, the seminar was a platform for sharing insights, fostering dialogue, and connecting with fellow enthusiasts and industry experts."
  },
  {
    title: "Undertook In-Plant Training – Lenovo (India) Pvt. Ltd.",
    category: "Technology",
    date: "MAR-2022",
    description: "I completed a one-week In-plant training program at Lenovo (India) Pvt. Ltd. (Laptop Manufacturing Unit), where I gained practical exposure to real-time manufacturing operations. During the training, I observed assembly line processes, quality control measures, and end-to-end production workflows, including component integration, testing, and final packaging."
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight flex items-center">
            <span className="text-blue-500 mr-4 text-2xl font-mono">05.</span> Latest Articles
            <div className="h-px bg-neutral-800 flex-1 ml-6"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col hover:border-neutral-700 transition-colors group"
              >
                <div className="h-40 bg-neutral-800 flex items-center justify-center border-b border-neutral-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors"></div>
                    <span className="text-blue-400 font-mono text-sm border border-blue-500/50 px-3 py-1 rounded-full z-10 bg-neutral-900/80 backdrop-blur-sm">{article.category}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-neutral-500 font-mono text-xs mb-3 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-3 group-hover:text-blue-400 transition-colors">{article.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">{article.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
