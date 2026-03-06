import type { Metadata } from "next";
import CareersContent from "@/components/CareersContent";

export const metadata: Metadata = {
    title: "Join Our Team | Careers at RV Tech Labs",
    description: "Explore career opportunities at RV Tech Labs. Join a team of passionate creators and engineers building the next generation of digital products.",
};

export default function CareersPage() {
    return <CareersContent />;
}
