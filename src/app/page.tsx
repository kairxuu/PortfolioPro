"use client";

import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Layout, Github, Linkedin, Zap, Layers, Smartphone, Search, PenTool, Rocket } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  // Advanced Parallax Global
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // 3D Card Parallax Local
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothSectionProgress = useSpring(sectionProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
            src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2564"
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
              Ingénierie Front-End & Design d'Interfaces. <br className="hidden md:block" />Je conçois des écosystèmes web performants, scalables et centrés sur la conversion.
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
                <a href="https://www.linkedin.com/in/alexandre-keolasy-287887276" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full glass-panel border border-[var(--glass-border)] flex items-center justify-center text-foreground/70 hover:text-foreground shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1">
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
          <GlassCard className="md:col-span-8 lg:col-span-7 md:row-span-2 p-10 md:p-14 flex flex-col justify-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-6">À propos</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Alexandre Keolasy
              </h3>
              <p className="text-foreground-secondary text-xl font-light leading-relaxed max-w-2xl mb-10">
                Développeur web doté d'un fort esprit analytique, issu d'une formation initiale en mathématiques. Spécialisé dans l'écosystème React/Next.js, j'allie rigueur technique et sensibilité design pour délivrer des applications robustes et performantes.
              </p>
              <Link href="/about" className="text-foreground flex items-center gap-2 text-lg font-medium hover:text-foreground/70 transition-colors w-fit duration-300">
                Découvrir mon parcours <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </GlassCard>

          {/* Huge Stat snippet */}
          <GlassCard className="md:col-span-4 lg:col-span-5 p-10 md:p-14 flex flex-col items-center justify-center text-center">
            <span className="text-8xl lg:text-[10rem] font-bold text-foreground tracking-tighter mb-4 drop-shadow-sm" style={{ letterSpacing: "-0.05em" }}>100</span>
            <span className="text-foreground-secondary text-xl font-medium tracking-wide border-t border-[var(--glass-border)] pt-6 w-full text-center">Score de Performance</span>
          </GlassCard>

          {/* Expertises highlight */}
          <GlassCard className="md:col-span-12 lg:col-span-5 p-10 flex flex-col">
            <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-8">Expertises Fondamentales</h2>
            <div className="flex flex-col gap-8 flex-grow">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
                  <Layout className="w-8 h-8 text-foreground/80" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Design UI/UX</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-foreground/80" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Frontend Avancé</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-foreground/80" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Performance Web</span>
              </div>
            </div>
            <Link href="/services" className="mt-12 text-foreground/60 flex items-center gap-2 text-lg font-medium hover:text-foreground transition-colors w-fit duration-300">
              Voir tous les services <ArrowRight className="w-5 h-5" />
            </Link>
          </GlassCard>

          {/* Project highlight */}
          <GlassCard className="md:col-span-12 lg:col-span-7 p-0 overflow-hidden flex flex-col min-h-[600px] z-10">
            <div className="relative h-64 md:h-[360px] w-full overflow-hidden shrink-0 border-b border-[var(--glass-border)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Wyze Academy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex-grow flex flex-col justify-center p-10 md:p-12 bg-background-secondary z-20">
              <h2 className="text-[11px] font-bold text-foreground-secondary tracking-widest uppercase mb-3">Projet Star</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Wyze Academy</h3>
              <p className="text-foreground-secondary max-w-xl mb-8 text-xl font-light leading-relaxed">
                Plateforme e-learning premium. Architecture front-end optimisée pour les performances (SSR) et direction artistique 'Dark Luxury' exigeante.
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

      {/* Philosophy Section */}
      <section className="relative z-30 w-full px-6 py-20 pb-0 max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Ma Vision</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Philosophie de Conception.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <GlassCard className="p-8">
            <div className="w-14 h-14 rounded-2xl bg-background-secondary border border-[var(--glass-border)] flex items-center justify-center mb-8">
              <Zap className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">Performance Native</h4>
            <p className="text-foreground-secondary leading-relaxed font-light">
              L'expérience utilisateur commence par la vitesse. Je priorise le Server-Side Rendering (SSR) et l'optimisation des assets pour des applications ultra-réactives.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="w-14 h-14 rounded-2xl bg-background-secondary border border-[var(--glass-border)] flex items-center justify-center mb-8">
              <Layers className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">Scalabilité</h4>
            <p className="text-foreground-secondary leading-relaxed font-light">
              Une architecture solide est invisible. J'écris un code modulaire, typé et facile à maintenir pour que vos applications puissent évoluer sans friction.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="w-14 h-14 rounded-2xl bg-background-secondary border border-[var(--glass-border)] flex items-center justify-center mb-8">
              <Smartphone className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">Expérience Immersive</h4>
            <p className="text-foreground-secondary leading-relaxed font-light">
              Au-delà de la fonction, la forme. Micro-interactions, animations fluides et intégration pixel-perfect garantissent une interface moderne et élégante.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="relative z-30 w-full px-6 py-32 max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Mon Processus</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Méthodologie.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[32%] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent z-0" />

          {[
            { icon: Search, title: "1. Découverte", desc: "Analyse des besoins et définition de l'architecture." },
            { icon: PenTool, title: "2. Design", desc: "Prototypage UI/UX et validation de l'interface." },
            { icon: Code2, title: "3. Ingénierie", desc: "Développement front-end avec React & Next.js." },
            { icon: Rocket, title: "4. Lancement", desc: "Tests, optimisation SEO et déploiement final." }
          ].map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-background border border-[var(--glass-border)] flex items-center justify-center mb-6 shadow-sm">
                <step.icon className="w-6 h-6 text-foreground/70" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">{step.title}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed font-light px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Tech Showcase Section */}
      <section ref={sectionRef} className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden border-t border-[var(--glass-border)] bg-background-secondary/20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--background-secondary)_0%,_transparent_70%)] opacity-50" />

        {/* The 3D Perspective Container */}
        <div className="relative z-10 w-full max-w-5xl px-6 perspective-[2000px] flex items-center justify-center h-full">
          <motion.div
            className="relative w-full max-w-4xl aspect-[16/9] rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-12 overflow-hidden transform-style-3d origin-center"
            style={{
              scale: useTransform(smoothSectionProgress, [0, 0.5, 1], [0.7, 1.25, 0.8]),
              rotateX: useTransform(smoothSectionProgress, [0, 0.5, 1], [40, 0, -30]),
              rotateY: useTransform(smoothSectionProgress, [0, 0.5, 1], [-25, 0, 20]),
              z: useTransform(smoothSectionProgress, [0, 0.5, 1], [-300, 50, -200]),
            }}
          >
            {/* Internal Parallax Layers */}
            <motion.div
              className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--foreground)_0%,_transparent_50%)]"
              style={{ translateZ: "-50px" }}
            />

            <motion.div
              className="relative z-20 text-center"
              style={{ translateZ: "50px" }}
            >
              <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-8">
                L'Écosystème <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground-secondary">Moderne</span>.
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'GSAP'].map((tech) => (
                  <div key={tech} className="px-5 py-2 rounded-full border border-[var(--glass-border)] bg-background/50 text-foreground-secondary text-sm md:text-base font-medium">
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Glowing Orbit / Ring illusion */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-foreground/5 rounded-full"
              style={{
                translateZ: "100px",
                rotateX: "70deg",
                rotateZ: useTransform(scrollYProgress, [0, 1], [0, 360])
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full px-6 py-32 max-w-4xl mx-auto text-center border-t border-[var(--glass-border)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="w-20 h-20 rounded-full bg-background-secondary border border-[var(--glass-border)] flex items-center justify-center shadow-sm mb-4">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-20"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-foreground"></span>
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tighter">
            Un projet en tête ?
          </h2>
          <p className="text-xl md:text-2xl text-foreground-secondary font-light max-w-2xl leading-relaxed">
            Transformons vos idées en réalité numérique. Que vous ayez besoin d'une refonte complète ou du développement d'une nouvelle plateforme, discutons-en.
          </p>
          <Link href="/contact" className="mt-8">
            <GlassButton variant="primary" className="h-16 px-12 text-lg rounded-full shadow-lg">
              Démarrer une discussion <ArrowRight className="ml-3 w-5 h-5" />
            </GlassButton>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
