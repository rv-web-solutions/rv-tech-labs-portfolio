"use client";

import { motion } from "framer-motion";

export function PrivacyPolicyContent() {
    return (
        <div className="bg-slate-50 min-h-screen py-24">
            <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold font-heading text-slate-900 mb-8"
                >
                    Privacy Policy
                </motion.h1>
                <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        At RV Tech Labs, we prioritize the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by RV Tech Labs and how we use it.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Information We Collect</h2>
                    <p>
                        We may collect personal information such as your name, email address, and phone number when you fill out our contact or career application forms. We also collect non-personal information like browser type and IP address for analytics purposes.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, operate, and maintain our website, improve user experience, and communicate with you regarding your inquiries or applications.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Log Files</h2>
                    <p>
                        RV Tech Labs follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Third-Party Services</h2>
                    <p>
                        We may use third-party services like EmailJS for form submission handling and Google Gemini for our chatbot features. These services have their own privacy policies.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">5. Consent</h2>
                    <p>
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
                </div>
            </div>
        </div>
    );
}

export function TermsOfServiceContent() {
    return (
        <div className="bg-slate-50 min-h-screen py-24">
            <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold font-heading text-slate-900 mb-8"
                >
                    Terms of Service
                </motion.h1>
                <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Acceptance of Terms</h2>
                    <p>
                        By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials on RV Tech Labs&apos; website for personal, non-commercial transitory viewing only.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Disclaimer</h2>
                    <p>
                        The materials on RV Tech Labs&apos; website are provided on an &apos;as is&apos; basis. RV Tech Labs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Limitations</h2>
                    <p>
                        In no event shall RV Tech Labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RV Tech Labs&apos; website.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8">5. Governing Law</h2>
                    <p>
                        Any claim relating to RV Tech Labs&apos; website shall be governed by the laws of our jurisdiction without regard to its conflict of law provisions.
                    </p>
                </div>
            </div>
        </div>
    );
}
