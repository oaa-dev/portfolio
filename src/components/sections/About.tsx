"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Mail, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, techStackIcons } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me and what I do"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-6xl font-bold text-gradient">
                  {siteConfig.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {siteConfig.aboutHeading}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 whitespace-pre-line">
              {siteConfig.bio}
            </p>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin size={16} className="text-primary" />
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail size={16} className="text-primary" />
                {siteConfig.email}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={16} className="text-primary" />
                {siteConfig.yearsExperience} years experience
              </span>
            </div>

            <a
              href={siteConfig.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
            Tech I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStackIcons.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
