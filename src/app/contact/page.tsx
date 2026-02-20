import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact as ContactSection } from "@/components/sections/Contact";

export const metadata = {
    title: "Contact - AntiGravity",
    description: "Discutons de votre projet.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            <div className="flex-grow pt-24 pb-32">
                {/* Reusing the detailed Contact component */}
                <ContactSection />
            </div>

            <Footer />
        </main>
    );
}
