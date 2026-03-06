"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group w-max">
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                <Image
                                    src="/icon.png"
                                    alt="RV Techlabs Logo"
                                    width={90}
                                    height={90}
                                    className="w-full h-full object-contain rounded-full shadow-md"
                                />
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight text-white">
                                RV Tech<span className="text-primary">labs</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Empowering businesses with smart digital solutions. From custom web development to powerful mobile apps and strategic content promotion.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/company/rv-tech-labs" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="https://twitter.com/rvtechlabs" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://facebook.com/rvtechlabs" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="https://instagram.com/rvtechlabs" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold font-heading mb-6 tracking-wide uppercase text-sm">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                                    <span className="h-[1px] w-2 bg-slate-700"></span> About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                                    <span className="h-[1px] w-2 bg-slate-700"></span> Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                                    <span className="h-[1px] w-2 bg-slate-700"></span> Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                                    <span className="h-[1px] w-2 bg-slate-700"></span> Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold font-heading mb-6 tracking-wide uppercase text-sm">Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services#web" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                                    <span className="h-[1px] w-2 bg-slate-700"></span> Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#app" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                                    <span className="h-[1px] w-2 bg-slate-700"></span> App Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#content" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                                    <span className="h-[1px] w-2 bg-slate-700"></span> Content Promotion
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                                    <span className="h-[1px] w-2 bg-slate-700"></span> Tech Consulting
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold font-heading mb-6 tracking-wide uppercase text-sm">Get in Touch</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-400 leading-relaxed">
                                    kukatpally, Hyderabad,<br />telangana, india
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:6305393760" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    6305393760
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:contactrvtechlabs@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    contactrvtechlabs@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; {currentYear} RV Tech Labs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
