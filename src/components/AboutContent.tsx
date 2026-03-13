"use client";

import { Lightbulb, Target, Zap, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const values = [
    {
        title: "Innovation First",
        description: "We are constantly pushing the boundaries of what's possible with new technologies like AI and modern cloud architectures.",
        icon: <Zap className="w-6 h-6" />,
        color: "bg-orange-100 text-primary"
    },
    {
        title: "Client Centric",
        description: "Your goal is our goal. We work closely with our partners to ensure the solutions we build drive real business value.",
        icon: <Heart className="w-6 h-6" />,
        color: "bg-red-100 text-red-600"
    },
    {
        title: "Quality Driven",
        description: "We don't just ship code; we deliver high-performance, secure, and scalable digital products that last.",
        icon: <Shield className="w-6 h-6" />,
        color: "bg-blue-100 text-blue-600"
    }
];

const founders = [
    {
        name: "Vamshi Potharaveni",
        role: "Founder & CEO",
        bio: "Visionary leader with 2+ years of experience in scaling tech startups and designing complex enterprise systems.",
        image: "/founder.jpg"
    },
    {
        name: "Ramu Atika",
        role: "Co-Founder & Team",
        bio: "A visionary co-founder and his team of industry-leading architects and strategists dedicated to delivering digital excellence at RV Tech Labs.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400&h=400"
    }
];

export default function AboutContent() {
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
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-slate-50 pt-16 pb-24 border-b border-slate-100">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-6"
                    >
                        Crafting the Future of <span className="text-primary">Digital Business</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        RV Tech Labs was founded on a simple principle: providing high-end technology expertise to businesses ready to scale. We are a team of dedicated creators, engineers, and strategists.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            {...fadeInUp}
                            className="bg-orange-50/50 border border-orange-100 p-8 rounded-2xl"
                        >
                            <div className="w-12 h-12 bg-orange-100 text-primary rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To bridge the gap between complex technological challenges and elegant, scalable business solutions. We empower our clients by building digital foundations that foster long-term growth and innovation.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-secondary rounded-xl flex items-center justify-center mb-6">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">Our Vision</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To be the world&apos;s most trusted partner for digital transformation, known for our technical excellence, integrity, and our ability to turn ambitious visions into reality through cutting-edge engineering.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <motion.div
                        {...fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Our Core Values</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">The guiding principles behind every line of code we write and every strategy we develop.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                            >
                                <div className={`w-12 h-12 ${val.color} rounded-xl flex items-center justify-center mb-6`}>
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{val.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Founders */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <motion.div
                        {...fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Meet the Leadership</h2>
                        <p className="text-slate-600">The minds behind RV Tech Labs&apos; success.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12"
                    >
                        {founders.map((founder, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="flex flex-col md:flex-row gap-8 items-center md:items-start"
                            >
                                <div className="w-48 h-48 relative rounded-3xl overflow-hidden shrink-0 shadow-lg group">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-1">{founder.name}</h3>
                                    <p className="text-primary font-medium mb-4">{founder.role}</p>
                                    <p className="text-slate-600 leading-relaxed">{founder.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-slate-900 py-20 text-center">
                <motion.div
                    {...fadeInUp}
                    className="container mx-auto px-4 max-w-3xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                        Join our Journey
                    </h2>
                    <p className="text-lg text-slate-400 mb-10">
                        We&apos;re always looking for talented individuals to join our team or visionary clients to partner with. Let&apos;s build something legacy-worthy.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-full font-medium text-lg hover:bg-primary-hover hover:-translate-y-1 transition-all shadow-lg shadow-primary/20">
                            Work With Us
                        </Link>
                        <Link href="/careers" className="px-8 py-4 bg-white/10 text-white rounded-full font-medium text-lg hover:bg-white/20 transition-all border border-white/20">
                            View Careers
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
