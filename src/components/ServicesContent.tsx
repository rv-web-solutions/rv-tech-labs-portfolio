"use client";

import { ArrowRight, Code, LayoutTemplate, Server, Smartphone, MonitorSmartphone, Share2, Search, BarChart3 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        id: "web",
        title: "Web Development",
        description: "We build custom, fast, and scalable websites that look great on every device and perform beautifully. From landing pages to complex e-commerce platforms.",
        icon: <Code className="w-8 h-8 text-primary" />,
        features: [
            { name: "Custom Websites", icon: <LayoutTemplate className="w-5 h-5" /> },
            { name: "Business Portfolios", icon: <MonitorSmartphone className="w-5 h-5" /> },
            { name: "Landing Pages", icon: <ArrowRight className="w-5 h-5" /> },
            { name: "E-commerce Platforms", icon: <Server className="w-5 h-5" /> },
        ],
        techStack: ["React", "Next.js", "Node.js", "Tailwind CSS", "Cloud Hosting"],
        gradient: "from-orange-50 to-orange-100",
    },
    {
        id: "app",
        title: "App Development",
        description: "Launch your idea on iOS and Android with our high-performance mobile application development services.",
        icon: <Smartphone className="w-8 h-8 text-blue-600" />,
        features: [
            { name: "Android Apps", icon: <LayoutTemplate className="w-5 h-5" /> },
            { name: "iOS Apps", icon: <MonitorSmartphone className="w-5 h-5" /> },
            { name: "Cross-platform Apps", icon: <ArrowRight className="w-5 h-5" /> },
            { name: "Progressive Web Apps", icon: <Server className="w-5 h-5" /> },
        ],
        techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
        gradient: "from-blue-50 to-blue-100",
    },
    {
        id: "content",
        title: "Content Promotion",
        description: "Amplify your brand's voice and reach your target audience through strategic digital marketing and SEO optimization.",
        icon: <Share2 className="w-8 h-8 text-green-600" />,
        features: [
            { name: "SEO Optimization", icon: <Search className="w-5 h-5" /> },
            { name: "Social Media Promotion", icon: <Share2 className="w-5 h-5" /> },
            { name: "Content Marketing", icon: <LayoutTemplate className="w-5 h-5" /> },
            { name: "Traffic Growth Strategies", icon: <BarChart3 className="w-5 h-5" /> },
        ],
        techStack: ["Google Analytics", "Arefs", "Semrush", "Meta Ads", "Google Ads"],
        gradient: "from-green-50 to-green-100",
    }
];

export default function ServicesContent() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false },
        transition: { duration: 0.6 }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-slate-50 pt-16 pb-24 text-center px-4 border-b border-slate-100">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-8"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 mb-6"
                    >
                        Digital Solutions for <span className="text-primary">Modern Brands</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
                    >
                        We provide end-to-end technology services. From crafting beautiful user interfaces to building robust backend systems and driving targeted traffic to your product.
                    </motion.p>
                </div>
            </section>

            {/* Services Detailed List */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className={`w-full lg:w-1/2 min-h-[400px] rounded-3xl bg-gradient-to-br ${service.gradient} p-8 lg:p-12 relative flex items-center justify-center overflow-hidden border border-slate-100 group`}>
                                <Image
                                    src={
                                        service.id === 'web' ? 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600' :
                                            service.id === 'app' ? 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=600' :
                                                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600'
                                    }
                                    alt={service.title}
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: false }}
                                    className="relative z-10 w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">{service.title}</h3>
                                    <div className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-slate-600">
                                                <div className="text-primary p-1 bg-primary/10 rounded-lg">{feature.icon}</div>
                                                <span className="font-medium">{feature.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-8">
                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-bold font-heading text-slate-900 mb-4">{service.title}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase mb-4 font-heading">Technologies We Use</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.techStack.map((tech, i) => (
                                            <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Link href="/projects" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover hover:gap-3 transition-all">
                                        View Related Projects <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-slate-900 py-20 text-center">
                <motion.div {...fadeInUp} className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Not sure what you need?</h2>
                    <p className="text-lg text-slate-400 mb-10">Let&apos;s hop on a quick call. We offer free technology consulting to help you determine the best path forward.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium text-lg hover:bg-primary-hover hover:-translate-y-1 transition-all shadow-lg shadow-primary/20">
                        Request a Consultation
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
