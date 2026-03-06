import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/LegalContent";

export const metadata: Metadata = {
    title: "Privacy Policy | RV Tech Labs",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information at RV Tech Labs.",
};

export default function PrivacyPage() {
    return <PrivacyPolicyContent />;
}
