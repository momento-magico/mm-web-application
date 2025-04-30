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
      <body>{children}</body>
    </html>
  );
}
