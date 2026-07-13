"use client";
// components/projects/ProjectHero.tsx
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/data/portfolioData";
import Link from "next/link";
import { ExternalLink, GitBranch, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { sectionFadeVariants, cardContentVariants, tagContainerVariants, tagPopVariants } from "@/lib/animations";

interface ProjectHeroProps {
  project: ProjectItem;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="w-full bg-[#fafafa]">
      <Container className="flex flex-col gap-8 py-0 md:py-0">

        {/* Breadcrumb Navigation */}
        <motion.div
          variants={sectionFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500"
        >
          <Link 
            href="/#projects" 
            className="hover:text-indigo-600 transition-colors"
          >
            Projects
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="text-indigo-600">{project.title}</span>
        </motion.div>

        {/* Title, Logo & Pitch */}
        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6 max-w-4xl"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Logo Box */}
            <motion.div
              variants={cardContentVariants}
              className="w-16 h-16 md:w-20 md:h-20 border-zinc-400 border rounded-2xl flex items-center justify-center p-3 shadow-md shadow-zinc-100/50 shrink-0"
            >
              {project.logoUrl ? (
                <img
                  src={project.logoUrl}
                  alt={`${project.title} logo`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-xl font-black text-indigo-500 tracking-tighter">
                  {project.title.substring(0, 2)}
                </span>
              )}
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-zinc-800 tracking-tighter uppercase leading-[1.05]">
              {project.title}
            </h1>
          </div>

          <p className="text-xl md:text-2xl font-medium text-zinc-600 leading-relaxed mt-2">
            {project.pitch}
          </p>

          {/* Metadata Tags */}
          <motion.div
            variants={tagContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-200"
          >
            <motion.span variants={tagPopVariants} className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full shadow-sm">
              Frontend Architecture
            </motion.span>
            <motion.span variants={tagPopVariants} className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full shadow-sm">
              {project.metadata.status}
            </motion.span>
            <motion.span variants={tagPopVariants} className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full shadow-sm">
              {project.metadata.responsiveness}
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Action Controls */}
        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6 pt-2 border-t border-zinc-100"
        >
          <div className="flex flex-wrap items-center gap-4">
            {/* Live Demo */}
            {project.demoUrl && project.demoUrl !== "#" ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300",
                  "bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20",
                  "text-xs font-bold uppercase tracking-widest"
                )}
              >
                Live Demo <ExternalLink size={14} />
              </a>
            ) : (
              <span
                className={cn(
                  "flex items-center gap-2 px-6 py-3.5 rounded-xl",
                  "bg-zinc-100 border border-zinc-200 text-zinc-400 cursor-not-allowed",
                  "text-xs font-bold uppercase tracking-widest"
                )}
                title="Live demo not currently available"
              >
                Live Demo <ExternalLink size={14} />
              </span>
            )}

            {/* Source Code */}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300",
                  "bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-100 shadow-md",
                  "text-xs font-bold uppercase tracking-widest"
                )}
              >
                Source Code <GitBranch size={14} />
              </a>
            )}
          </div>

          {/* Gallery Link */}
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-indigo-600 self-start sm:self-center transition-colors py-2"
          >
            View Gallery
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-300 text-zinc-400 group-hover:text-indigo-500" />
          </button>
        </motion.div>

      </Container>
    </section>
  );
}
