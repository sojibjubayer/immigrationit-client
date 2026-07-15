import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://immigrationit.com"),
  title: {
    default: "ImmigrationIT | IT Solutions for Immigration Consultancies",
    template: "%s | ImmigrationIT",
  },
  description:
    "ImmigrationIT provides premium websites, CRM systems, client portals, visa case management tools, document checklist systems, and digital solutions for immigration consultancies, visa agencies, and education consultants.",
  keywords: [
    "Immigration IT",
    "immigration website development",
    "immigration CRM",
    "visa consultancy software",
    "visa case management system",
    "client portal for immigration consultants",
    "immigration consultancy website",
    "visa agency CRM",
    "student visa CRM",
    "work visa CRM",
    "skilled migration CRM",
    "document checklist software",
  ],
  authors: [{ name: "ImmigrationIT" }],
  creator: "ImmigrationIT",
  publisher: "ImmigrationIT",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ImmigrationIT | IT Solutions for Immigration Consultancies",
    description:
      "Premium websites, CRM systems, client portals, visa case management tools, and automation solutions for immigration businesses.",
    url: "https://immigrationit.com",
    siteName: "ImmigrationIT",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImmigrationIT | IT Solutions for Immigration Consultancies",
    description:
      "Build a smarter digital system for your immigration consultancy with ImmigrationIT.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning> {children} </body>
    </html>
  );
}