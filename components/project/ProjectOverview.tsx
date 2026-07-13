"use client";
// components/projects/ProjectOverview.tsx
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/data/portfolioData";
import { Activity, LayoutTemplate, AlertTriangle, ArrowUpRight, Cpu, FileText } from "lucide-react";
import { sectionFadeVariants, cardContentVariants } from "@/lib/animations";

interface ProjectOverviewProps {
  project: ProjectItem;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="w-full bg-[#fafafa]">
      <Container className="py-0 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="lg:col-span-8 flex flex-col gap-12">

            {/* Overview */}
            <motion.div
              variants={sectionFadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-sm font-black uppercase tracking-widest text-zinc-900 mb-6 border-b border-zinc-400 pb-3 flex items-center gap-3">
                <FileText size={18} className="text-indigo-500" />
                Project Overview
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                {project.overview}
              </p>
            </motion.div>

            {/* Logic Architecture */}
            <motion.div
              variants={cardContentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-zinc-800 border border-zinc-700 rounded-3xl p-8 lg:p-10 shadow-xl shadow-zinc-900/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50"></div>

              <h2 className="text-sm font-black uppercase tracking-widest text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                  <Cpu size={16} className="text-indigo-400" />
                </div>
                Logic Architecture
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed">
                {project.logicArchitecture}
              </p>
            </motion.div>

          </div>

          {/* Right Column */}
          <motion.div
            variants={cardContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32 flex flex-col gap-8 bg-zinc-800 border border-zinc-700 p-8 rounded-3xl shadow-xl shadow-zinc-900/10">
              <h3 className="text-sm font-black uppercase tracking-widest text-white border-b border-zinc-800 pb-3">
                Project Specifications
              </h3>

              <div className="flex flex-col gap-6">
                <div>
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5">
                    <Activity size={14} className="text-indigo-400" /> Status
                  </span>
                  <span className="block text-sm font-bold text-zinc-100">{project.metadata.status}</span>
                </div>

                <div>
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5">
                    <LayoutTemplate size={14} className="text-indigo-400" /> Target Viewport
                  </span>
                  <span className="block text-sm font-bold text-zinc-100">{project.metadata.responsiveness}</span>
                </div>

                {project.metadata.limitations && (
                  <div>
                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5">
                      <AlertTriangle size={14} className="text-indigo-400" /> Known Limitations
                    </span>
                    <span className="block text-sm text-zinc-300 leading-relaxed">{project.metadata.limitations}</span>
                  </div>
                )}

                {project.metadata.futureImprovements && (
                  <div>
                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                      <ArrowUpRight size={14} className="text-indigo-400" /> Future Roadmap
                    </span>
                    <ul className="list-disc list-inside text-sm text-zinc-300 flex flex-col gap-2">
                      {project.metadata.futureImprovements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
