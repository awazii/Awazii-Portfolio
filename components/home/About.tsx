"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { skillsData } from "@/data/portfolioData";
import { MapPin, Dumbbell, Code2, Rocket } from "lucide-react";
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
                 Frontend developer passionate about building scalable, performant, and intuitive web applications with a strong focus on clean architecture and exceptional user experience.
              </motion.p>
              <motion.div 
                variants={tagContainerVariants}
                className="flex flex-wrap gap-2 mt-auto pt-6"
              >
                <motion.div variants={tagPopVariants}>
                  <Tag variant="dark"  className="text-xs border-zinc-600 text-zinc-200 flex items-center gap-1">
                    <MapPin size={12} /> Lahore, PK
                  </Tag>
                </motion.div>
                <motion.div variants={tagPopVariants}>
                  <Tag variant="light" className="text-xs text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    Open to work
                  </Tag>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="md:col-span-2 bg-zinc-800 border border-zinc-700 p-6 lg:p-8 rounded-3xl flex flex-col gap-4 hover:border-zinc-600 transition-colors"
            >
              <motion.span variants={cardContentVariants} className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Technical Focus</motion.span>
              <motion.p variants={cardContentVariants} className="text-zinc-200 leading-relaxed text-sm lg:text-base font-medium">
                 I believe exceptional frontend development goes beyond beautiful interfaces. My focus is on building scalable architectures, reusable components, and predictable state management that keep applications fast, maintainable, and enjoyable to use. Every project is an opportunity to solve complex problems through thoughtful engineering and clean design.
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
                    2+ Years Building Projects
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="md:col-span-2 bg-zinc-800 border border-zinc-700 p-6 lg:p-8 rounded-3xl flex flex-col gap-4 hover:border-zinc-600 transition-colors"
            >
              <motion.span variants={cardContentVariants} className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Engineering Mindset</motion.span>
              <motion.span
  variants={cardContentVariants}
  className="text-[10px] font-black text-zinc-400 uppercase tracking-widest"
>
  Engineering Mindset
</motion.span>

<motion.div
  variants={cardContentVariants}
  className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4"
>

  <div className="flex flex-col gap-3">

    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
      <Code2 className="text-indigo-400" size={18}/>
    </div>

    <div>

      <h4 className="text-white font-bold text-sm">
        Problem Solving
      </h4>

      <p className="text-zinc-200 text-sm mt-1 leading-relaxed">
        I enjoy transforming complex frontend challenges into scalable, maintainable solutions. From state management to UI architecture, I focus on writing clean code that remains reliable as projects grow.
      </p>

    </div>

  </div>

  <div className="flex flex-col gap-3">

    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
      <Rocket className="text-indigo-400" size={18}/>
    </div>

    <div>

      <h4 className="text-white font-bold text-sm">
        Continuous Growth
      </h4>

      <p className="text-zinc-200 text-sm mt-1 leading-relaxed">
        I continuously expand my skills by building real-world applications and exploring modern frontend and backend technologies, always striving to become a better engineer with every project.
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
