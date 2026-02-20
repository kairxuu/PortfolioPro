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
                    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 relative overflow-hidden group",
                    variant === "primary" && "bg-foreground text-background-secondary hover:opacity-90 shadow-[0_4px_14px_rgba(0,0,0,0.1)]",
                    variant === "secondary" && "bg-[var(--glass-bg)] text-foreground border border-[var(--glass-border)] hover:bg-foreground/5",
                    variant === "outline" && "border border-foreground/10 text-foreground hover:bg-foreground/5",
                    className
                )}
                {...props}
            />
        );
    }
);
GlassButton.displayName = "GlassButton";
