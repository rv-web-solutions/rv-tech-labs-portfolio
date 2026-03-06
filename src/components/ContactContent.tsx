"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

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

            // Exhaustive property extraction for opaque objects
            if (error && typeof error === 'object') {
                if ('status' in error) console.error("Error Status:", (error as { status: unknown }).status);
                if ('text' in error) console.error("Error Text:", (error as { text: unknown }).text);
                if ('message' in error) console.error("Error Message:", (error as { message: unknown }).message);
                console.error("Error Keys:", Object.keys(error));
                try {
                    console.error("Stringified Error:", JSON.stringify(error));
                } catch {
                    console.error("Error could not be stringified");
                }
            }

            const isPlaceholder = serviceId?.includes("placeholder") || serviceId?.includes("rvtechlabs") || templateId?.includes("contact");
            if (isPlaceholder) {
                console.warn("CRITICAL: It looks like you are using placeholder IDs or the default template names. Please ensure these match your ACTUAL EmailJS Dashboard IDs.");
            }

            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-slate-900 pt-16 pb-24 text-center px-4">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
                        Let&apos;s <span className="text-primary">Talk</span>
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Ready to start your next big project? Reach out to our team and let&apos;s craft something amazing together.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Contact Info */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl h-full border border-slate-100 flex flex-col justify-center space-y-12">
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-6 border-b border-slate-200 pb-4">Our Information</h3>

                                    <div className="space-y-8">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 shrink-0 text-primary">
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 mb-1">Email Us</p>
                                                <a href="mailto:contactrvtechlabs@gmail.com" className="text-slate-600 hover:text-primary transition-colors">
                                                    contactrvtechlabs@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 shrink-0 text-primary">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 mb-1">Call Us</p>
                                                <a href="tel:6305393760" className="text-slate-600 hover:text-primary transition-colors">
                                                    6305393760
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 shrink-0 text-primary">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 mb-1">Visit Us</p>
                                                <p className="text-slate-600 leading-relaxed">
                                                    kukatpally, Hyderabad,<br />
                                                    telangana,<br />
                                                    india
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-primary to-orange-400 p-6 rounded-2xl text-white">
                                    <h4 className="font-bold font-heading mb-2 text-lg">Response Time</h4>
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        Our team typically responds to all inquiries within 24 hours during business days.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-white">
                                <h2 className="text-3xl font-bold font-heading text-slate-900 mb-2">Send a Message</h2>
                                <p className="text-slate-500 mb-8 max-w-lg">Fill out the form below and we&apos;ll get back to you with a personalized solution for your business.</p>

                                {status === "success" ? (
                                    <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-3xl text-center space-y-4 shadow-sm">
                                        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                                        <div>
                                            <h4 className="font-bold text-2xl mb-2">Message Sent Successfully!</h4>
                                            <p className="text-green-700/80 max-w-md mx-auto">Thank you for reaching out. A member of our team will contact you shortly to discuss your project.</p>
                                        </div>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="text-green-700 font-medium underline mt-6"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {status === "error" && (
                                            <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 text-sm border border-red-100">
                                                <AlertCircle className="w-5 h-5 shrink-0" />
                                                <p>There was an error sending your message. Please check your network connection or ensure EmailJS is configured properly.</p>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Company Name</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Service Needed *</label>
                                                <select
                                                    name="service"
                                                    required
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                                                >
                                                    <option value="">Select a service</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="App Development">App Development</option>
                                                    <option value="Content Promotion">Content Promotion</option>
                                                    <option value="Technology Consulting">Technology Consulting</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Project Details *</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y min-h-[120px]"
                                                placeholder="Tell us about your project requirements, timeline, and goals..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full md:w-auto px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-medium text-lg transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 hover:-translate-y-0.5 ml-auto"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message <Send className="w-5 h-5 ml-1" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
