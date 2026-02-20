"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { Layout, Zap, Search, Bot } from "lucide-react";

const services = [
    {
        icon: <Layout className="w-8 h-8 text-foreground-secondary group-hover:text-foreground transition-colors mb-4" />,
        title: "Conception d'interfaces AntiGravity (UI/UX)",
        desc: "Design system sur-mesure, wireframes, prototypes interactifs et design final en Glassmorphism ou interfaces futuristes.",
        bulletPoints: ["Figma & Prototypage", "Design System", "Dark Mode natif"],
        className: "md:col-span-2 md:row-span-2" // Large feature
    },
    {
        icon: <Zap className="w-8 h-8 text-foreground-secondary group-hover:text-foreground transition-colors mb-4" />,
        title: "Développement Web & Apps Performantes",
        desc: "Intégration pixel-perfect avec Next.js, React et Tailwind CSS. Déploiement optimisé sur Vercel.",
        bulletPoints: ["Next.js (App Router)", "TypeScript", "Animations fluides"],
        className: "md:col-span-1 md:row-span-1" // Square
    },
    {
        icon: <Search className="w-8 h-8 text-foreground-secondary group-hover:text-foreground transition-colors mb-4" />,
        title: "Optimisation Performance & SEO Technique",
        desc: "Audits Core Web Vitals, lazy loading, optimisation des assets et structure sémantique.",
        bulletPoints: ["Score lighthouse 100", "Accessibilité AA", "SEO optimisé"],
        className: "md:col-span-1 md:row-span-1" // Square
    },
    {
        icon: <Bot className="w-8 h-8 text-foreground-secondary group-hover:text-foreground transition-colors mb-4" />,
        title: "Intégration d'IA & Automatisations",
        desc: "Ajout de fonctionnalités intelligentes et automatisation de processus pour enrichir l'expérience utilisateur et l'efficacité.",
        bulletPoints: ["LLM API (OpenAI)", "Workflows", "Agents intelligents"],
        className: "md:col-span-2 md:row-span-1" // Wide
    }
];

export const Services = () => {
    return (
        <SectionWrapper id="services" className="relative z-10">
            <div className="flex flex-col gap-4 mb-12 items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                >
                    Services AntiGravity
                </motion.h2>
                <p className="text-foreground-secondary max-w-2xl">
                    De l'idée à la mise en production, j'accompagne vos projets digitaux avec une approche orientée performance et esthétisme.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(0,1fr)]">
                {services.map((service, index) => (
                    <GlassCard
                        key={index}
                        hoverEffect
                        className={`flex flex-col p-6 lg:p-8 group overflow-hidden relative ${service.className}`}
                    >
                        {/* Background Gradient flair */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500 z-0" />

                        <div className="bg-background-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-[var(--glass-border)] shadow-sm group-hover:scale-110 transition-transform duration-500 z-10 relative">
                            {service.icon}
                        </div>

                        <h3 className={`font-bold text-foreground mb-3 z-10 relative ${service.className.includes('row-span-2') ? 'text-3xl' : 'text-xl'}`}>
                            {service.title}
                        </h3>

                        <p className="text-foreground-secondary mb-6 flex-grow z-10 relative leading-relaxed">
                            {service.desc}
                        </p>

                        <ul className="space-y-2.5 mt-auto z-10 relative">
                            {service.bulletPoints.map((point, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-foreground-secondary font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
};
