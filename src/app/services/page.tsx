import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Our Services | Web & App Development, SEO",
    description: "Explore our expert services in web development, mobile app development, and content promotion. We build scalable digital solutions tailored to your business goals.",
};

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Software Development",
        "provider": {
            "@type": "LocalBusiness",
            "name": "RV Tech Labs",
            "url": "https://rvtechlabs.com",
            "logo": "https://rvtechlabs.com/logo.png"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Transformation Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "App Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Content Promotion"
                    }
                }
            ]
        }
    };

    return (
        <>
            <Script
                id="services-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicesContent />
        </>
    );
}
