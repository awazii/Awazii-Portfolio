"use client";
// components/home/FAQ.tsx
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Layout, Terminal, Mountain } from "lucide-react";
import { cardVariants, cardContentVariants } from "@/lib/animations";

const faqs = [
  {
    icon: <Target size={24} className="text-indigo-400" />,
    question: "What type of roles are you currently seeking?",
    answer:
      "I am actively prioritizing local, on-site junior frontend developer positions in Lahore. My goal is to integrate with an established engineering team and contribute directly to production environments.",
  },
  {
    icon: <Layout size={24} className="text-indigo-400" />,
    question: "Is your primary focus strictly on frontend development?",
    answer:
      "My core expertise is heavy frontend architecture—building applications that manage complex logic and state on the client-side (like Splitly). However, I am continuously expanding my capabilities into the full-stack MERN ecosystem.",
  },
  {
    icon: <Terminal size={24} className="text-indigo-400" />,
    question: "Why do you prefer custom architecture over low-code solutions?",
    answer:
      "I believe in absolute control over performance and scalability. I strictly prefer hard-coding application logic, component structures, and state architectures from scratch rather than fighting the inevitable limitations of automated wrappers.",
  },
  {
    icon: <Mountain size={24} className="text-indigo-400" />,
    question: "How do your off-screen pursuits influence your work?",
    answer:
      "I apply the exact same progressive overload principles from my bodybuilding and high-altitude trekking routines to my development workflow: consistency, calculated iteration, and continuous improvement.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="w-full">
      <Container>
        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            title="Frequently Asked"
            subtitle="Quick answers to common inquiries."
            darkText={true}
            className="mb-12 text-center"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-zinc-800 p-6 lg:p-8 rounded-3xl border border-zinc-700 hover:border-zinc-600 transition-colors flex flex-col gap-4"
            >
              <motion.div
                variants={cardContentVariants}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-700/50 shrink-0">
                  {faq.icon}
                </div>
                <h4 className="text-lg font-bold text-white leading-snug pt-1">
                  {faq.question}
                </h4>
              </motion.div>

              <motion.p
                variants={cardContentVariants}
                className="text-zinc-300 text-sm leading-relaxed mt-2"
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
