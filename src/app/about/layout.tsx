import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Momento Magico - About Us",
  applicationName: "Momento Magico",
  keywords: ["Entertainment", "Event", "Music", "Sri Lanka"],
  publisher: "Momento Magico",
  category: "Entertainment",
  description:
    "Crafting unforgettable experiences through progressive music and immersive events. We bring global and local talent together to create magical moments that move minds and hearts.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  );
}
