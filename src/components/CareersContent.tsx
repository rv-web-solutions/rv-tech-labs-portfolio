"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, DollarSign } from "lucide-react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

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
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Header */}
            <section className="bg-slate-900 pt-16 pb-16 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 -z-10"></div>
                <div className="container mx-auto max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
                        Join Our <span className="text-primary">Team</span>
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        We are always looking for passionate, talented individuals to help us build the next generation of digital products.
                    </p>
                </div>
            </section>

            {/* Culture Banner Image */}
            <section className="relative h-64 md:h-[400px] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=600"
                    alt="RV Tech Labs Innovation Culture"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-transparent"></div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Why RV Tech Labs?</h2>
                        <p className="text-slate-600 text-lg">We offer a dynamic, startup environment where your impact is visible from day one.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Clock className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Flexible Culture</h3>
                            <p className="text-slate-600">Work remotely or hybrid. We care about outcomes, not hours spent at a desk.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Briefcase className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Startup Environment</h3>
                            <p className="text-slate-600">Fast-paced, high autonomy, and the ability to work on cutting-edge technologies.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <CheckCircle2 className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Growth Opportunities</h3>
                            <p className="text-slate-600">Continuous learning budget, mentorship, and clear paths to leadership roles.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-8">Open Positions</h2>
                            <div className="space-y-4">
                                {positions.map((pos, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary/50 transition-colors shadow-sm">
                                        <h3 className="text-xl font-bold font-heading text-slate-900 mb-4">{pos.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                                                <Briefcase className="w-4 h-4 text-primary" /> {pos.type}
                                            </span>
                                            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                                                <MapPin className="w-4 h-4 text-primary" /> {pos.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                                                <DollarSign className="w-4 h-4 text-primary" /> {pos.salary}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
                                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">Apply Now</h2>
                                <p className="text-slate-500 mb-8">Submit your details and we&apos;ll be in touch.</p>

                                {status === "success" ? (
                                    <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center space-y-4">
                                        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                                        <div>
                                            <h4 className="font-bold text-lg">Application Submitted!</h4>
                                            <p className="text-green-700/80 mt-1">Thank you for your interest. Our HR team will review your profile shortly.</p>
                                        </div>
                                        <button onClick={() => setStatus("idle")} className="text-green-700 font-medium underline mt-4">
                                            Submit another application
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {status === "error" && (
                                            <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 text-sm">
                                                <AlertCircle className="w-5 h-5 shrink-0" />
                                                <p>There was an error submitting your application. Please check your credentials or network.</p>
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-slate-700">Full Name *</label>
                                                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary transition-colors" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-slate-700">Email *</label>
                                                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary transition-colors" placeholder="john@example.com" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-slate-700">Position *</label>
                                                <select name="position" required value={formData.position} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary transition-colors">
                                                    <option value="">Select a position</option>
                                                    {positions.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                                                    <option value="General">General Interest</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-slate-700">Portfolio</label>
                                                <input type="url" name="portfolioUrl" value={formData.portfolioUrl} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary transition-colors" placeholder="https://..." />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-slate-700">Message *</label>
                                            <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-primary transition-colors resize-none" placeholder="Tell us about yourself..."></textarea>
                                        </div>
                                        <button type="submit" disabled={status === "submitting"} className="w-full bg-primary hover:bg-primary-hover text-white rounded-xl font-medium text-lg py-4 transition-all flex items-center justify-center gap-2">
                                            {status === "submitting" ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</> : <>Submit Application <Send className="w-5 h-5" /></>}
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
