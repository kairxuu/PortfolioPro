import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, hoverEffect = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass-panel rounded-3xl p-6 transition-all duration-500 ease-out relative overflow-hidden bg-[var(--glass-bg)] shadow-[0_2px_10px_rgba(0,0,0,0.02)]",
                    hoverEffect && "hover:border-[var(--glass-border-hover)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
GlassCard.displayName = "GlassCard";
