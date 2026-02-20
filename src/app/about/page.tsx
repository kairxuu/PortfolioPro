import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Process } from "@/components/sections/Process";
import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";
import { ArrowRight, Terminal, Layers, Figma, Database } from "lucide-react";

export const metadata = {
    title: "À propos - Alexandre KEOLASY",
    description: "Mon parcours, de l'analytique mathématique à l'ingénierie front-end.",
};

const stack = [
    { icon: Terminal, title: "Core Front-End", items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"] },
    { icon: Layers, title: "Styling & UI", items: ["Tailwind CSS", "Framer Motion", "GSAP", "Radix UI"] },
    { icon: Database, title: "Architecture & Data", items: ["Zustand", "Redux", "React Query", "REST / GraphQL"] },
    { icon: Figma, title: "Design & Process", items: ["Figma", "Git / GitHub", "Vercel", "CI/CD"] },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            {/* Editorial Header */}
            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    Mon Parcours.
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed">
                    De la rigueur mathématique à la création d'expériences numériques immersives.
                </p>
                <div className="w-full h-px bg-[var(--glass-border)] mt-20" />
            </section>

            {/* Biography Split Section */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left: Image / Portrait */}
                    <div className="w-full lg:w-5/12 shrink-0">
                        <GlassCard className="p-2 md:p-4 rotate-1">
                            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-background-secondary/50 grayscale contrast-125">
                                <img
                                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                                    alt="Alexandre Keolasy - Abstract Representation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-foreground/10 mix-blend-overlay" />
                            </div>
                        </GlassCard>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center pt-4 lg:pt-12">
                        <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-8">Genèse</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight leading-snug">
                            L'esprit de synthèse appliqué au design logiciel.
                        </h3>

                        <div className="space-y-6 text-foreground-secondary text-lg font-light leading-relaxed">
                            <p>
                                Mon chemin vers le développement Front-End n'est pas conventionnel. Issu d'une formation initiale approfondie en <strong>mathématiques</strong>, j'ai développé très tôt une obsession pour la logique pure, la résolution de problèmes complexes et l'optimisation des systèmes.
                            </p>
                            <p>
                                J'ai découvert dans le code le prolongement parfait de cet esprit analytique. Le <strong>Front-End</strong>, en particulier, m'a fasciné car il représente la frontière exacte où la logique mathématique (l'état, le routage, la performance) rencontre la créativité et la psychologie humaine (l'interface, l'interaction, le ressenti).
                            </p>
                            <p>
                                Aujourd'hui, ma spécialisation dans l'écosystème <strong>React et Next.js</strong> me permet de construire des architectures robustes et scalables, tout en conservant une exigence quasi obsessionnelle pour les détails visuels (animations fluides à 60fps, respect rigoureux des grilles typographiques).
                            </p>
                            <p>
                                Je ne me considère pas juste comme un codeur, mais comme un <strong>artisan numérique</strong>. Je bâtis des outils qui ont non seulement du sens techniquement, mais qui procurent aussi de l'émotion à travers leur perfection d'exécution.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="w-full border-t border-[var(--glass-border)] py-32 bg-background-secondary/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="mb-16">
                        <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Boîte à outils</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Stack Technique.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stack.map((category, idx) => (
                            <GlassCard key={idx} className="p-8 flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center mb-6">
                                    <category.icon className="w-6 h-6 text-foreground" />
                                </div>
                                <h4 className="text-xl font-bold text-foreground mb-6">{category.title}</h4>
                                <ul className="flex flex-col gap-4">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reusing Process just below as requested/existing */}
            <div className="py-20">
                <Process />
            </div>

            {/* Final CTA */}
            <section className="w-full border-t border-[var(--glass-border)] py-20 bg-background-secondary/30">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Une idée à prototyper ?</h2>
                    <Link href="/contact" className="inline-block mt-4">
                        <GlassButton className="px-10 h-14 rounded-full text-base flex items-center gap-2">
                            Démarrons un projet <ArrowRight className="w-4 h-4 ml-2" />
                        </GlassButton>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
