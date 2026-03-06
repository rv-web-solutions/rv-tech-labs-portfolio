import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rvtechlabs.com"),
  title: "RV Tech Labs | Web Development, App Development & Digital Content Promotion",
  description: "RV Tech Labs provides high-quality web development, mobile app development, and content promotion services to help businesses grow online. Build scalable digital solutions with our expert team.",
  keywords: [
    "RV Tech Labs",
    "Web Development Company",
    "App Development Services",
    "Content Promotion Services",
    "Website Development",
    "Startup Tech Solutions",
  ].join(", "),
  authors: [{ name: "RV Tech Labs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rvtechlabs.com",
    siteName: "RV Tech Labs",
    title: "RV Tech Labs | Web Development, App Development & Digital Content Promotion",
    description: "High-quality web development, mobile app development, and content promotion services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RV Tech Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RV Tech Labs | Web Development, App Development & Digital Content Promotion",
    description: "High-quality web development, mobile app development, and content promotion services.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
