import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
    title: "About Us | RV Tech Labs",
    description: "Learn about RV Tech Labs, our mission, vision, and the expert team behind our high-performance digital solutions.",
};

export default function AboutPage() {
    return <AboutContent />;
}
