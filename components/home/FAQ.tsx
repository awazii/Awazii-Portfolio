"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Layout, Terminal, Mountain } from "lucide-react";
import { cardVariants, cardContentVariants } from "@/lib/animations";

const faqs = [
  {
    icon: <Target size={24} className="text-indigo-400" />,
    question: "What type of opportunities are you looking for?",
    answer:
      "I'm seeking junior frontend developer opportunities where I can contribute to real-world products, collaborate with experienced engineers, and continue growing through hands-on development. I'm open to both on-site and remote roles.",
  },
  {
    icon: <Layout size={24} className="text-indigo-400" />,
    question: "What is your primary technical focus?",
    answer:
      "My primary focus is frontend engineering with React and Next.js. I enjoy designing scalable application architecture, managing complex state, and building maintainable user interfaces that remain reliable as projects grow.",
  },
  {
    icon: <Terminal size={24} className="text-indigo-400" />,
    question: "What is your development philosophy?",
    answer:
      "I enjoy building applications from the ground up, focusing on clean architecture, reusable components, and predictable state management. I believe writing maintainable code today creates scalable software tomorrow.",
  },
  {
    icon: <Mountain size={24} className="text-indigo-400" />,
    question: "What motivates you outside of development?",
    answer:
      "Strength training has taught me discipline, consistency, and continuous improvement. I bring the same mindset into software development by approaching every project as an opportunity to learn, refine my skills, and solve increasingly complex problems.",
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
