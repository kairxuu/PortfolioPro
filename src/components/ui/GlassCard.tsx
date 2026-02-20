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
                    "glass-panel rounded-3xl p-6 transition-all duration-500 ease-out relative overflow-hidden bg-[var(--glass-bg)] shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]",
                    hoverEffect && "hover:border-[var(--glass-border-hover)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.05)]",
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
