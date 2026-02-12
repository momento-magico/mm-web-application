"use client";

import Link from "next/link";
import ChatButton from "./ChatButton";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white py-4 px-8 md:px-0">
      <ChatButton />
      <div className="container mx-auto">
        {/* Bottom Section */}
        <div className="md:pt-6 md:border-t md:border-white/10 text-center text-[6px] md:text-sm text-white">
          <p className="flex items-center justify-center space-x-4">
            <span>©{currentYear} MOMENTO MAGICO</span>
            <span>•</span>
            <Link
              href="terms-conditions"
              className="hover:text-white transition-colors"
            >
              TERMS & CONDITIONS
            </Link>
            <span>•</span>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              PRIVACY POLICY
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
