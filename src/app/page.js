import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ImmigrationIT",
    url: "https://immigrationit.com",
    description:
      "ImmigrationIT provides websites, CRM systems, client portals, visa case management tools, document checklist systems, and digital solutions for immigration consultancies.",
    serviceType: [
      "Immigration Website Development",
      "Immigration CRM Development",
      "Visa Case Management System",
      "Client Portal Development",
      "Document Checklist System",
      "Custom Immigration Software Development",
    ],
    areaServed: "Worldwide",
    brand: {
      "@type": "Brand",
      name: "ImmigrationIT",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}