"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Reviews", href: "/reviews" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 pointer-events-none flex justify-center">
            <div
                className={`transition-all duration-500 pointer-events-auto px-4 w-full flex justify-center ${scrolled ? "mt-4 max-w-full md:max-w-5xl" : "mt-0 max-w-full"
                    }`}
            >
                <div
                    className={`w-full transition-all duration-500 flex items-center justify-between ${scrolled
                        ? "bg-white/80 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full py-2 px-6 md:px-8 border border-white/20"
                        : "bg-transparent py-5 border-transparent px-2"
                        }`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className={`relative transition-all duration-500 flex items-center justify-center ${scrolled ? "w-12 h-12" : "w-16 h-16"
                            }`}>
                            <Image
                                src="/icon.png"
                                alt="RV Techlabs Logo"
                                width={120}
                                height={120}
                                className="w-full h-full object-contain rounded-full shadow-sm"
                                priority
                            />
                        </div>
                        <span className={`font-heading font-bold tracking-tight text-secondary hidden sm:inline-block transition-all duration-500 ${scrolled ? "text-lg" : "text-xl"
                            }`}>
                            RV Tech<span className="text-primary">labs</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            className={`ml-4 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-all shadow-sm hover:shadow-md active:scale-95 ${scrolled ? "px-4 py-2" : "px-5 py-2.5"
                                }`}
                        >
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors z-50 pointer-events-auto"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-20 left-4 right-4 md:hidden bg-white/95 backdrop-blur-md border border-slate-100 overflow-hidden shadow-2xl rounded-3xl pointer-events-auto"
                    >
                        <div className="flex flex-col px-4 py-6 gap-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-5 py-3 rounded-2xl text-base font-medium transition-colors ${isActive
                                            ? "bg-primary/10 text-primary"
                                            : "text-foreground/80 hover:bg-gray-50 hover:text-primary"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 w-full bg-primary text-white px-5 py-3 rounded-2xl text-center font-medium hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
