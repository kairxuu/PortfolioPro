"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { GlassButton } from "../ui/GlassButton";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "Projets", href: "/projets" },
        { name: "Services", href: "/services" },
        { name: "À propos", href: "/about" },
    ];

    return (
        <header
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-auto",
                "bg-[var(--glass-bg)] backdrop-blur-3xl border border-[var(--glass-border)] shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]",
                "rounded-full p-2 flex items-center gap-2 sm:gap-4",
                scrolled ? "scale-95 opacity-90 hover:scale-100 hover:opacity-100" : "scale-100"
            )}
        >
            <Link href="/" className="flex items-center group shrink-0">
                <div className="w-12 h-12 rounded-full bg-foreground text-background-secondary flex items-center justify-center font-bold text-xl shadow-sm group-hover:scale-105 transition-transform">
                    AK
                </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
                <ul className="flex items-center gap-1 text-sm font-medium">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "px-5 py-3 rounded-full transition-all duration-300",
                                        isActive
                                            ? "bg-foreground text-background-secondary shadow-md"
                                            : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 shrink-0">
                <div className="hidden md:flex items-center gap-2 mr-2 border-r border-[var(--glass-border)] pr-4">
                    <a href="https://github.com/kairxuu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors">
                        <Github className="w-4 h-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/alexandre-keolasy-287887276" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors">
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>
                <Link href="/contact" tabIndex={-1} className="hidden sm:block">
                    <GlassButton variant="primary" className="h-12 px-6 text-sm rounded-full">
                        Me contacter
                    </GlassButton>
                </Link>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-foreground w-12 h-12 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-[320px] bg-[var(--glass-bg)] backdrop-blur-2xl rounded-3xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 shadow-2xl border border-[var(--glass-border)]">
                    <ul className="flex flex-col gap-2 text-center">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block p-3 rounded-xl transition-colors",
                                            isActive ? "bg-foreground text-background-secondary font-semibold" : "text-foreground/80 hover:bg-foreground/5"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-col gap-4 mt-2 border-t border-[var(--glass-border)] pt-6">
                        <div className="flex justify-center gap-6 text-foreground/70">
                            <a href="https://github.com/kairxuu" target="_blank" rel="noreferrer" className="hover:text-foreground p-3 bg-background-secondary border border-[var(--glass-border)] rounded-full shadow-sm">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/alexandre-keolasy-287887276" target="_blank" rel="noreferrer" className="hover:text-foreground p-3 bg-background-secondary border border-[var(--glass-border)] rounded-full shadow-sm">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <Link href="/contact" tabIndex={-1} className="w-full" onClick={() => setMobileMenuOpen(false)}>
                            <GlassButton className="w-full h-12 rounded-xl">
                                Me contacter
                            </GlassButton>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};
