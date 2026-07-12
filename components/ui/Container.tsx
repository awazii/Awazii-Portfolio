import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className, id }: ContainerProps) {
  return (
    <section 
      id={id} 
      className={cn("w-full max-w-6xl mx-auto px-6 md:px-12 py-8 md:py-16", className)}
    >
      {children}
    </section>
  );
}