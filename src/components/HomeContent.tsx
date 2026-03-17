"use client";

import Link from "next/link";
import { ArrowRight, Code, Smartphone, Rocket, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedStats } from "@/components/AnimatedStats";
import { Carousel } from "@/components/Carousel";

export default function HomeContent() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.1 } },
        viewport: { once: false }
    };

    return (
        <div className="flex flex-col min-h-screen bg-transparent">
            {/* 1. Hero Section */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-slate-50 -z-20" />
                <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent -z-10" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 backdrop-blur-sm text-primary text-xs md:text-sm font-medium mb-6 md:mb-8 border border-orange-200/50"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Accelerate your growth
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-7xl font-bold font-heading text-slate-900 leading-[1.2] md:leading-[1.1] tracking-tight mb-6 md:mb-8"
                    >
                        Empowering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Smart Digital Solutions</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Web Development <span className="text-slate-300 mx-1 md:mx-2">|</span> App Development <span className="text-slate-300 mx-1 md:mx-2">|</span> Content Promotion
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-md text-slate-900 hover:text-primary rounded-full font-semibold text-lg transition-all border border-slate-200 shadow-sm flex items-center justify-center"
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. Stats Section */}
            <section className="py-12 md:py-16 border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
                    >
                        {[
                            { label: "Clients", value: <AnimatedStats end={10} suffix="+" />, primary: false },
                            { label: "Projects", value: <AnimatedStats end={20} suffix="+" />, primary: true },
                            { label: "Years Experience", value: <AnimatedStats end={2} suffix="+" />, primary: false },
                            { label: "Support", value: "24/7", primary: true, isRaw: true }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="flex flex-col items-center justify-center text-center px-4"
                            >
                                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.primary ? 'text-primary' : 'text-slate-900'}`}>
                                    {stat.value}
                                </div>
                                <p className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. Services Preview */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Our Expertise</h2>
                        <p className="text-slate-600 text-lg">Comprehensive technology solutions designed to elevate your brand and streamline your operations.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {/* Service Card 1 */}
                        <motion.div variants={fadeInUp} className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-14 h-14 bg-orange-100/80 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-orange-200/50">
                                <Code className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">Web Development</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Custom, responsive, and high-performance websites built with modern frameworks to convert visitors into customers.
                            </p>
                            <Link href="/services#web" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>

                        {/* Service Card 2 */}
                        <motion.div variants={fadeInUp} className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                            <div className="w-14 h-14 bg-blue-50/80 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-200/50">
                                <Smartphone className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">App Development</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Native and cross-platform mobile applications designed for seamless user experiences across iOS and Android.
                            </p>
                            <Link href="/services#app" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>

                        {/* Service Card 3 */}
                        <motion.div variants={fadeInUp} className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-14 h-14 bg-orange-100/80 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-orange-200/50">
                                <Rocket className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">Content Promotion</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Strategic SEO and digital marketing campaigns to increase your visibility, traffic, and overall brand growth.
                            </p>
                            <Link href="/services#content" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Projects Carousel */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 mb-12">
                    <motion.div
                        {...fadeInUp}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                    >
                        <div className="max-w-2xl text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-4">Featured Projects</h2>
                            <p className="text-slate-600 text-lg">Explore some of our recent work across various industries.</p>
                        </div>
                        <Link href="/projects" className="shrink-0 inline-flex flex-row items-center justify-center px-6 py-3 border-2 border-slate-200 rounded-full text-slate-700 hover:border-primary hover:text-primary font-semibold transition-all hover:scale-105 active:scale-95">
                            View All Projects
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="w-full"
                >
                    <Carousel speed={35} items={[
                        <div key="p1" className="w-[300px] md:w-[400px] h-[250px] bg-slate-100 rounded-2xl flex flex-col justify-end p-6 border border-slate-200 relative overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500" alt="Startup Portfolio" fill className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            <div className="relative z-20">
                                <div className="text-primary font-semibold text-sm mb-1">React + Tailwind</div>
                                <h4 className="text-white text-xl font-bold font-heading">Startup Portfolio Website</h4>
                            </div>
                        </div>,
                        <div key="p2" className="w-[300px] md:w-[400px] h-[250px] bg-slate-200 rounded-2xl flex flex-col justify-end p-6 border border-slate-200 relative overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=500" alt="E-commerce" fill className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            <div className="relative z-20">
                                <div className="text-primary font-semibold text-sm mb-1">Next.js + Stripe</div>
                                <h4 className="text-white text-xl font-bold font-heading">E-commerce Platform</h4>
                            </div>
                        </div>,
                        <div key="p3" className="w-[300px] md:w-[400px] h-[250px] bg-slate-300 rounded-2xl flex flex-col justify-end p-6 border border-slate-200 relative overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800&h=600" alt="Restaurant ordering" fill className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            <div className="relative z-20">
                                <div className="text-primary font-semibold text-sm mb-1">Flutter Mobile</div>
                                <h4 className="text-white text-xl font-bold font-heading">Restaurant Ordering App</h4>
                            </div>
                        </div>,
                        <div key="p4" className="w-[300px] md:w-[400px] h-[250px] bg-slate-100 rounded-2xl flex flex-col justify-end p-6 border border-slate-200 relative overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=500" alt="Real Estate" fill className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            <div className="relative z-20">
                                <div className="text-primary font-semibold text-sm mb-1">React Native</div>
                                <h4 className="text-white text-xl font-bold font-heading">Real Estate Listing Platform</h4>
                            </div>
                        </div>,
                        <div key="p5" className="w-[300px] md:w-[400px] h-[250px] bg-slate-200 rounded-2xl flex flex-col justify-end p-6 border border-slate-200 relative overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500" alt="AI content generator" fill className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            <div className="relative z-20">
                                <div className="text-primary font-semibold text-sm mb-1">OpenAI + React</div>
                                <h4 className="text-white text-xl font-bold font-heading">AI Blog Generator</h4>
                            </div>
                        </div>
                    ]} />
                </motion.div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-blue-50/50 -z-10"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-3xl p-8 md:p-16 text-center transform transition-transform hover:scale-[1.01] duration-500"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Partner with us to build scalable, high-quality digital solutions that drive real results. Let&apos;s discuss your next big idea.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-10 py-4 bg-secondary hover:bg-slate-800 text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20"
                            >
                                Start a Project
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            >
                                Contact Us
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-slate-500 text-sm">
                            {[
                                "Free Consultation",
                                "Transparent Pricing",
                                "Expert Team"
                            ].map((item, i) => (
                                <span key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
