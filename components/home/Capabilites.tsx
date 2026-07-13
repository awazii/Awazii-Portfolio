"use client";
// components/home/Capabilities.tsx
import { motion } from "framer-motion";
import { Code2, Cpu, Wrench, Briefcase, BookOpen } from "lucide-react";
import { skillsData } from "@/data/portfolioData";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";  
import { cardVariants, cardContentVariants, tagContainerVariants, tagPopVariants } from "@/lib/animations";

const descriptions: Record<string, string> = {
  "Frontend Architecture": "Structuring scalable, component-driven interfaces from scratch.",
  "State & Logic": "Managing complex data flows and client-side calculations.",
  "Tools & Ecosystem": "Leveraging industry-standard workflows for rapid deployment.",
  "Professional Skills": "Applying discipline and effective communication to workflows.",
};

const icons: Record<string, JSX.Element> = {
  "Frontend Architecture": <Code2 size={24} />,
  "State & Logic": <Cpu size={24} />,
  "Tools & Ecosystem": <Wrench size={24} />,
  "Professional Skills": <Briefcase size={24} />,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="w-full">
      <Container>
        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            title="Capabilities"
            subtitle="Engineering robust interfaces with a focus on logic and performance."
            darkText={true}
            className="mb-12 text-center"
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillsData.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-zinc-800 p-6 lg:p-8 rounded-3xl border border-zinc-700 hover:border-zinc-600 transition-colors flex flex-col"
            >
              <motion.div variants={cardContentVariants} className="flex items-center gap-3 mb-2 text-indigo-400">
                {icons[group.category]}
                <h3 className="text-lg font-bold uppercase text-white tracking-wide">
                  {group.category}
                </h3>
              </motion.div>

              <motion.p variants={cardContentVariants} className="text-zinc-300 text-sm mb-6 leading-relaxed">
                {descriptions[group.category]}
              </motion.p>
              
              <motion.div variants={tagContainerVariants} className="flex flex-wrap gap-2 mt-auto">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={tagPopVariants}
                    className="px-3 py-1 border border-zinc-700 text-zinc-200 text-xs rounded-full hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Active Learning */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-zinc-800 border border-indigo-900/50 p-6 lg:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 hover:border-indigo-700 transition-colors"
        >
          <motion.div variants={cardContentVariants}>
            <BookOpen className="text-indigo-400 shrink-0" size={40} />
          </motion.div>
          
          <motion.div variants={cardContentVariants} className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-white mb-2">
              Active Learning Trajectory
            </h3>
            <p className="text-zinc-200 text-sm mb-4 leading-relaxed">
              I am currently bridging my frontend expertise with full-stack MERN capabilities to build end-to-end applications.
            </p>
            <motion.div variants={tagContainerVariants} className="flex gap-2 flex-wrap justify-center md:justify-start">
              {siteConfig.currentlyLearning.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagPopVariants}
                  className="px-3 py-1 border border-zinc-700 text-zinc-200 text-xs rounded-full hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
