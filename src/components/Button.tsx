import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "ghost" | "dark" | "icon"; size?: "sm" | "md" | "lg" | "icon" };
export const Button = forwardRef<HTMLButtonElement, Props>(function Button({ className, variant = "primary", size = "md", ...props }, ref) {
  const variants = { primary: "bg-primary text-primary-foreground hover:bg-primary-hover", outline: "border border-primary/25 bg-background text-primary hover:bg-secondary", ghost: "text-foreground hover:bg-secondary", dark: "bg-foreground text-background hover:bg-foreground/90", icon: "bg-secondary text-foreground hover:bg-accent" };
  const sizes = { sm: "h-9 px-3 text-xs", md: "h-11 px-5 text-sm", lg: "h-13 px-7 text-sm", icon: "size-11 p-0" };
  return <button ref={ref} className={cn("inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-bold uppercase tracking-wide transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", variants[variant], sizes[size], className)} {...props} />;
});
