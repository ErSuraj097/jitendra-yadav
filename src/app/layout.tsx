import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://jitendrayadav.in"),
  title: "Shri Jitendra Kumar Yadav | Official Digital Public Service & Portfolio Portal",
  description: "Official portal of Shri Jitendra Kumar Yadav, District Panchayat Member, Uttar Pradesh (Samajwadi Party). Public service initiatives, development work portfolio, news updates, gallery, and citizen grievance redressal.",
  keywords: ["Jitendra Kumar Yadav", "District Panchayat Member", "Uttar Pradesh", "Samajwadi Party", "Public Service", "Grievance Portal", "Development Works"],
  openGraph: {
    title: "Shri Jitendra Kumar Yadav | Official Public Service & Portfolio Portal",
    description: "Official portal showcasing public service initiatives, development projects, news updates, and citizen grievance redressal.",
    url: "https://jitendrayadav.in",
    siteName: "Shri Jitendra Kumar Yadav Portal",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Shri Jitendra Kumar Yadav",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Person JSON-LD (unchanged)
  // Schema.org Person JSON-LD
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shri Jitendra Kumar Yadav",
    "jobTitle": "District Panchayat Member",
    "worksFor": {
      "@type": "GovernmentOrganization",
      "name": "District Panchayat, Uttar Pradesh"
    },
    "affiliation": {
      "@type": "PoliticalParty",
      "name": "Samajwadi Party"
    },
    "telephone": "+91 99353 96483",
    "sameAs": [
      "https://facebook.com/share/19Ny5PHAJ2",
      "https://instagram.com/socialist_jitendrayadav"
    ]
  };

  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
