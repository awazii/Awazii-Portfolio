"use client";
// components/projects/ProjectNavigation.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolioData";
import { sectionFadeVariants, cardContentVariants } from "@/lib/animations";

interface ProjectNavigationProps {
  currentProjectId: string;
}

export default function ProjectNavigation({ currentProjectId }: ProjectNavigationProps) {
  const currentIndex = portfolioData.findIndex((p) => p.id === currentProjectId);
  const nextIndex = (currentIndex + 1) % portfolioData.length;
  const nextProject = portfolioData[nextIndex];

  return (
    <section className="w-full bg-[#0c0c0e] py-32 mt-20 border-t border-zinc-800">
      <Container className="flex flex-col items-center text-center gap-6 py-0 md:py-0">
        
        {/* Heading */}
        <motion.span
          variants={sectionFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-sm font-bold uppercase tracking-widest text-indigo-500"
        >
          Next Case Study
        </motion.span>
        
        {/* Next Project Link */}
        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link href={`/projects/${nextProject.id}`} className="group">
            <h2 className="text-5xl md:text-7xl font-black text-slate-100 uppercase tracking-tighter group-hover:text-white transition-colors">
              {nextProject.title}
            </h2>
            <div className="mt-4 w-0 group-hover:w-full h-1 bg-indigo-500 transition-all duration-500 mx-auto"></div>
          </Link>
        </motion.div>

      </Container>
    </section>
  );
}
