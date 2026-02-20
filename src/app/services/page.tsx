import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Services as ServicesSection } from "@/components/sections/Services";

export const metadata = {
    title: "Services - AntiGravity",
    description: "Développement web performant et UI/UX Design.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            {/* Editorial Header */}
            <section className="pt-40 pb-16 px-6 md:px-12 xl:px-24 w-full fade-in">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                    Ce que je propose.
                </h1>
                <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl font-light leading-relaxed">
                    Des solutions sur-mesure combinant un design audacieux et des performances techniques sans compromis.
                    L'alliance du beau et du rapide.
                </p>
            </section>

            {/* Services Content Container */}
            <div className="flex-grow">
                {/* Reusing the updated bento grid Services component */}
                <ServicesSection />
            </div>

            <Footer />
        </main>
    );
}
