"use client";

import { motion } from "framer-motion";
import { GlassButton } from "../ui/GlassButton";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent-blue/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-accent-purple/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel w-fit border-white/10 text-sm font-medium text-accent-green mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
                        </span>
                        Disponible pour missions Freelance
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        Alexandre <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-300% animate-gradient">
                            KEOLASY
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-white/80 font-medium">
                        Développeur Web & UI/UX Designer pour expériences digitales <strong className="text-white glow-accent px-1 rounded">AntiGravity</strong>.
                    </h2>

                    <p className="text-lg text-white/60 max-w-xl">
                        Je conçois des interfaces futuristes, fluides et performantes qui donnent une sensation de gravité zéro.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <GlassButton
                            variant="primary"
                            className="group"
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Découvrir mes projets
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </GlassButton>
                        <GlassButton variant="outline" className="group">
                            <Download className="mr-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            Télécharger mon CV
                        </GlassButton>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative lg:h-[600px] flex items-center justify-center hidden md:flex"
                >
                    {/* Abstract floating elements for visual interest */}
                    <motion.div
                        animate={{
                            y: [-20, 20, -20],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 z-10 glass-panel rounded-full w-3/4 h-3/4 m-auto border-white/10 flex items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/5 before:to-transparent"
                    >
                        <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-accent-blue/30 to-accent-purple/30 blur-2xl" />
                    </motion.div>

                    {/* Decorative floating pills */}
                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/4 right-0 glass-panel px-6 py-4 rounded-2xl z-20 flex items-center gap-3"
                    >
                        <div className="w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(95,141,255,0.8)]" />
                        <span className="font-semibold text-white/90">Next.js</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-1/3 left-0 glass-panel px-6 py-4 rounded-2xl z-20 flex items-center gap-3"
                    >
                        <div className="w-3 h-3 rounded-full bg-accent-purple shadow-[0_0_10px_rgba(155,109,255,0.8)]" />
                        <span className="font-semibold text-white/90">UI/UX</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
                <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-0.5 h-10 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
            </motion.div>
        </section>
    );
};
