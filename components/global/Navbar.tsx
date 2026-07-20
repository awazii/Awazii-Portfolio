"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Added Framer Motion
import { navVariants } from "@/lib/animations"; // Added your custom variants

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Intersection Observer for active sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id], main[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth Scroll Handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);

    if (href === "#" || href === "/" || href === "#home") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      setActiveSection("home");
      return;
    }

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-full border transition-colors duration-500 ease-in-out",
        "bg-[#0c0c0e]/90 backdrop-blur-xl border-zinc-800 shadow-2xl"
      )}
    >
      <div className="flex items-center justify-between px-6 py-4 transition-all duration-500 ease-in-out">

        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#")}
          className="text-xl md:text-2xl font-black text-white tracking-widest flex items-center"
        >
          AW<span className="text-indigo-500 mx-[1px]">Λ</span>ZII
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest uppercase">
          {/* Main Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={cn(
                    "transition-all duration-300 hover:text-white",
                    isActive
                      ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                      : "text-zinc-400"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Visual Divider */}
          <div className="w-px h-4 bg-zinc-700"></div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full mt-4 p-6 bg-[#0c0c0e]/95 backdrop-blur-xl border border-zinc-800 rounded-3xl flex flex-col gap-6 shadow-2xl md:hidden origin-top"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={cn(
                    "text-sm font-bold tracking-widest uppercase transition-colors",
                    isActive ? "text-indigo-400" : "text-zinc-400 hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="w-full h-px bg-zinc-800"></div>

            <a
              href="https://drive.google.com/uc?export=download&id=1aZjn8JNt9AzBieks_B6vwCAiHB0wTCoe"
              target="_blank"
              rel="noopener noreferrer"
              className="your-tailwind-classes-here"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}