import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Our Projects | RV Tech Labs Portfolio",
  description: "Browse our portfolio of successful web development, mobile apps, and AI-powered solutions. See how we help startups and enterprises succeed.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
