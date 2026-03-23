"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Lock,
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Lock body scroll & trap focus
  useEffect(() => {
    if (!project) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // Reset active image and lightbox when project changes
  useEffect(() => {
    setActiveImage(0);
    setLightboxOpen(false);
  }, [project?.id]);

  const screenshots = project?.screenshots ?? [];
  const hasScreenshots = screenshots.length > 0;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 shadow-2xl"
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Image Gallery */}
            <div className="relative h-56 sm:h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
              {hasScreenshots ? (
                <>
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute inset-0 z-[1] cursor-zoom-in"
                    aria-label="View full size image"
                  >
                    <Image
                      src={screenshots[activeImage]}
                      alt={`${project.title} screenshot ${activeImage + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                  {screenshots.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setActiveImage((prev) =>
                            prev === 0 ? screenshots.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() =>
                          setActiveImage((prev) =>
                            prev === screenshots.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Eye
                    size={48}
                    className="text-primary/30"
                  />
                </div>
              )}
            </div>

            {/* Thumbnail strip */}
            {hasScreenshots && screenshots.length > 1 && (
              <div className="flex gap-2 px-6 py-3 overflow-x-auto bg-slate-50 dark:bg-slate-800/50">
                {screenshots.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                      i === activeImage
                        ? "border-primary"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View screenshot ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {/* Title + badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-amber-400 text-amber-950">
                    <Star size={12} className="fill-amber-950" />
                    Featured
                  </span>
                )}
                {project.isPrivate && (
                  <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                    <Lock size={12} />
                    Private Project
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-5">
                {project.longDescription || project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links && project.links.length > 0 ? (
                <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-200 dark:border-slate-700/50">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : !project.isPrivate ? (
                <div className="flex gap-3 pt-2 border-t border-slate-200 dark:border-slate-700/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* Lightbox */}
      {lightboxOpen && project && screenshots.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          {screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) =>
                    prev === 0 ? screenshots.length - 1 : prev - 1
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) =>
                    prev === screenshots.length - 1 ? 0 : prev + 1
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
          <div
            className="relative w-[90vw] h-[85vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
