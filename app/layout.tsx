import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awais Tariq | Frontend Engineer",
  description: "I engineer minimal, state-driven frontend architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen flex flex-col bg-[#0c0c0e]">
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]" 
          style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        ></div>

        <div className="relative z-10 flex flex-col flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
