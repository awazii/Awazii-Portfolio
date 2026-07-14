"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/data/portfolioData";
import { AlertTriangle, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { sectionFadeVariants, cardVariants, cardContentVariants } from "@/lib/animations";

interface ProjectChallengesProps {
  project: ProjectItem;
}

export default function ProjectChallenges({ project }: ProjectChallengesProps) {
  if (!project.challenges || project.challenges.length === 0) return null;

  return (
    <section className="w-full">
      <Container className="py-0 md:py-0">
        <motion.h2
          variants={sectionFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-sm font-black uppercase tracking-widest text-zinc-800 mb-12 border-b border-zinc-400 pb-3 flex items-center gap-3"
        >
          <ChevronRight size={18} className="text-indigo-500" />
          Technical Challenges
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {project.challenges.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }} 
              className={cn(
                "bg-zinc-800 p-8 rounded-3xl border border-zinc-700 flex flex-col gap-6",
                "hover:border-zinc-600 transition-all duration-300"
              )}
            >
              <motion.div variants={cardContentVariants} className="flex flex-col gap-2">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                  <AlertTriangle size={14} /> Problem
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {item.problem}
                </p>
              </motion.div>
              <motion.div
                variants={cardContentVariants}
                className="flex flex-col gap-2 pt-6 border-t border-zinc-700/50"
              >
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Solution
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.solution}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
