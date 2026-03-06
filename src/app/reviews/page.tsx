import { Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Reviews | RV Tech Labs",
    description: "Read what our clients have to say about working with RV Tech Labs across web, app, and content promotion projects.",
};

const reviews = [
    {
        name: "Alex Rivera",
        role: "Startup Founder",
        rating: 5,
        text: "RV Tech Labs built our website incredibly fast and the quality exceeded expectations. Their attention to detail and understanding of modern web standards made our product launch a massive success.",
    },
    {
        name: "Sarah Jenkins",
        role: "CEO, TechStore",
        rating: 5,
        text: "Their app development team delivered a perfect mobile application for our e-commerce business. The user interface is smooth, and they handled the complex backend integrations flawlessly.",
    },
    {
        name: "Marcus Chen",
        role: "Marketing Director",
        rating: 5,
        text: "Content promotion strategies from RV Tech Labs helped us increase our organic traffic by 300% in just six months. Highly recommend their strategic consulting.",
    },
    {
        name: "Emily Watson",
        role: "Founder, EduPlatform",
        rating: 5,
        text: "Working with RV Tech Labs was a breeze. They developed our comprehensive SaaS platform on time and under budget. The team's communication is top-notch.",
    },
    {
        name: "David Kumar",
        role: "CTO, NextGen Real Estate",
        rating: 5,
        text: "We needed a robust matching algorithm for our property app. The engineers at RV Tech Labs designed an elegant solution using modern AI techniques. Outstanding work.",
    },
    {
        name: "Jessica Lopez",
        role: "VP of Operations",
        rating: 5,
        text: "Our legacy systems needed a complete overhaul. RV Tech Labs stepped in, mapped out the architecture, and executed a seamless migration to a fast, secure modern stack.",
    },
];

export default function ReviewsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Header */}
            <section className="bg-slate-900 pt-16 pb-24 text-center px-4">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
                        Client <span className="text-primary">Testimonials</span>
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed mx-auto">
                        Don&apos;t just take our word for it. Here&apos;s what our partners think about our work.
                    </p>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-primary/50 transition-colors flex flex-col"
                            >
                                <div className="flex text-amber-400 mb-6">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>

                                <p className="text-slate-700 italic leading-relaxed mb-8 flex-1">
                                    &quot;{review.text}&quot;
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold font-heading text-lg">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold font-heading text-slate-900">{review.name}</h4>
                                        <p className="text-sm text-primary font-medium">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
