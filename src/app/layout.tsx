import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Momento Magico",
  description: "Crafting unforgettable experiences through progressive music and immersive events. We bring global and local talent together to create magical moments that move minds and hearts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Momento Magico",
              url: "https://momentomagico.lk",
              sameAs: [
                "https://www.instagram.com/momentomagico",
                "https://www.facebook.com/momentomagico",
                "https://www.youtube.com/@momentomagico",
              ],
            }),
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
