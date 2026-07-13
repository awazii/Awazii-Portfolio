"use client";
// components/home/Offerings.tsx
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Code2, Cpu, LayoutTemplate } from "lucide-react";
import { cardVariants, cardContentVariants } from "@/lib/animations";

const offerings = [
  {
    icon: <Cpu size={24} className="text-indigo-400" />,
    title: "State & Logic Engineering",
    description:
      "Designing normalized state architectures using Redux Toolkit to handle complex relational data, live calculations, and multi-tier UI synchronizations strictly on the client side.",
  },
  {
    icon: <Code2 size={24} className="text-indigo-400" />,
    title: "Custom Architecture",
    description:
      "Building scalable web applications entirely from scratch. I prefer engineering raw, hard-coded logic over relying on zero-code wrappers or automated visual builders.",
  },
  {
    icon: <LayoutTemplate size={24} className="text-indigo-400" />,
    title: "High-Fidelity Interfaces",
    description:
      "Translating static designs into fully typed, responsive React components using Tailwind CSS, ensuring smooth asset layering and absolute structural accuracy.",
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
