"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { GlassButton } from "../ui/GlassButton";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "EcoSystem Dashboard",
        role: "Lead Front-end & UI Designer",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        desc: "Application de gestion d'énergie pour entreprises. Dashboard analytique ultra-performant aux visuels glassmorphism avec graphiques interactifs temps réel.",
        stack: ["Next.js", "Tailwind", "Recharts", "Framer Motion"],
        demoLink: "#",
        githubLink: "#",
        className: "md:col-span-2 md:row-span-2", // Featured project
        imageClass: "h-64 md:h-80"
    },
    {
        title: "Nova AI - Assistant",
        role: "Full-Stack Dev",
        image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop",
        desc: "Interface conversationnelle IA futuriste avec dark mode complet.",
        stack: ["React", "TypeScript", "OpenAI"],
        demoLink: "#",
        githubLink: "#",
        className: "md:col-span-1 md:row-span-1",
        imageClass: "h-40"
    },
    {
        title: "FinanceFlow App",
        role: "UI/UX & Front-end",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
        desc: "Application Neo-banque mobile-first avec style iOS 26.",
        stack: ["Next.js", "Radix UI", "Tailwind"],
        demoLink: "#",
        githubLink: "#",
        className: "md:col-span-1 md:row-span-1",
        imageClass: "h-40"
    }
];

export const Projects = () => {
    return (
        <SectionWrapper id="projects" className="relative z-10">
            <div className="flex flex-col gap-4 mb-12 items-start">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                >
                    Projets Récents
                </motion.h2>
                <p className="text-foreground-secondary max-w-2xl text-left">
                    Une sélection de mes travaux alliant design de pointe et architecture robuste.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(0,1fr)]">
                {projects.map((project, index) => (
                    <GlassCard
                        key={index}
                        hoverEffect
                        className={`flex flex-col p-0 group overflow-hidden ${project.className}`}
                    >
                        <div className={`relative w-full ${project.imageClass} shrink-0 overflow-hidden border-b border-[var(--glass-border)]`}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                            />
                        </div>

                        <div className="flex flex-col flex-grow p-6 sm:p-8 bg-background-secondary z-10">
                            <span className="text-foreground-secondary text-[11px] font-bold tracking-widest uppercase mb-3">
                                {project.role}
                            </span>
                            <h3 className={`font-bold text-foreground mb-3 tracking-tight group-hover:text-foreground-secondary transition-colors duration-500 ${project.className.includes('row-span-2') ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
                                {project.title}
                            </h3>
                            <p className="text-foreground-secondary text-sm sm:text-base mb-8 flex-grow leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.stack.map(tech => (
                                    <span key={tech} className="text-[11px] px-3 py-1.5 font-medium rounded-full bg-[var(--background)] border border-[var(--glass-border)] text-foreground/80 whitespace-nowrap">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 pt-6 border-t border-[var(--glass-border)] mt-auto">
                                <Link href={project.demoLink} className="flex-1">
                                    <GlassButton variant="primary" className="w-full py-3 h-12 text-sm rounded-full font-semibold shadow-sm">
                                        Consulter <ExternalLink className="ml-2 w-4 h-4" />
                                    </GlassButton>
                                </Link>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-foreground-secondary hover:text-foreground hover:bg-foreground/5 transition-colors shrink-0 border border-[var(--glass-border)]"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link href="/projets">
                    <GlassButton variant="secondary" className="group rounded-full px-8 py-3 h-12 text-sm font-semibold">
                        Voir tous les projets sur Github
                        <Github className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </GlassButton>
                </Link>
            </div>
        </SectionWrapper>
    );
};
