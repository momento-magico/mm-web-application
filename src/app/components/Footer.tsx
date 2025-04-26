import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-light mb-6">{`Let's Make Magic`}</h2>
            <p className="text-gray-400 mb-12 max-w-md">
              {`Got questions, ideas, or just want to say hey? We'd love to hear
              from you. Whether you're a fan, artist, vendor, or fellow dreamer,
              Dreamland is all about connection. Drop us a message and let's
              keep the energy flowing before, during, and long after the last
              beat drops.`}
            </p>
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          {/* Right Form */}
          <div id="contact">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="NAME"
                className="w-full bg-transparent border border-white/20 py-4 px-6 text-sm uppercase tracking-wider focus:outline-none focus:border-white/40 transition-colors rounded-full"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full bg-transparent border border-white/20 py-4 px-6 text-sm uppercase tracking-wider focus:outline-none focus:border-white/40 transition-colors rounded-full"
              />
              <textarea
                placeholder="MESSAGE"
                rows={6}
                className="w-full bg-transparent border border-white/20 py-4 px-6 text-sm uppercase tracking-wider focus:outline-none focus:border-white/40 transition-colors resize-none rounded-3xl"
              ></textarea>
              <button className="border-2 border-white/80 w-full bg-white/10 text-white py-4 text-sm uppercase tracking-wider hover:bg-white/20 transition-colors font-bold rounded-full">
                Submit Your Request
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-white">
          <p className="flex items-center justify-center space-x-4">
            <span>©2025 MOMENTO MAGICO</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              TERMS & CONDITIONS
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
