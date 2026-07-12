import Link from "next/link";
import { cn } from "@/lib/utils";
interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
}

export default function Button({ 
  href, 
  variant = "primary", 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300";
  
  const variants = {
    primary: "bg-indigo-500 text-white hover:bg-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]",
    outline: "border border-zinc-700 text-slate-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50"
  };

  return (
    <Link 
      href={href} 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}