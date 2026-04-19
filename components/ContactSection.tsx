"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.errors?.[0] || "Something went wrong.");
      }

      toast.success("Message sent successfully!", { id: toastId });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900/30">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-blue-500 text-2xl md:text-3xl font-normal block mb-2 font-mono">06. What's Next?</span>
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="space-y-8 md:col-span-1">
                <div>
                    <h4 className="text-white font-bold mb-2">Location</h4>
                    <p className="text-neutral-400 font-mono text-sm">Puducherry, India</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-2">Phone</h4>
                    <p className="text-neutral-400 font-mono text-sm">+91 8098280242</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-2">Email</h4>
                    <p className="text-neutral-400 font-mono text-sm">mohamadnaseer515@gmail.com</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Socials</h4>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://www.linkedin.com/in/mohamadnaseer/" className="text-neutral-400 hover:text-blue-500 transition-colors">LinkedIn</a>
                        <a href="https://github.com/Mohamadnaseer" className="text-neutral-400 hover:text-blue-500 transition-colors">GitHub</a>
                        <a href="https://www.kaggle.com/mohamadnaseer" className="text-neutral-400 hover:text-blue-500 transition-colors">Kaggle</a>
                    </div>
                </div>
            </div>

            <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-white placeholder-neutral-600 font-mono text-sm"
                        placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-white placeholder-neutral-600 font-mono text-sm"
                        placeholder="Your Email"
                        />
                    </div>
                    </div>
                    <div>
                        <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-white placeholder-neutral-600 font-mono text-sm"
                        placeholder="Subject"
                        />
                    </div>
                    <div>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-white placeholder-neutral-600 resize-none font-mono text-sm"
                        placeholder="Message"
                    ></textarea>
                    </div>
                    <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-mono text-sm"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                    </div>
                </form>
            </div>
          </div>
        </motion.div>
      </div>
      
      <footer className="text-center mt-24 text-neutral-500 text-xs font-mono border-t border-neutral-800 pt-8 max-w-5xl mx-auto">
        <p>&copy; Mohamad Naseer's Portfolio, All Rights Reserved. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </section>
  );
}
