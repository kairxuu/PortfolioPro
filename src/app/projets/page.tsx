import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Projects as ProjectsSection } from "@/components/sections/Projects";

export const metadata = {
    title: "Projets - AntiGravity",
    description: "Découvrez mes derniers travaux en design et développement.",
};

export default function ProjetsPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            {/* Editorial Header */}
            <section className="pt-40 pb-16 px-6 md:px-12 xl:px-24 w-full fade-in">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                    Travaux Sélectionnés.
                </h1>
                <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl font-light leading-relaxed">
                    Un aperçu des défis techniques et des designs premium que j'ai conçus et développés récemment.
                </p>
            </section>

            {/* Projects Grid Container */}
            <div className="flex-grow">
                {/* Reusing the updated bento grid Projects component */}
                <ProjectsSection />
            </div>

            <Footer />
        </main>
    );
}
