"use client";

import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Layout, Github, Linkedin } from "lucide-react";
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
              Étudiant en BTS SIO & Développeur Web. <br className="hidden md:block" />Passionné de logique et créateur de projets web.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/projets">
                <GlassButton variant="primary" className="w-full sm:w-auto text-lg px-10 h-16 rounded-full shadow-lg">
                  Explorer les travaux
                </GlassButton>
              </Link>
              <div className="flex items-center gap-4 hidden sm:flex">
                <a href="https://github.com/kairxuu" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full glass-panel border border-[var(--glass-border)] flex items-center justify-center text-foreground/70 hover:text-foreground shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/alexandre-keolasy-287887276" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full glass-panel border border-[var(--glass-border)] flex items-center justify-center text-foreground/70 hover:text-accent-blue shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,102,204,0.12)] transition-all hover:-translate-y-1">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Bento Grid - Spans wider */}
      <section className="relative z-30 w-full px-6 pb-40 -mt-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(0,1fr)]">

          {/* Main About snippet */}
          <GlassCard hoverEffect className="md:col-span-8 lg:col-span-7 md:row-span-2 p-10 md:p-14 flex flex-col justify-center group overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-6">À propos</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight transition-colors">
                Alexandre Keolasy
              </h3>
              <p className="text-foreground-secondary text-xl font-light leading-relaxed max-w-2xl mb-10">
                Passionné par le développement depuis le lycée, je suis actuellement en <strong>BTS SIO</strong>. J'adore transformer mes idées en véritables projets et je m'épanouis en découvrant de nouvelles technologies de pointe. Toujours prêt à relever de nouveaux défis !
              </p>
              <Link href="/about" className="text-foreground flex items-center gap-2 text-lg font-medium hover:text-foreground/70 transition-colors w-fit group-hover:translate-x-2 duration-300">
                Découvrir mon parcours <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </GlassCard>

          {/* Huge Stat snippet */}
          <GlassCard hoverEffect className="md:col-span-4 lg:col-span-5 p-10 md:p-14 flex flex-col items-center justify-center text-center group">
            <span className="text-8xl lg:text-[10rem] font-bold text-foreground tracking-tighter mb-4 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out drop-shadow-sm group-hover:drop-shadow-xl" style={{ letterSpacing: "-0.05em" }}>100%</span>
            <span className="text-foreground-secondary text-xl font-medium tracking-wide border-t border-[var(--glass-border)] pt-6 w-full text-center">Passion & Dévouement</span>
          </GlassCard>

          {/* Expertises highlight */}
          <GlassCard hoverEffect className="md:col-span-12 lg:col-span-5 p-10 flex flex-col group">
            <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-8">Expertises Fondamentales</h2>
            <div className="flex flex-col gap-8 flex-grow">
              <div className="flex items-center gap-6 group/item">
                <div className="w-16 h-16 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center group-hover/item:border-accent-blue/50 transition-colors">
                  <Layout className="w-8 h-8 text-foreground/80 group-hover/item:text-foreground transition-colors" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Design UI/UX</span>
              </div>
              <div className="flex items-center gap-6 group/item">
                <div className="w-16 h-16 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center group-hover/item:border-accent-blue/50 transition-colors">
                  <Code2 className="w-8 h-8 text-foreground/80 group-hover/item:text-foreground transition-colors" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Frontend Avancé</span>
              </div>
              <div className="flex items-center gap-6 group/item">
                <div className="w-16 h-16 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center group-hover/item:border-accent-blue/50 transition-colors">
                  <Cpu className="w-8 h-8 text-foreground/80 group-hover/item:text-foreground transition-colors" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Performance Web</span>
              </div>
            </div>
            <Link href="/services" className="mt-12 text-foreground/60 flex items-center gap-2 text-lg font-medium hover:text-foreground transition-colors w-fit group-hover:translate-x-2 duration-300">
              Voir tous les services <ArrowRight className="w-5 h-5" />
            </Link>
          </GlassCard>

          {/* Project highlight */}
          <GlassCard hoverEffect className="md:col-span-12 lg:col-span-7 p-0 overflow-hidden group flex flex-col min-h-[600px] z-10">
            <div className="relative h-64 md:h-[360px] w-full overflow-hidden shrink-0 border-b border-[var(--glass-border)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Wyze Academy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

            <div className="relative flex-grow flex flex-col justify-center p-10 md:p-12 bg-background-secondary z-20">
              <h2 className="text-[11px] font-bold text-foreground-secondary tracking-widest uppercase mb-3">Projet Star</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight group-hover:text-foreground-secondary transition-colors duration-500">Wyze Academy</h3>
              <p className="text-foreground-secondary max-w-xl mb-8 text-xl font-light leading-relaxed">
                Plateforme de formation professionnelle premium. Interface 'Dark Luxury', animations GSAP fluides et architecture ultra-optimisée.
              </p>
              <div className="mt-auto">
                <Link href="/projets">
                  <GlassButton variant="primary" className="h-12 px-8 rounded-full text-sm font-semibold shadow-md">
                    Découvrir le projet
                  </GlassButton>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}
