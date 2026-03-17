"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
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
                company: formData.company,
                service: formData.service,
                title: formData.service,
                message: formData.message,
                type: "General Contact Request",
            };

            await emailjs.send(serviceId, templateId, adminParams, publicKey);

            // 2. Send User Auto-Reply (if configured)
            if (autoReplyId) {
                const userParams = {
                    name: formData.name,
                    from_name: "RV Tech Labs Team",
                    reply_to: "contactrvtechlabs@gmail.com",
                    to_email: formData.email, // Send TO the user
                    email: formData.email,
                    title: formData.service,
                    message: formData.message,
                };
                await emailjs.send(serviceId, autoReplyId, userParams, publicKey);
            }

            setStatus("success");
            setFormData({ name: "", email: "", company: "", service: "", message: "" });
        } catch (error: unknown) {
            console.error("EmailJS Submission Failed!");
            console.error("Raw Error:", error);

            if (error && typeof error === 'object') {
                if ('status' in error) console.error("Error Status:", (error as { status: unknown }).status);
                if ('text' in error) console.error("Error Text:", (error as { text: unknown }).text);
                if ('message' in error) console.error("Error Message:", (error as { message: unknown }).message);
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
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-7xl font-bold font-heading text-white mb-6 md:mb-8 leading-[1.1]"
                    >
                        Let&apos;s <span className="text-primary font-extrabold uppercase tracking-tight">Talk</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
                    >
                        Ready to start your next big project? Reach out to our team and let&apos;s craft something amazing together.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12 md:gap-16">

                        {/* Contact Info */}
                        <div className="w-full lg:w-1/3">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] h-full border border-slate-100 flex flex-col justify-center space-y-12"
                            >
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900 mb-8 border-b border-slate-200 pb-4">Our Information</h3>

                                    <div className="space-y-10">
                                        <div className="flex items-start gap-5">
                                            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-100 shrink-0 text-primary">
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-extrabold text-slate-900 mb-1 uppercase tracking-wider">Email Us</p>
                                                <a href="mailto:contactrvtechlabs@gmail.com" className="text-lg text-slate-600 hover:text-primary transition-colors font-medium">
                                                    contactrvtechlabs@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-5">
                                            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-100 shrink-0 text-primary">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-extrabold text-slate-900 mb-1 uppercase tracking-wider">Call Us</p>
                                                <a href="tel:6305393760" className="text-lg text-slate-600 hover:text-primary transition-colors font-medium">
                                                    6305393760
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-5">
                                            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-100 shrink-0 text-primary">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-extrabold text-slate-900 mb-1 uppercase tracking-wider">Visit Us</p>
                                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                                    kukatpally, Hyderabad,<br />
                                                    telangana, india
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-primary to-orange-500 p-8 rounded-3xl text-white shadow-xl shadow-primary/20">
                                    <h4 className="font-bold font-heading mb-3 text-xl">Response Time</h4>
                                    <p className="text-white/90 text-base leading-relaxed">
                                        Our team typically responds to all inquiries within 24 hours during business days.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form */}
                        <div className="w-full lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-transparent px-4 md:px-0"
                            >
                                <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-4">Send a Message</h2>
                                <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed">Fill out the form below and we&apos;ll get back to you with a personalized solution for your business.</p>

                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-green-50 border border-green-200 text-green-800 p-10 md:p-16 rounded-[2.5rem] text-center space-y-6 shadow-sm backdrop-blur-sm"
                                    >
                                        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
                                        <div>
                                            <h4 className="font-bold text-3xl mb-4">Message Sent Successfully!</h4>
                                            <p className="text-green-700/80 text-lg max-w-md mx-auto">Thank you for reaching out. A member of our team will contact you shortly to discuss your project.</p>
                                        </div>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="text-primary font-bold text-lg hover:underline transition-all mt-8"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        {status === "error" && (
                                            <div className="bg-red-50 text-red-600 p-5 rounded-2xl flex items-start gap-4 text-base border border-red-100">
                                                <AlertCircle className="w-6 h-6 shrink-0" />
                                                <p>There was an error sending your message. Please check your network connection or ensure EmailJS is configured properly.</p>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                            <div className="space-y-3">
                                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg placeholder:text-slate-400"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg placeholder:text-slate-400"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                            <div className="space-y-3">
                                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Company Name</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg placeholder:text-slate-400"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Service Needed *</label>
                                                <div className="relative">
                                                    <select
                                                        name="service"
                                                        required
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg appearance-none cursor-pointer"
                                                    >
                                                        <option value="">Select a service</option>
                                                        <option value="Web Development">Web Development</option>
                                                        <option value="App Development">App Development</option>
                                                        <option value="Content Promotion">Content Promotion</option>
                                                        <option value="Technology Consulting">Technology Consulting</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                        <Send className="w-5 h-5 rotate-90" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-extrabold text-slate-700 uppercase tracking-widest ml-1">Project Details *</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg placeholder:text-slate-400 min-h-[150px]"
                                                placeholder="Tell us about your project requirements, timeline, and goals..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full md:w-auto px-12 py-5 bg-primary hover:bg-primary-hover text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0 hover:-translate-y-1 ml-auto"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 className="w-6 h-6 animate-spin" /> Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message <Send className="w-6 h-6" />
                                                </>
                                            )}
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
