import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Blog as BlogSection } from "@/components/sections/Blog";

export const metadata = {
    title: "Blog",
    description: "Notes, réflexions et tutoriels sur le Design et le Développement.",
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            {/* Editorial Header */}
            <section className="pt-40 pb-16 px-6 md:px-12 xl:px-24 w-full fade-in">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                    Notes & Pensées.
                </h1>
                <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl font-light leading-relaxed">
                    Réflexions sur l'interface utilisateur, l'architecture Next.js, et la recherche constante de la perfection numérique.
                </p>
            </section>

            {/* Blog Grid Container */}
            <div className="flex-grow">
                {/* Reusing the existing Blog component block */}
                <BlogSection />
            </div>

            <Footer />
        </main>
    );
}
