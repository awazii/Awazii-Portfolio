"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Code2, Cpu, LayoutTemplate } from "lucide-react";
import { cardVariants, cardContentVariants } from "@/lib/animations";

const offerings = [
  {
    icon: <Cpu size={24} className="text-indigo-400" />,
    title: "Frontend Architecture",
    description:
      "Designing scalable frontend architectures with Redux Toolkit, focusing on predictable state management, reusable components, and complex client-side application logic.",
  },
  {
    icon: <Code2 size={24} className="text-indigo-400" />,
    title: "Problem Solving",
    description:
      "Building applications from the ground up by solving real engineering challenges through clean architecture, maintainable code, and scalable frontend solutions.",
  },
  {
    icon: <LayoutTemplate size={24} className="text-indigo-400" />,
    title: "Modern User Interfaces",
    description:
      "Developing responsive, accessible, and high-performance interfaces with React, Next.js, and Tailwind CSS, combining polished design with a strong engineering foundation.",
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="w-full pt-0">
      <Container>
        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            title="What I Deliver"
            subtitle="Specialized capabilities for robust frontend systems."
            darkText={true}
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-zinc-800 p-8 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col gap-4"
            >
              <motion.div
                variants={cardContentVariants}
                className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-2"
              >
                {item.icon}
              </motion.div>
              <motion.h3
                variants={cardContentVariants}
                className="text-xl font-black text-white"
              >
                {item.title}
              </motion.h3>
              <motion.p
                variants={cardContentVariants}
                className="text-zinc-400 text-sm leading-relaxed"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
