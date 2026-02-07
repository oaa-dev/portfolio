"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  const socialLinks = [
    { icon: Github, href: siteConfig.social.github, label: "GitHub", handle: "betrnk-jc" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn", handle: "John Christian Oraa" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email", handle: siteConfig.email },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? Drop me a message!"
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 text-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">
                Let&apos;s work together
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you need a backend architect, an API developer,
                or a full-stack collaborator — feel free to reach out!
              </p>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Send Me an Email
              </a>
            </div>
          </motion.div>

          {/* Info Cards Stack */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Mail size={18} className="text-primary" />
              </div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-semibold hover:text-primary transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <MapPin size={18} className="text-primary" />
              </div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-sm font-semibold">{siteConfig.location}</p>
            </motion.div>
          </div>

          {/* Social Links Row */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="group flex items-center gap-3 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                  <link.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {link.label}
                    </p>
                    <ArrowUpRight size={14} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {link.handle}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
