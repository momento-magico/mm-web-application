"use client";

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";

const SENDER_EMAIL = "info@momentomagico.lk";
export const ContactUs = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if (name && email && message) {
      const subject = encodeURIComponent(`New message from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${SENDER_EMAIL}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      const a = document.createElement("a");
      a.href = mailtoLink;
      a.target = "_blank";
      a.click();
      a.remove();
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    }
  };
  return (
    <div className="bg-[#0A0A0A] text-white py-8 md:py-20  px-8 md:px-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 "
      >
        {/* Left Content */}
        <div>
          <h2 className=" text-3xl md:text-4xl font-light mb-6">{`Let's Make Magic`}</h2>
          <p className="text-gray-400 mb-12 max-w-md text-md">
            {`Got questions, ideas, or just want to say hey? We'd love to hear
        from you. Whether you're a fan, artist, vendor, or fellow dreamer,
        Dreamland is all about connection. Drop us a message and let's
        keep the energy flowing before, during, and long after the last
        beat drops.`}
          </p>
          {/* Social Icons */}
          <div className="flex space-x-6">
            <Link
              href="https://facebook.com/momentomagico.lk"
              target="_blank"
              aria-label="Welcome to the official Facebook page of Momento Magico! Follow us for the latest updates, exclusive content, and magical moments!"
              className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/momentomagico.lk"
              aria-label="Welcome to the official Instagram of Momento Magico! Follow us on Instagram for behind-the-scenes content, artist highlights, and exclusive festival updates!"
              target="_blank"
              className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@MomentoMagico-lk"
              aria-label="Welcome to the official YouTube channel of Momento Magico! We capture unforgettable memories. Subscribe for client stories, event highlights, and exclusive behind-the-scenes content."
              target="_blank"
              className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <Youtube size={20} />
            </Link>
            <Link
              href="https://www.tiktok.com/@momentomagico.lk"
              target="_blank"
              aria-label="Welcome to the official Tiktok of Momento Magico! Discover the magic behind every moment. Explore our latest events, exclusive content, and special offers."
              className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM6,5h12c0.56503,0 1,0.43497 1,1v12c0,0.56503 -0.43497,1 -1,1h-12c-0.56503,0 -1,-0.43497 -1,-1v-12c0,-0.56503 0.43497,-1 1,-1zM12,7v7c0,0.56503 -0.43497,1 -1,1c-0.56503,0 -1,-0.43497 -1,-1c0,-0.56503 0.43497,-1 1,-1v-2c-1.64497,0 -3,1.35503 -3,3c0,1.64497 1.35503,3 3,3c1.64497,0 3,-1.35503 3,-3v-3.76758c0.61615,0.43892 1.25912,0.76758 2,0.76758v-2c-0.04733,0 -0.73733,-0.21906 -1.21875,-0.63867c-0.48142,-0.41961 -0.78125,-0.94634 -0.78125,-1.36133z"></path>
                  </g>
                </g>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/momento-magico-lk"
              target="_blank"
              aria-label="Welcome to the official Linkedin Page of Momento Magico!Follow us to stay updated on our latest projects, behind-the-scenes insights, and industry trends."
              className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
        {/* Right Form */}
        <div id="contact">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="NAME"
              ref={nameRef}
              className="w-full bg-transparent border border-white/20 py-4 px-6 text-sm capitalize tracking-wider focus:outline-none focus:border-white/40 transition-colors rounded-full"
            />
            <input
              type="email"
              ref={emailRef}
              placeholder="EMAIL"
              className="w-full bg-transparent border border-white/20 py-4 px-6 text-sm tracking-wider focus:outline-none focus:border-white/40 transition-colors rounded-full"
            />
            <textarea
              placeholder="MESSAGE"
              ref={messageRef}
              rows={6}
              className="w-full bg-transparent border border-white/20 py-4 px-6 text-sm tracking-wider focus:outline-none focus:border-white/40 transition-colors resize-none rounded-3xl"
            ></textarea>
            <button className="border-2 border-white/80 w-full bg-white/10 text-white py-4 text-sm uppercase tracking-wider hover:bg-white/20 transition-colors font-bold rounded-full h-12 md:h-auto flex items-center justify-center cursor-pointer">
              Submit Your Request
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
