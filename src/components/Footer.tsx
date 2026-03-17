"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-900 border-t border-slate-800 text-slate-300 pt-20 pb-10 transition-colors duration-300 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group w-max">
                            <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-1 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                                <Image
                                    src="/icon.png"
                                    alt="RV Techlabs Logo"
                                    width={90}
                                    height={90}
                                    className="w-full h-full object-contain rounded-xl"
                                />
                            </div>
                            <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">
                                RV Tech<span className="text-primary italic">labs</span>
                            </span>
                        </Link>
                        <p className="text-base leading-relaxed text-slate-400 max-w-xs">
                            Empowering businesses with smart digital solutions. From custom web development to powerful mobile apps and strategic content promotion.
                        </p>
                        <div className="flex items-center gap-5">
                            {[
                                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/rv-tech-labs", label: "LinkedIn" },
                                { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/rvtechlabs", label: "Twitter" },
                                { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/rvtechlabs", label: "Facebook" },
                                { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/rvtechlabs", label: "Instagram" }
                            ].map((social, i) => (
                                <a 
                                    key={i}
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300 border border-slate-700/50"
                                >
                                    {social.icon}
                                    <span className="sr-only">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold font-heading mb-8 tracking-[0.15em] uppercase text-xs">Company</h3>
                        <ul className="space-y-5">
                            {['About Us', 'Services', 'Careers', 'Projects'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-primary transition-all text-sm flex items-center gap-3 group">
                                        <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all duration-300"></span> 
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold font-heading mb-8 tracking-[0.15em] uppercase text-xs">Services</h3>
                        <ul className="space-y-5">
                            {[
                                { name: 'Web Development', href: '/services#web' },
                                { name: 'App Development', href: '/services#app' },
                                { name: 'Content Promotion', href: '/services#content' },
                                { name: 'Tech Consulting', href: '/services' }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="text-slate-400 hover:text-primary transition-all text-sm flex items-center gap-3 group">
                                        <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all duration-300"></span> 
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold font-heading mb-8 tracking-[0.15em] uppercase text-xs">Get in Touch</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-slate-800/50 rounded-lg text-primary border border-slate-700/50">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="text-sm text-slate-400 leading-relaxed">
                                    kukatpally, Hyderabad,<br />telangana, india
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 bg-slate-800/50 rounded-lg text-primary border border-slate-700/50">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <a href="tel:6305393760" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
                                    6305393760
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 bg-slate-800/50 rounded-lg text-primary border border-slate-700/50">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <a href="mailto:contactrvtechlabs@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
                                    contactrvtechlabs@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm font-medium">
                        &copy; {currentYear} RV Tech Labs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-xs md:text-sm font-medium transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-xs md:text-sm font-medium transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
