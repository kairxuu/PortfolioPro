import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About as AboutSection } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";

export const metadata = {
    title: "À propos",
    description: "En savoir plus sur Alexandre Keolasy et son approche de développement.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            {/* Editorial Header */}
            <section className="pt-40 pb-16 px-6 md:px-12 xl:px-24 w-full fade-in">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                    À propos d'Alexandre.
                </h1>
                <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl font-light leading-relaxed">
                    Mon histoire, les valeurs qui m'animent et les outils que j'utilise pour donner vie à vos idées.
                </p>
            </section>

            <div className="flex-grow space-y-32 mb-16">
                {/* Reusing the updated bento grid About component */}
                <AboutSection />

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent w-full max-w-5xl mx-auto" />

                {/* Reusing the updated bento grid Process component */}
                <Process />
            </div>

            <Footer />
        </main>
    );
}
