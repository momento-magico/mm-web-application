"use client";


import ChatButton from "./ChatButton";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-8 md:py-4 px-8 md:px-0">
      <ChatButton />
      <div className="container mx-auto">
        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/10 text-center text-[8px] md:text-sm text-white">
          <p className="flex items-center justify-center space-x-4">
            <span>©2025 MOMENTO MAGICO</span>
            <span>•</span>
            <a href="terms-conditions" className="hover:text-white transition-colors">
              TERMS & CONDITIONS
            </a>
            <span>•</span>
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
