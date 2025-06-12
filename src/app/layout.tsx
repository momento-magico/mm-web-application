import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Momento Magico | Dreamland 2025 - Progressive Music Festival Sri Lanka",
    applicationName: "Momento Magico",
    description:
        "Momento Magico is Sri Lanka’s premier platform for progressive and electronic music events. Discover Dreamland 2025 and join our movement shaping the underground music culture.",
    keywords: [
        "Momento Magico",
        "Momento Magico pvt ltd",
        "Momentomagico",
        "momentomagico.lk",
        "momentomagico sl",
        "momento magico lk",
        "momento magico sl",
        "Momento Magico music festival",
        "Dreamland 2025 Sri Lanka",
        "Progressive music Sri Lanka",
        "Live music events Colombo",
        "Electronic music festivals 2025",
        "Sri Lanka underground events",
        "Momento Magico Dreamland",
        "EDM Sri Lanka",
        "Nightlife Colombo 2025"
    ],
    publisher: "Momento Magico",
    category: "Entertainment",
};

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add needed weights
  variable: "--font-afacad", // optional for Tailwind CSS integration
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
          {/* Open Graph Tags */}
          <meta property="og:title" content="Momento Magico | Dreamland 2025 - Progressive Music Festival Sri Lanka" />
          <meta property="og:description" content="Experience Dreamland 2025 — Sri Lanka’s premier underground and progressive music event by Momento Magico. One stage. Pure energy." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.momentomagico.lk" />
          <meta property="og:image" content="https://www.momentomagico.lk/assets/images/logo.png" />
          <meta property="og:site_name" content="Momento Magico" />
          <meta property="og:locale" content="en_LK" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Momento Magico | Dreamland 2025 - Progressive Music Festival Sri Lanka" />
          <meta name="twitter:description" content="Join Sri Lanka's most immersive electronic music experience. Dreamland 2025 by Momento Magico brings together global and local talent." />
          <meta name="twitter:image" content="https://www.momentomagico.lk/assets/images/logo.png" />
          <meta name="twitter:site" content="@momentomagico.lk" />

          <!-- Canonical URL -->
          <link rel="canonical" href="https://www.momentomagico.lk">

              <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": "Organization",
                          "name": "Momento Magico",
                          "url": "https://www.momentomagico.lk",
                          "logo": "https://www.momentomagico.lk/assets/images/logo.png",
                          "founders": [
                              {
                                  "@type": "Person",
                                  "name": "Harindu Liyanage",
                                  "jobTitle": "Co-Founder",
                                  "sameAs": "https://www.linkedin.com/in/harindu-sulochana-liyanage"
                              },
                              {
                                  "@type": "Person",
                                  "name": "Nipuna Akalana Perera",
                                  "jobTitle": "Co-Founder",
                                  "sameAs": "https://www.linkedin.com/in/nipuna-akalana-perera"
                              }
                          ],
                          "sameAs": [
                              "https://www.facebook.com/momentomagico.lk",
                              "https://www.instagram.com/momentomagico.lk",
                              "https://www.tiktok.com/@momentomagico.lk",
                              "https://www.youtube.com/@MomentoMagico-lk",
                              "https://www.linkedin.com/company/momento-magico-lk"
                          ],
                          "contactPoint": {
                              "@type": "ContactPoint",
                              "email": "info@momentomagico.lk",
                              "contactType": "customer support"
                          },
                          "event": {
                              "@type": "MusicEvent",
                              "name": "Dreamland 2025",
                              "startDate": "2025-09-27T19:00:00+05:30",
                              "endDate": "2025-09-28T03:00:00+05:30",
                              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                              "eventStatus": "https://schema.org/EventScheduled",
                              "description": "An electrifying night of progressive music featuring international artists Elline & Backeer, alongside 8 of Sri Lanka's top progressive acts.",
                              "image": [
                                  "https://www.momentomagico.lk/assets/images/events/thamnail.webp"
                              ],
                              "performer": [
                                  {
                                      "@type": "PerformingGroup",
                                      "name": "Elline & Backeer"
                                  },
                                  {
                                      "@type": "PerformingGroup",
                                      "name": "Ultra"
                                  },
                                  {
                                      "@type": "PerformingGroup",
                                      "name": "Iman Cader"
                                  },
                                  {
                                      "@type": "PerformingGroup",
                                      "name": "Echo Draft"
                                  },
                                  {
                                      "@type": "PerformingGroup",
                                      "name": "Vegaz"
                                  },
                                  {
                                      "@type": "PerformingGroup",
                                      "name": "Kyotto"
                                  }
                              ],
                              "offers": {
                                  "@type": "Offer",
                                  "url": "https://www.spotseeker.lk/event/681e040594873",
                                  "price": "4000.00",
                                  "priceCurrency": "LKR",
                                  "validFrom": "2025-05-27T19:00:00+05:30",
                                  "availability": "https://schema.org/InStock"
                              },
                              "location": {
                                  "@type": "Place",
                                  "name": "Port City, Sri Lanka",
                                  "address": {
                                      "@type": "PostalAddress",
                                      "addressCountry": "LK"
                                  }
                              },
                              "organizer": {
                                  "@type": "Organization",
                                  "name": "Momento Magico",
                                  "url": "https://www.momentomagico.lk"
                              }
                          }
                      })
                  }}
              />
      </head>
      <body className={afacad.className}>
        {children}
        <div className="relative bottom-0 z-20">
          <Footer />
        </div>
      </body>
    </html>
  );
}
