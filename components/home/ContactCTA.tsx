// components/home/ContactCTA.tsx
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export default function ContactCTA() {
    return (
        <section id="contact" className="w-full bg-[#0c0c0e]  border-t border-zinc-800">
            <Container className="flex flex-col items-center text-center">

                <h2 className="text-5xl md:text-7xl font-black text-slate-100 uppercase tracking-tighter leading-[1.05] max-w-4xl">
                    Let&apos;s build something <span className="text-indigo-500">dependable.</span>
                </h2>

                <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl font-medium">
                    I am currently open for freelance opportunities and full-time frontend roles. Whether you need a complex logic architecture or a pristine UI, let&apos;s talk.
                </p>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                    <Button href={`mailto:${siteConfig.email}`} variant="primary">
                        Start a Conversation
                    </Button>
                    <Button href={siteConfig.linkedin} variant="outline" target="_blank">
                        LinkedIn Profile
                    </Button>
                </div>

            </Container>
        </section>
    );
}