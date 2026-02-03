import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Momento Magico | Dreamland 2026 - Progressive Music Festival Sri Lanka",
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
    "Dreamland 2026 Sri Lanka",
    "Progressive music Sri Lanka",
    "Live music events Colombo",
    "Electronic music festivals 2026",
    "Sri Lanka underground events",
    "Momento Magico Dreamland",
    "EDM Sri Lanka",
    "Nightlife Colombo 2026",
  ],
  publisher: "Momento Magico",
  category: "Entertainment",
};

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add needed weights
  variable: "--font-afacad", // optional for Tailwind CSS integration
});

const mainSchema = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  name: "Dreamland 2025",
  startDate: "2026-08-15T16:30:00+05:30",
  endDate: "2026-08-16T08:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  description:
    "Dreamland 2025 is Sri Lanka's biggest progressive music festival featuring world-class artists like Shai T, Elline & Backeer, and a strong local lineup. An unforgettable night of music, lights, and energy awaits at Port City, Colombo.",
  image: [
    "https://lh3.googleusercontent.com/N3lqrOEQVzmu8r0-SdiVlXHO48HdJOJNDV_YgiIAcnfs98-jllouTd_HC8ghlCtUT0gH2l5boPOqleUfzw=s265-w265-h265",
  ],
  location: {
    "@type": "Place",
    name: "Port City, Sri Lanka",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.927193715220615,
      longitude: 79.82728510674598,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Momento Magico",
    url: "https://www.momentomagico.lk",
    logo: "https://www.momentomagico.lk/assets/images/logo.png",
  },
  performer: [
    { "@type": "MusicGroup", name: "Shai T", roleName: "Headliner" },
    { "@type": "MusicGroup", name: "Elline & Backeer", roleName: "Headliner" },
    { "@type": "MusicGroup", name: "Ultra" },
    { "@type": "MusicGroup", name: "Iman Cader" },
    { "@type": "MusicGroup", name: "Echo Draft" },
    { "@type": "MusicGroup", name: "Vegaz" },
    { "@type": "MusicGroup", name: "Kyotto" },
    { "@type": "MusicGroup", name: "Keshana", roleName: "Opening B2B" },
    { "@type": "MusicGroup", name: "Karo", roleName: "Opening B2B" },
    { "@type": "MusicGroup", name: "Echo", roleName: "B2B with Shai T" },
    { "@type": "MusicGroup", name: "Shai T", roleName: "B2B with Echo" },
    { "@type": "MusicGroup", name: "Eline", roleName: "B2B with Backeer" },
    { "@type": "MusicGroup", name: "Backeer", roleName: "B2B with Eline" },
  ],
  offers: {
    "@type": "Offer",
    url: "https://www.spotseeker.lk/event/681e040594873",
    price: "4000.00",
    priceCurrency: "LKR",
    validFrom: "2025-05-27T19:00:00+05:30",
    availability: "https://schema.org/InStock",
  },
  subEvent: [
    {
      "@type": "MusicEvent",
      name: "Opening Set by Keshana and Karo",
      description:
        "Kick off Dreamland 2025 with an energetic 2-hour opening session by Keshana and Karo.",
      startDate: "2026-08-15T16:30:00+05:30",
      endDate: "2026-08-16T18:30:00+05:30",
      image: [
        "https://lh3.googleusercontent.com/Vp8UGzidIhMqDAVUz-8aOLGXhJuib6dEEIeuhXtz321NvLn-Ehkgwds8GO0fIZtrLhjaSJAhfagfAEpjPQ=s265-w265-h265",
      ],
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      performer: [
        { "@type": "MusicGroup", name: "Keshana" },
        { "@type": "MusicGroup", name: "Karo" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.spotseeker.lk/event/681e040594873",
        price: "4000.00",
        priceCurrency: "LKR",
        validFrom: "2025-05-27T19:00:00+05:30",
        availability: "https://schema.org/InStock",
      },
      location: {
        "@type": "Place",
        name: "Port City, Sri Lanka",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.927193715220615,
          longitude: 79.82728510674598,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "LK",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Momento Magico",
        url: "https://www.momentomagico.lk",
      },
    },
    {
      "@type": "MusicEvent",
      name: "Echo B2B Shai T",
      description:
        "An intense 3-hour back-to-back session with Echo and Shai T.",
      startDate: "2026-08-15T02:00:00+05:30",
      endDate: "2026-08-16T05:00:00+05:30",
      image: [
        "https://lh3.googleusercontent.com/OZ6-vW4XwYC_Vtufgm_0X_AFx0PB2N8ZqgPEDvAQHxDUb-blIGZuWFAqFKbzmqfDurvDd0j-cHukUGHz6g=s265-w265-h265",
      ],
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      performer: [
        { "@type": "MusicGroup", name: "Echo" },
        { "@type": "MusicGroup", name: "Shai T" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.spotseeker.lk/event/681e040594873",
        price: "4000.00",
        priceCurrency: "LKR",
        validFrom: "2025-05-27T19:00:00+05:30",
        availability: "https://schema.org/InStock",
      },
      location: {
        "@type": "Place",
        name: "Port City, Sri Lanka",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.927193715220615,
          longitude: 79.82728510674598,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "LK",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Momento Magico",
        url: "https://www.momentomagico.lk",
      },
    },
    {
      "@type": "MusicEvent",
      name: "Eline & Backeer",
      description:
        "A thrilling 2-hour session by the renowned duo Eline & Backeer.",
      startDate: "2026-08-15T10:00:00+05:30",
      endDate: "2026-08-15T12:00:00+05:30",
      image: [
        "https://lh3.googleusercontent.com/ejHQnFpxXLZA6fOf_XAcdR4LRxtn0EAy-2FBF1NNf1WHsURpuDigAj2S6BE2K41UpK4HK_0-3KxYbw-V6g=s265-w265-h265",
      ],
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      performer: [
        { "@type": "MusicGroup", name: "Eline" },
        { "@type": "MusicGroup", name: "Backeer" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.spotseeker.lk/event/681e040594873",
        price: "4000.00",
        priceCurrency: "LKR",
        validFrom: "2025-05-27T19:00:00+05:30",
        availability: "https://schema.org/InStock",
      },
      location: {
        "@type": "Place",
        name: "Port City, Sri Lanka",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.927193715220615,
          longitude: 79.82728510674598,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "LK",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Momento Magico",
        url: "https://www.momentomagico.lk",
      },
    },
  ],
};

const videoSchema = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Dreamland Intro",
    description:
      "Introduction video for Dreamland event hosted by Momento Magico.",
    thumbnailUrl:
      "https://www.momentomagico.lk/assets/images/events/thumbnail.webp",
    uploadDate: "2025-06-12",
    contentUrl:
      "https://firebasestorage.googleapis.com/v0/b/thakshara-3c6c3.appspot.com/o/momento%2Fdreamland_intro.mp4?alt=media&token=f901c154-3776-458d-9582-880ffc652db8",
    embedUrl:
      "https://firebasestorage.googleapis.com/v0/b/thakshara-3c6c3.appspot.com/o/momento%2Fdreamland_intro.mp4?alt=media&token=f901c154-3776-458d-9582-880ffc652db8",
    publisher: {
      "@type": "Organization",
      name: "Momento Magico",
      logo: {
        "@type": "ImageObject",
        url: "https://www.momentomagico.lk/assets/images/logo.png",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Who will Play B2B set with Shai T",
    description:
      "Preview video highlighting the B2B set lineup with Shai T at Dreamland 2025.",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/ggms/AF1QipPAg-tsmd0llxubLB465vFzC8B7rAgkwC3Zi9N8=m18",
    uploadDate: "2025-06-15",
    contentUrl:
      "https://lh3.googleusercontent.com/ggms/AF1QipPAg-tsmd0llxubLB465vFzC8B7rAgkwC3Zi9N8=m18",
    embedUrl:
      "https://lh3.googleusercontent.com/ggms/AF1QipPAg-tsmd0llxubLB465vFzC8B7rAgkwC3Zi9N8=m18",
    publisher: {
      "@type": "Organization",
      name: "Momento Magico",
      logo: {
        "@type": "ImageObject",
        url: "https://www.momentomagico.lk/assets/images/logo.png",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Stage Design 3D Walkthrough",
    description:
      "A 3D walkthrough video showing the immersive stage design for Dreamland 2025.",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/ggms/AF1QipNnFu_DhISVW8tWa7SHvonlATqVCRp4-O9_yDtw=m18",
    uploadDate: "2025-06-18",
    contentUrl:
      "https://lh3.googleusercontent.com/ggms/AF1QipNnFu_DhISVW8tWa7SHvonlATqVCRp4-O9_yDtw=m18",
    embedUrl:
      "https://lh3.googleusercontent.com/ggms/AF1QipNnFu_DhISVW8tWa7SHvonlATqVCRp4-O9_yDtw=m18",
    publisher: {
      "@type": "Organization",
      name: "Momento Magico",
      logo: {
        "@type": "ImageObject",
        url: "https://www.momentomagico.lk/assets/images/logo.png",
      },
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Momento Magico | Dreamland 2025 - Progressive Music Festival Sri Lanka"
        />
        <meta
          property="og:description"
          content="Experience Dreamland 2025 — Sri Lanka’s premier underground and progressive music event by Momento Magico. One stage. Pure energy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.momentomagico.lk" />
        <meta
          property="og:image"
          content="https://www.momentomagico.lk/assets/images/logo.png"
        />
        <meta property="og:site_name" content="Momento Magico" />
        <meta property="og:locale" content="en_LK" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Momento Magico | Dreamland 2025 - Progressive Music Festival Sri Lanka"
        />
        <meta
          name="twitter:description"
          content="Join Sri Lanka's most immersive electronic music experience. Dreamland 2025 by Momento Magico brings together global and local talent."
        />
        <meta
          name="twitter:image"
          content="https://www.momentomagico.lk/assets/images/logo.png"
        />
        <meta name="twitter:site" content="@momentomagico.lk" />

        <link rel="canonical" href="https://www.momentomagico.lk" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mainSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
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
