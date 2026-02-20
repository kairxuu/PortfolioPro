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
        { name: "Blog", href: "/blog" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-[var(--glass-bg)] backdrop-blur-xl border-[var(--glass-border)] py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <div className="w-full max-w-5xl px-6 mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center font-bold text-xl transition-all shadow-sm group-hover:shadow-md">
                        AK
                    </div>
                    <span className="font-bold text-xl tracking-tight text-foreground hidden sm:block">
                        Portfolio
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-sm font-medium text-foreground/70">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "transition-colors",
                                            isActive ? "text-foreground font-semibold" : "hover:text-foreground"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Desktop CTA & Theme */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3 text-foreground/70 mr-2">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                    <Link href="/contact" tabIndex={-1}>
                        <GlassButton variant="primary">
                            Me contacter
                        </GlassButton>
                    </Link>
                </div>

                {/* Mobile menu */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        className="text-foreground p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t-0 rounded-b-2xl p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 shadow-xl">
                    <ul className="flex flex-col gap-4 text-center">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-foreground/80 hover:text-foreground text-lg block p-2",
                                            isActive && "font-bold text-foreground"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-col gap-4 mt-4 border-t border-foreground/10 pt-6">
                        <div className="flex justify-center gap-6 text-foreground/70">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                        <Link href="/contact" tabIndex={-1} className="w-full" onClick={() => setMobileMenuOpen(false)}>
                            <GlassButton className="w-full">
                                Me contacter
                            </GlassButton>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};
