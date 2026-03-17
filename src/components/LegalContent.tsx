"use client";

import { motion } from "framer-motion";

export function PrivacyPolicyContent() {
    return (
        <div className="bg-transparent min-h-screen py-24 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-16 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-8 md:mb-12 tracking-tight"
                >
                    Privacy <span className="text-primary italic">Policy</span>
                </motion.h1>
                <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
                    <p className="text-sm font-medium uppercase tracking-widest text-primary/80">Last Updated: {new Date().toLocaleDateString()}</p>
                    <p className="text-lg leading-relaxed">
                        At RV Tech Labs, we prioritize the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by RV Tech Labs and how we use it.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">1. Information We Collect</h2>
                        <p className="leading-relaxed">
                            We may collect personal information such as your name, email address, and phone number when you fill out our contact or career application forms. We also collect non-personal information like browser type and IP address for analytics purposes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">2. How We Use Your Information</h2>
                        <p className="leading-relaxed">
                            We use the information we collect to provide, operate, and maintain our website, improve user experience, and communicate with you regarding your inquiries or applications.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">3. Log Files</h2>
                        <p className="leading-relaxed">
                            RV Tech Labs follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">4. Third-Party Services</h2>
                        <p className="leading-relaxed">
                            We may use third-party services like EmailJS for form submission handling and Google Gemini for our chatbot features. These services have their own privacy policies.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">5. Consent</h2>
                        <p className="leading-relaxed">
                            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export function TermsOfServiceContent() {
    return (
        <div className="bg-transparent min-h-screen py-24 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-16 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-8 md:mb-12 tracking-tight"
                >
                    Terms of <span className="text-primary italic">Service</span>
                </motion.h1>
                <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
                    <p className="text-sm font-medium uppercase tracking-widest text-primary/80">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">1. Acceptance of Terms</h2>
                        <p className="leading-relaxed">
                            By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">2. Use License</h2>
                        <p className="leading-relaxed">
                            Permission is granted to temporarily download one copy of the materials on RV Tech Labs&apos; website for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">3. Disclaimer</h2>
                        <p className="leading-relaxed italic">
                            The materials on RV Tech Labs&apos; website are provided on an &apos;as is&apos; basis. RV Tech Labs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">4. Limitations</h2>
                        <p className="leading-relaxed">
                            In no event shall RV Tech Labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RV Tech Labs&apos; website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 border-l-4 border-primary pl-4">5. Governing Law</h2>
                        <p className="leading-relaxed">
                            Any claim relating to RV Tech Labs&apos; website shall be governed by the laws of our jurisdiction without regard to its conflict of law provisions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
