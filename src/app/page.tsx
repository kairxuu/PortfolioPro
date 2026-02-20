"use client";

import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Layout } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const containerRef = useRef(null);

  // Advanced Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.25]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(smoothProgress, [0, 0.4], ["0%", "60%"]);

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col relative" ref={containerRef}>
      <Header />

      {/* Stunning 3D Parallax Hero */}
      <section className="relative h-[120vh] flex items-center justify-center overflow-hidden">
        {/* Deep Parallax Background */}
        <motion.div
          className="absolute inset-0 z-0 origin-center"
          style={{ scale: heroScale, y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Abstract Premium Background"
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>

        {/* Hero Typography */}
        <motion.div
          className="relative z-20 w-full px-6 max-w-5xl mx-auto text-center mt-[-15vh]"
          style={{ y: textY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter text-foreground mb-6 leading-none">
              Alexandre KEOLASY.
            </h1>
            <p className="text-2xl md:text-3xl text-foreground-secondary max-w-5xl mx-auto font-light leading-tight mb-12 tracking-tight">
              Développeur WEB. <br className="hidden md:block" />Faite de vos idées une réalité.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/projets">
                <GlassButton variant="primary" className="w-full sm:w-auto text-lg px-10 h-16 rounded-full shadow-lg">
                  Explorer les travaux
                </GlassButton>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Bento Grid - Spans wider */}
      <section className="relative z-30 w-full px-6 pb-40 -mt-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(0,1fr)]">

          {/* Main About snippet */}
          <GlassCard className="md:col-span-8 lg:col-span-7 md:row-span-2 p-10 md:p-14 flex flex-col justify-center group overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-6">À propos</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight transition-colors">
                Alexandre Keolasy
              </h3>
              <p className="text-foreground-secondary text-xl font-light leading-relaxed max-w-2xl mb-10">
                Spécialisé dans les écosystèmes modernes comme Next.js et React, mon approche allie
                une rigueur technique absolue à un minimalisme fonctionnel. Pas de superflu,
                uniquement l'essentiel pour des expériences mémorables.
              </p>
              <Link href="/about" className="text-foreground flex items-center gap-2 text-lg font-medium hover:text-accent-blue transition-colors w-fit group-hover:translate-x-2 duration-300">
                Découvrir mon parcours <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </GlassCard>

          {/* Huge Stat snippet */}
          <GlassCard className="md:col-span-4 lg:col-span-5 p-10 md:p-14 flex flex-col items-center justify-center text-center group">
            <span className="text-8xl lg:text-[10rem] font-bold text-foreground tracking-tighter mb-4 transform group-hover:scale-105 transition-transform duration-700 ease-out" style={{ letterSpacing: "-0.05em" }}>5+</span>
            <span className="text-foreground-secondary text-xl font-medium tracking-wide border-t border-[var(--glass-border)] pt-6">Années d'expérience</span>
          </GlassCard>

          {/* Expertises highlight */}
          <GlassCard className="md:col-span-12 lg:col-span-5 p-10 flex flex-col group">
            <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-8">Expertises Fondamentales</h2>
            <div className="flex flex-col gap-8 flex-grow">
              <div className="flex items-center gap-6 group/item">
                <div className="w-16 h-16 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center group-hover/item:border-accent-blue/50 transition-colors">
                  <Layout className="w-8 h-8 text-foreground/80 group-hover/item:text-accent-blue transition-colors" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Design UI/UX</span>
              </div>
              <div className="flex items-center gap-6 group/item">
                <div className="w-16 h-16 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center group-hover/item:border-accent-blue/50 transition-colors">
                  <Code2 className="w-8 h-8 text-foreground/80 group-hover/item:text-accent-blue transition-colors" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Frontend Avancé</span>
              </div>
              <div className="flex items-center gap-6 group/item">
                <div className="w-16 h-16 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center group-hover/item:border-accent-blue/50 transition-colors">
                  <Cpu className="w-8 h-8 text-foreground/80 group-hover/item:text-accent-blue transition-colors" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Performance Web</span>
              </div>
            </div>
            <Link href="/services" className="mt-12 text-foreground/60 flex items-center gap-2 text-lg font-medium hover:text-foreground transition-colors w-fit group-hover:translate-x-2 duration-300">
              Voir tous les services <ArrowRight className="w-5 h-5" />
            </Link>
          </GlassCard>

          {/* Project highlight */}
          <GlassCard className="md:col-span-12 lg:col-span-7 p-0 overflow-hidden group relative min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="EcoSystem Dashboard"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 md:p-14">
              <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Projet Star</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">EcoSystem Dashboard</h3>
              <p className="text-foreground max-w-xl mb-10 text-xl font-light">
                Un outil analytique ultra-performant aux visuels glassmorphism, intégrant des graphiques complexes en temps réel.
              </p>
              <Link href="/projets">
                <GlassButton variant="secondary" className="backdrop-blur-xl px-8 h-14 text-lg">
                  Découvrir le projet
                </GlassButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}
