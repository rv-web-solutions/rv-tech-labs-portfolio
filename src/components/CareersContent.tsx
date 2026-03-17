"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, DollarSign } from "lucide-react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

import { motion } from "framer-motion";

const positions = [
    {
        title: "Senior Frontend Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$90k - $120k",
    },
    {
        title: "Node.js Backend Engineer",
        type: "Full-time",
        location: "Hybrid (NY)",
        salary: "$100k - $130k",
    },
    {
        title: "UI/UX Product Designer",
        type: "Contract",
        location: "Remote",
        salary: "$50 - $70 / hr",
    },
    {
        title: "Digital Marketing Specialist",
        type: "Full-time",
        location: "Remote",
        salary: "$60k - $80k",
    },
];

export default function CareersContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        portfolioUrl: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const autoReplyId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        try {
            if (!serviceId || !templateId || !publicKey) {
                const missing = [];
                if (!serviceId) missing.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
                if (!templateId) missing.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
                if (!publicKey) missing.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");

                const errorMsg = `EmailJS Configuration Error: Missing ${missing.join(", ")} in environment variables.`;
                console.error(errorMsg);
                throw new Error(errorMsg);
            }

            // Explicitly initialize with public key
            emailjs.init(publicKey);

            // 1. Send Admin Notification
            const adminParams = {
                name: formData.name,
                from_name: formData.name,
                reply_to: formData.email,
                email: formData.email,
                from_email: formData.email,
                to_email: "contactrvtechlabs@gmail.com",
                contact_email: "contactrvtechlabs@gmail.com",
                phone: formData.phone,
                position: formData.position,
                title: formData.position,
                portfolio: formData.portfolioUrl,
                message: formData.message,
                type: "Career Application",
            };

            await emailjs.send(serviceId, templateId, adminParams, publicKey);

            // 2. Send User Auto-Reply (if configured)
            if (autoReplyId) {
                const userParams = {
                    name: formData.name,
                    from_name: "RV Tech Labs Team",
                    reply_to: "contactrvtechlabs@gmail.com",
                    to_email: formData.email,
                    email: formData.email,
                    title: formData.position, // Mapping position to title
                    message: formData.message,
                };
                await emailjs.send(serviceId, autoReplyId, userParams, publicKey);
            }

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", position: "", portfolioUrl: "", message: "" });
        } catch (error: unknown) {
            console.error("EmailJS Submission Failed!");
            console.error("Raw Error:", error);

            // Exhaustive property extraction
            if (error && typeof error === 'object') {
                if ('status' in error) console.error("Error Status:", (error as { status: unknown }).status);
                if ('text' in error) console.error("Error Text:", (error as { text: unknown }).text);
                if ('message' in error) console.error("Error Message:", (error as { message: unknown }).message);
                console.error("Error Keys:", Object.keys(error));
            }

            const isPlaceholder = serviceId?.includes("placeholder") || serviceId?.includes("rvtechlabs") || templateId?.includes("contact");
            if (isPlaceholder) {
                console.warn("CRITICAL: It looks like you are using placeholder IDs or the default template names. Please ensure these match your ACTUAL EmailJS Dashboard IDs.");
            }

            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-transparent">
            {/* Header */}
            <section className="bg-slate-900 pt-24 pb-24 md:pt-32 md:pb-32 text-center px-4 relative overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-7xl font-bold font-heading text-white mb-6 md:mb-8 leading-[1.1]"
                    >
                        Join Our <span className="text-primary font-extrabold uppercase tracking-tight">Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
                    >
                        We are always looking for passionate, talented individuals to help us build the next generation of digital products.
                    </motion.p>
                </div>
            </section>

            {/* Culture Banner Image */}
            <section className="relative h-64 md:h-[500px] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=600"
                    alt="RV Tech Labs Innovation Culture"
                    fill
                    className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-950/80"></div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 md:py-32 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16 md:mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6"
                        >
                            Why RV Tech Labs?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto"
                        >
                            We offer a dynamic, startup environment where your impact is visible from day one.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { icon: <Clock className="w-8 h-8 text-primary" />, title: "Flexible Culture", desc: "Work remotely or hybrid. We care about outcomes, not hours spent at a desk." },
                            { icon: <Briefcase className="w-8 h-8 text-secondary" />, title: "Startup Environment", desc: "Fast-paced, high autonomy, and the ability to work on cutting-edge technologies." },
                            { icon: <CheckCircle2 className="w-8 h-8 text-green-500" />, title: "Growth Opportunities", desc: "Continuous learning budget, mentorship, and clear paths to leadership roles." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-100 text-center hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-slate-100">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-10 md:mb-16">Open Positions</h2>
                            <div className="space-y-6">
                                {positions.map((pos, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-primary/50 transition-all shadow-sm hover:shadow-2xl group cursor-pointer"
                                    >
                                        <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900 mb-6 group-hover:text-primary transition-colors">{pos.title}</h3>
                                        <div className="flex flex-wrap gap-3 md:gap-4 text-sm font-bold text-slate-600">
                                            <span className="flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                                                <Briefcase className="w-4 h-4 text-primary" /> {pos.type}
                                            </span>
                                            <span className="flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                                                <MapPin className="w-4 h-4 text-primary" /> {pos.location}
                                            </span>
                                            <span className="flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                                                <DollarSign className="w-4 h-4 text-primary" /> {pos.salary}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/40 border border-slate-50"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-3">Apply Now</h2>
                                <p className="text-slate-500 text-lg mb-10">Submit your details and we&apos;ll be in touch.</p>

                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-green-50 border border-green-200 text-green-800 p-10 rounded-3xl text-center space-y-6"
                                    >
                                        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                                        <div>
                                            <h4 className="font-bold text-2xl">Application Submitted!</h4>
                                            <p className="text-green-700/80 mt-1 max-w-xs mx-auto">Thank you for your interest. Our HR team will review your profile shortly.</p>
                                        </div>
                                        <button onClick={() => setStatus("idle")} className="text-primary font-bold hover:underline mt-4">
                                            Submit another application
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {status === "error" && (
                                            <div className="bg-red-50 text-red-600 p-5 rounded-2xl flex items-start gap-4 text-base border border-red-100">
                                                <AlertCircle className="w-6 h-6 shrink-0" />
                                                <p>There was an error submitting your application. Please check your credentials or network.</p>
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Full Name *</label>
                                                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Email *</label>
                                                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900" placeholder="john@example.com" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Position *</label>
                                                <select name="position" required value={formData.position} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 cursor-pointer appearance-none">
                                                    <option value="">Select a position</option>
                                                    {positions.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                                                    <option value="General">General Interest</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Portfolio</label>
                                                <input type="url" name="portfolioUrl" value={formData.portfolioUrl} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900" placeholder="https://..." />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Message *</label>
                                            <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 resize-none" placeholder="Tell us about yourself..."></textarea>
                                        </div>
                                        <button type="submit" disabled={status === "submitting"} className="w-full bg-primary hover:bg-primary-hover text-white rounded-2xl font-bold text-xl py-5 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0">
                                            {status === "submitting" ? <><Loader2 className="w-6 h-6 animate-spin" /> Submitting...</> : <>Submit Application <Send className="w-6 h-6" /></>}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
