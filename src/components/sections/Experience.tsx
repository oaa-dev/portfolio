"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and career milestones"
        />

        <div className="grid gap-5 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="shrink-0 mt-0.5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Briefcase size={20} className="text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <span className="text-sm font-mono text-primary whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-secondary font-medium mb-3">{exp.company}</p>

                <ul className="space-y-1.5 mb-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex gap-2"
                    >
                      <span className="text-primary shrink-0 mt-1">&#9656;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
