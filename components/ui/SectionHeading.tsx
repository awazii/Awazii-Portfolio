import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  darkText?: boolean; 
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  darkText = true,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16 flex flex-col gap-4", 
      centered ? "items-center text-center" : "items-start text-left",
      className
    )}>
      <h2 className={cn(
        "text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none", 
        darkText ? "text-zinc-900" : "text-slate-100"
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg max-w-2xl font-medium", 
          darkText ? "text-zinc-500" : "text-slate-400"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}