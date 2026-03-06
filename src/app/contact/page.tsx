import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
    title: "Contact Us | RV Tech Labs",
    description: "Get in touch with RV Tech Labs for your next web or mobile project. Our team is ready to help you scale your digital presence.",
};

export default function ContactPage() {
    return <ContactContent />;
}
