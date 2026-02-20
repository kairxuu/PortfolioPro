"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { GlassButton } from "../ui/GlassButton";
import { ExternalLink, Github } from "lucide-react";

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
                        className={`flex flex-col p-4 group ${project.className}`}
                    >
                        <div className={`relative w-full ${project.imageClass} rounded-xl overflow-hidden mb-6 border border-[var(--glass-border)]`}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                        </div>

                        <div className="flex flex-col flex-grow px-2 pb-2">
                            <span className="text-foreground-secondary text-xs font-semibold tracking-wider uppercase mb-2">
                                {project.role}
                            </span>
                            <h3 className={`font-bold text-foreground mb-2 group-hover:text-foreground-secondary transition-colors ${project.className.includes('row-span-2') ? 'text-3xl' : 'text-xl'}`}>
                                {project.title}
                            </h3>
                            <p className="text-foreground-secondary text-sm mb-6 flex-grow leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.stack.map(tech => (
                                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-background-secondary border border-[var(--glass-border)] text-foreground-secondary whitespace-nowrap">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 pt-4 border-t border-[var(--glass-border)] mt-auto">
                                <GlassButton variant="outline" className="flex-1 py-2 text-xs h-10" onClick={() => window.open(project.demoLink, "_blank")}>
                                    Voir le projet <ExternalLink className="ml-2 w-3 h-3" />
                                </GlassButton>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-foreground-secondary hover:text-foreground hover:bg-foreground/5 transition-colors shrink-0 border border-[var(--glass-border)]"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            <div className="mt-12 text-center">
                <GlassButton variant="secondary" className="group">
                    Voir tous les projets sur Github
                    <Github className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                </GlassButton>
            </div>
        </SectionWrapper>
    );
};
