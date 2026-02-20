import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t border-[var(--glass-border)] bg-[var(--background)] w-full pt-16 pb-8">
            <div className="px-6 w-full max-w-5xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
                            <span className="font-bold text-lg tracking-tight text-foreground">
                                Alexandre KEOLASY
                            </span>
                        </Link>
                        <p className="text-foreground/60 max-w-sm mb-6 leading-relaxed">
                            Concevoir sans contraintes. Développer avec rigueur. Développeur Front-end & UI/UX Designer basé à Paris.
                        </p>
                        <div className="flex items-center gap-4 text-foreground/60">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-105 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-105 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-105 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-foreground font-semibold mb-6 tracking-tight">Navigation</h3>
                        <ul className="flex flex-col gap-3 text-foreground/60">
                            <li><Link href="/about" className="hover:text-foreground transition-colors">À propos</Link></li>
                            <li><Link href="/services" className="hover:text-foreground transition-colors">Services</Link></li>
                            <li><Link href="/projets" className="hover:text-foreground transition-colors">Projets</Link></li>
                            <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-foreground font-semibold mb-6 tracking-tight">Contact</h3>
                        <ul className="flex flex-col gap-3 text-foreground/60">
                            <li><a href="mailto:alexklsy@proton.me" className="hover:text-foreground transition-colors">alexklsy@proton.me</a></li>
                            <li>Paris, France</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
                    <p>© 2026 – Alexandre KEOLASY. Tous droits réservés.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
                        <a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
