import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 overflow-hidden",
                    "hover:scale-[1.02] active:scale-[0.98]",
                    variant === "primary" && "bg-foreground text-background hover:opacity-90 shadow-[0_4px_14px_rgba(0,0,0,0.1)] dark:shadow-none",
                    variant === "secondary" && "bg-background-secondary dark:bg-background/50 text-foreground border border-[var(--glass-border)] hover:bg-foreground/5",
                    variant === "outline" && "bg-transparent border border-[var(--glass-border)] text-foreground hover:bg-foreground/5",
                    className
                )}
                {...props}
            />
        );
    }
);
GlassButton.displayName = "GlassButton";
