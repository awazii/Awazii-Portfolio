import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export default function Tag({ children, variant = "light", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-md border transition-colors",
        variant === "light"
          ? "border-zinc-300 bg-zinc-100 text-zinc-700 hover:border-indigo-400 hover:text-indigo-600 hover:bg-zinc-50"
          : "border-zinc-700 bg-zinc-800 text-zinc-200 hover:border-indigo-500 hover:text-indigo-300 ",
        className
      )}
    >
      {children}
    </span>
  );
}
