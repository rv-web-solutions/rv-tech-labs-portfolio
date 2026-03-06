import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "RV Tech Labs | Smart Digital Solutions for Modern Businesses",
  description: "Expert web development, mobile app development, and content promotion services. We help businesses scale with custom technology and strategic digital marketing.",
};

export default function HomePage() {
  return <HomeContent />;
}
