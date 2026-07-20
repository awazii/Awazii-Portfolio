"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";
import { cardContentVariants } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0c0c0e] py-8 border-t border-white/5">
      <Container className="py-0 md:py-0 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold tracking-widest uppercase text-slate-500">
        
        <motion.p
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center md:text-left"
        >
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </motion.p>

        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center md:justify-end items-center gap-6"
        >
          <Link
            href={siteConfig.github}
            target="_blank"
            className="hover:text-indigo-400 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            className="hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="hover:text-indigo-400 transition-colors"
          >
            Email
          </Link>
        </motion.div>

      </Container>
    </footer>
  );
}
