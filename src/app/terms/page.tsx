import type { Metadata } from "next";
import { TermsOfServiceContent } from "@/components/LegalContent";

export const metadata: Metadata = {
    title: "Terms of Service | RV Tech Labs",
    description: "Read our terms of service to understand the rules and guidelines for using the RV Tech Labs website and services.",
};

export default function TermsPage() {
    return <TermsOfServiceContent />;
}
