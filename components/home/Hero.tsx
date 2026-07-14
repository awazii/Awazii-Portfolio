"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { staggerContainerVariants, staggerItemVariants, logoFloatVariants } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      <Container className="relative z-10 w-full mt-auto mb-auto">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 w-full"
        >
          <div className="flex-1 flex flex-col items-start text-left">
            <motion.h1
              variants={staggerItemVariants}
              className="text-5xl md:text-7xl font-black text-slate-100 uppercase tracking-tighter leading-[1.05]"
            >
             Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Modern</span> <br />
              Frontend <br />
              Systems.
            </motion.h1>
            <motion.p
              variants={staggerItemVariants}
              className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
             I build scalable frontend architectures powered by reusable components, predictable state management, and performant user experiences.
            </motion.p>
            <motion.div
              variants={staggerItemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} variant="primary" className="rounded-lg">
                View Work
              </Button>
              <Button href="" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="rounded-lg">
                Let's Talk
              </Button>
            </motion.div>
          </div>
          <motion.div
            variants={staggerItemVariants}
            className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none relative"
          >
            <motion.div
              variants={logoFloatVariants}
              animate="animate"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 p-2 shadow-[0_0_60px_rgba(99,102,241,0.15)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a1f] relative">
                <Image
                  src="/images/profile.jpeg"
                  alt="Profile Logo"
                  fill
                  className="object-cover transition-all duration-500"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-full border border-indigo-500/30 scale-105 pointer-events-none"></div>
            </motion.div>
          </motion.div>

        </motion.div>
      </Container>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 animate-bounce">
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Scroll</span>
        <ChevronDown size={20} className="text-indigo-500/70" />
      </div>

    </section>
  );
}