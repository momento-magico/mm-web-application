import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Momento Magico",
  description:
    "Crafting unforgettable experiences through progressive music and immersive events. We bring global and local talent together to create magical moments that move minds and hearts.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Momento Magico",
              url: "https://momentomagico.lk",
              sameAs: [
                "https://www.instagram.com/momentomagico.lk",
                "https://www.facebook.com/momentomagico.lk",
                "https://www.youtube.com/@momentomagico.lk",
              ],
            }),
          }}
        />
      </head>
      <body className={afacad.className}>{children}</body>
    </html>
  );
}
