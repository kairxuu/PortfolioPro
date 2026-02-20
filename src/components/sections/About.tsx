"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { MapPin, Zap, Target, Layers } from "lucide-react";

const stack = [
    "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "Figma"
];

const values = [
    { icon: <Target className="w-5 h-5 text-foreground-secondary" />, title: "Précision", desc: "Design millimétré." },
    { icon: <Layers className="w-5 h-5 text-foreground-secondary" />, title: "Minimalisme", desc: "L'essentiel avant tout." },
    { icon: <Zap className="w-5 h-5 text-foreground-secondary" />, title: "Performance", desc: "Vitesse et fluidité." },
];

export const About = () => {
    return (
        <SectionWrapper id="about" className="relative z-10">
            <div className="flex flex-col gap-4 mb-12 items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                >
                    Vision & Mindset
                </motion.h2>
                <p className="text-foreground-secondary max-w-2xl">
                    Concevoir sans contraintes. Développer avec rigueur.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 auto-rows-[minmax(0,1fr)]">
                {/* Main Bio - Large Tile */}
                <GlassCard hoverEffect className="md:col-span-2 md:row-span-2 flex flex-col justify-center p-8 group relative overflow-hidden">
                    <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">À propos de moi</h3>
                    <p className="text-foreground-secondary text-lg leading-relaxed relative z-10 mb-4">
                        Je suis <strong className="text-foreground font-semibold">Alexandre Keolasy</strong>, développeur front-end & UI/UX designer basé à Paris. Mon objectif est de fusionner le design ultra-moderne avec des performances techniques de pointe pour créer des expériences web qui marquent les esprits.
                    </p>
                    <p className="text-foreground-secondary leading-relaxed relative z-10">
                        Spécialisé dans les écosystèmes modernes comme <strong>Next.js</strong> et <strong>React</strong>, j'intègre l'IA et les meilleures pratiques d'optimisation pour offrir un résultat <span className="font-medium text-foreground">Premium</span> : léger, rapide et fluide.
                    </p>
                </GlassCard>

                {/* Tech Stack - Wide Tile */}
                <GlassCard hoverEffect className="md:col-span-2 md:row-span-1 p-6 md:p-8 flex flex-col justify-between group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">Tech Stack & Outils</h3>
                    <div className="flex flex-wrap gap-2 relative z-10">
                        {stack.map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-3 py-1.5 rounded-lg bg-background/40 border border-[var(--glass-border)] text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/10 hover:border-[var(--glass-border-hover)] transition-all cursor-default"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </GlassCard>

                {/* Location - Square Tile */}
                <GlassCard hoverEffect className="md:col-span-1 md:row-span-1 p-6 flex flex-col items-center justify-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-background/40 border border-[var(--glass-border)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                        <MapPin className="w-8 h-8 text-foreground-secondary group-hover:text-foreground transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Basé à Paris</h4>
                    <p className="text-sm text-foreground-secondary">Remote Friendly</p>
                </GlassCard>

                {/* Values - Square Tile */}
                <GlassCard hoverEffect className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center gap-4">
                    <h4 className="text-lg font-bold text-foreground mb-2">Principes</h4>
                    <div className="flex flex-col gap-3">
                        {values.map((v, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="mt-0.5 shrink-0 bg-background/5 p-1.5 rounded-md border border-[var(--glass-border)]">{v.icon}</div>
                                <div>
                                    <h5 className="text-sm font-semibold text-foreground/90">{v.title}</h5>
                                    <p className="text-xs text-foreground/50">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </SectionWrapper>
    );
};
