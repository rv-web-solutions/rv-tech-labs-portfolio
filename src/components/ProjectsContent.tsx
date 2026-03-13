"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Startup Portfolio Website",
        category: "Web Development",
        tech: ["React", "Tailwind CSS"],
        description: "A high-performance, responsive portfolio site designed to showcase a startup's services with fast load times and clean aesthetics.",
        bgType: "bg-slate-100",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
        title: "Eco-Friendly Online Store",
        category: "E-commerce",
        tech: ["Next.js", "Stripe", "Supabase"],
        description: "A fully functional e-commerce platform with seamless payment integration, dynamic product filtering, and a custom CMS.",
        bgType: "bg-orange-50",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
        title: "Restaurant Ordering App",
        category: "Mobile Native",
        tech: ["Flutter", "Firebase"],
        description: "A smooth iOS and Android ordering experience featuring real-time order tracking, push notifications, and loyalty points.",
        bgType: "bg-blue-50",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
        title: "AI Content Generator",
        category: "Artificial Intelligence",
        tech: ["OpenAI API", "React", "Node.js"],
        description: "An AI-powered SaaS dashboard that generates optimized blog posts, social media captions, and ad copy in seconds.",
        bgType: "bg-purple-50",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
        title: "Digital Marketing Dashboard",
        category: "Web App / Dashboard",
        tech: ["React", "Chart.js", "GraphQL"],
        description: "A comprehensive analytics dashboard aggregating data from multiple ad platforms to provide real-time ROI tracking.",
        bgType: "bg-green-50",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
        title: "Education Learning Platform",
        category: "EdTech",
        tech: ["Next.js", "Firebase", "WebRTC"],
        description: "An interactive e-learning platform featuring live video classes, progress tracking, and interactive quizzes.",
        bgType: "bg-indigo-50",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=500",
    },
];

export default function ProjectsContent() {
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
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Header */}
            <section className="bg-slate-900 pt-16 pb-24 text-center px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6"
                    >
                        Featured <span className="text-primary">Work</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
                    >
                        A selection of recent projects built by our team. We love turning complex problems into elegant digital products.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid Container */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: false }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                            >
                                <div className={`h-56 w-full ${project.bgType} relative overflow-hidden flex items-center justify-center border-b border-slate-100`}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all z-20">
                                        <ArrowUpRight className="w-5 h-5 text-primary" />
                                    </div>

                                    {/* Desktop Frame Overlay - Minimal */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-white/10 backdrop-blur-md rounded-t-lg border-t border-x border-white/20 z-10 hidden group-hover:flex items-center px-3 gap-1.5 transition-all">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="text-xs font-bold tracking-wider uppercase text-primary mb-3">
                                        {project.category}
                                    </div>

                                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-2 flex-wrap">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
