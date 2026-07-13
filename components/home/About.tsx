"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { MapPin, Dumbbell, Headphones } from "lucide-react";
import { skillsData } from "@/data/portfolioData";
import { 
  staggerItemVariants, 
  tagContainerVariants, 
  tagPopVariants, 
  cardVariants, 
  cardContentVariants 
} from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="w-full border-t border-zinc-800 ">
      <Container>
        <div className="flex flex-col">
          
          {/* Animated Heading */}
          <motion.div 
            variants={staggerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              title="About Me"
              subtitle="The architecture behind the code."
              darkText={true}
              className="mb-12 text-center"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

            {/* Box 1: Profile */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-zinc-800 border border-zinc-700 p-6 lg:p-8 rounded-3xl flex flex-col gap-4 hover:border-zinc-600 transition-colors"
            >
              <motion.span variants={cardContentVariants} className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Profile</motion.span>
              <motion.div variants={cardContentVariants}>
                <h3 className="text-2xl font-black text-white">Awais Tariq</h3>
                <p className="text-zinc-200 font-medium mt-1">Frontend Developer</p>
              </motion.div>
              <motion.p variants={cardContentVariants} className="text-sm text-zinc-300 leading-relaxed mt-2">
                Building scalable, logic-driven UI components and relational user experiences.
              </motion.p>
              
              {/* Tags */}
              <motion.div 
                variants={tagContainerVariants}
                className="flex flex-wrap gap-2 mt-auto pt-6"
              >
                <motion.div variants={tagPopVariants}>
                  <Tag variant="outline" className="text-xs border-zinc-600 text-zinc-200 flex items-center gap-1">
                    <MapPin size={12} /> Lahore, PK
                  </Tag>
                </motion.div>
                <motion.div variants={tagPopVariants}>
                  <Tag className="text-xs text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    Open to work
                  </Tag>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Box 2: Technical Focus */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="md:col-span-2 bg-zinc-800 border border-zinc-700 p-6 lg:p-8 rounded-3xl flex flex-col gap-4 hover:border-zinc-600 transition-colors"
            >
              <motion.span variants={cardContentVariants} className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Technical Focus</motion.span>
              <motion.p variants={cardContentVariants} className="text-zinc-200 leading-relaxed text-sm lg:text-base font-medium">
                I approach frontend development as a logic puzzle first and a visual canvas second. Operating with a focus on robust architectures, my code is designed to handle complex client-side calculations seamlessly. Every component is built to be iterative, scalable, and strictly typed without relying heavily on the backend for heavy lifting.
              </motion.p>
              <motion.div 
                variants={tagContainerVariants}
                className="flex flex-wrap gap-2 mt-auto pt-6"
              >
                {skillsData[0].items.map((tech) => (
                  <motion.div key={tech} variants={tagPopVariants}>
                    <Tag variant="dark" className="border-zinc-700 border text-zinc-100">
                      {tech}
                    </Tag>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Box 3: Education & Experience */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-zinc-800 border border-zinc-700 p-6 lg:p-8 rounded-3xl flex flex-col gap-4 hover:border-zinc-600 transition-colors"
            >
              <motion.span variants={cardContentVariants} className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Education & Experience</motion.span>
              <motion.div variants={cardContentVariants} className="mt-2 flex flex-col gap-6">
                <div>
                  <h4 className="text-white font-bold text-sm">Virtual University of Pakistan</h4>
                  <p className="text-zinc-200 text-xs mt-1">Software Engineering (Final Year)</p>
                  <span className="inline-block mt-2 px-2 py-1 border border-zinc-700 text-zinc-200 text-[10px] uppercase font-bold rounded">
                    In Progress
                  </span>
                </div>
                <div className="w-full h-px bg-zinc-700"></div>
                <div>
                  <h4 className="text-white font-bold text-sm">Frontend Developer</h4>
                  <p className="text-zinc-200 text-xs mt-1">Independent / Project-Based</p>
                  <span className="inline-block mt-2 px-2 py-1 border border-zinc-700 text-zinc-200 text-[10px] uppercase font-bold rounded">
                    2 Years Experience
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Box 4: Beyond The Code */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="md:col-span-2 bg-zinc-800 border border-zinc-700 p-6 lg:p-8 rounded-3xl flex flex-col gap-4 hover:border-zinc-600 transition-colors"
            >
              <motion.span variants={cardContentVariants} className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Beyond The Code</motion.span>
              <motion.div variants={cardContentVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <Dumbbell className="text-indigo-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Iron & Discipline</h4>
                    <p className="text-zinc-200 text-sm mt-1 leading-relaxed">
                      With over two years of consistent bodybuilding, I apply the same principles of progressive overload and discipline to my engineering workflows.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <Headphones className="text-indigo-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Media & Hardware</h4>
                    <p className="text-zinc-200 text-sm mt-1 leading-relaxed">
                      An advocate for high-fidelity stereo sound and mechanical peripherals. Off the clock, you can find me analyzing animation shifts in series like Bleach and Demon Slayer.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
