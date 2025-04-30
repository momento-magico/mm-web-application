import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Momento Magico | Progressive Music Events Sri Lanka",
  description:
    "Momento Magico curates unforgettable progressive music experiences in Sri Lanka, uniting international and local artists on one immersive stage.",
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
