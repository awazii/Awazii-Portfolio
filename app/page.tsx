import Navbar from "@/components/global/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/global/Footer";
import Capabilities from "@/components/home/Capabilites";
import Offerings from "@/components/home/Offerings";
import FAQ from "@/components/home/FAQ";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full relative z-10">
        <Hero />
        <section className="bg-[#fafafa] text-zinc-900 relative z-20 rounded-t-[32px] shadow-[0_-20px_40px_rgba(0,0,0,0.3)]">
          <About />
          <Capabilities />
          <FeaturedProjects />
          <Offerings />
          <FAQ />
        </section>
        <section className="bg-[#0c0c0e] text-slate-200 relative z-10 rounded-t-[32px]">
          <ContactCTA />
        </section>
      </main>

      <Footer />
    </>
  );
}