"use client";

import React, { useState } from "react";
import { MessageCircle, Plus } from "lucide-react";
import { motion } from "framer-motion";

const shakeKeyframes = {
  x: [0, -6, 6, -4, 4, -2, 2, 0],
};

const shakeTransition = {
  repeat: Infinity,
  duration: 1.2,
  ease: "easeInOut",
  delay: 3, // optional: delay before first shake
};
const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed bottom-18 md:bottom-6 right-6 z-50 ">
      {/* Social Options */}
      <div
        className={`flex flex-col-reverse gap-3 mb-3 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/+94762626554"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-600 text-white rounded-full pr-1 p-3 shadow-lg shadow-green-900/20 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-900/30"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
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
                <path d="M12.01172,2c-5.506,0 -9.98823,4.47838 -9.99023,9.98438c-0.001,1.76 0.45998,3.47819 1.33398,4.99219l-1.35547,5.02344l5.23242,-1.23633c1.459,0.796 3.10144,1.21384 4.77344,1.21484h0.00391c5.505,0 9.98528,-4.47937 9.98828,-9.98437c0.002,-2.669 -1.03588,-5.17841 -2.92187,-7.06641c-1.886,-1.887 -4.39245,-2.92673 -7.06445,-2.92773zM12.00977,4c2.136,0.001 4.14334,0.8338 5.65234,2.3418c1.509,1.51 2.33794,3.51639 2.33594,5.65039c-0.002,4.404 -3.58423,7.98633 -7.99023,7.98633c-1.333,-0.001 -2.65341,-0.3357 -3.81641,-0.9707l-0.67383,-0.36719l-0.74414,0.17578l-1.96875,0.46484l0.48047,-1.78516l0.2168,-0.80078l-0.41406,-0.71875c-0.698,-1.208 -1.06741,-2.58919 -1.06641,-3.99219c0.002,-4.402 3.58528,-7.98437 7.98828,-7.98437zM8.47656,7.375c-0.167,0 -0.43702,0.0625 -0.66602,0.3125c-0.229,0.249 -0.875,0.85208 -0.875,2.08008c0,1.228 0.89453,2.41503 1.01953,2.58203c0.124,0.166 1.72667,2.76563 4.26367,3.76563c2.108,0.831 2.53614,0.667 2.99414,0.625c0.458,-0.041 1.47755,-0.60255 1.68555,-1.18555c0.208,-0.583 0.20848,-1.0845 0.14648,-1.1875c-0.062,-0.104 -0.22852,-0.16602 -0.47852,-0.29102c-0.249,-0.125 -1.47608,-0.72755 -1.70508,-0.81055c-0.229,-0.083 -0.3965,-0.125 -0.5625,0.125c-0.166,0.25 -0.64306,0.81056 -0.78906,0.97656c-0.146,0.167 -0.29102,0.18945 -0.54102,0.06445c-0.25,-0.126 -1.05381,-0.39024 -2.00781,-1.24024c-0.742,-0.661 -1.24267,-1.47656 -1.38867,-1.72656c-0.145,-0.249 -0.01367,-0.38577 0.11133,-0.50977c0.112,-0.112 0.24805,-0.2915 0.37305,-0.4375c0.124,-0.146 0.167,-0.25002 0.25,-0.41602c0.083,-0.166 0.04051,-0.3125 -0.02149,-0.4375c-0.062,-0.125 -0.54753,-1.35756 -0.76953,-1.85156c-0.187,-0.415 -0.3845,-0.42464 -0.5625,-0.43164c-0.145,-0.006 -0.31056,-0.00586 -0.47656,-0.00586z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-2 origin-left transition-all duration-300 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs">
            WhatsApp
          </span>
        </a>
        {/* Messenger */}
        <a
          href="https://m.me/momentomagico.lk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-600 text-white rounded-full pr-1 p-3 shadow-lg shadow-blue-900/20 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-900/30"
          aria-label="Chat on Messenger"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
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
                <path d="M12,2c-5.514,0 -10,4.262 -10,9.5c0,2.545 1.088,4.98748 3,6.77148v4.3457l4.08008,-2.03906c0.959,0.279 1.93992,0.42188 2.91992,0.42188c5.514,0 10,-4.262 10,-9.5c0,-5.238 -4.486,-9.5 -10,-9.5zM12,4c4.411,0 8,3.365 8,7.5c0,4.135 -3.589,7.5 -8,7.5c-0.789,0 -1.58433,-0.1158 -2.36133,-0.3418l-0.75195,-0.21875l-0.70117,0.34961l-1.18555,0.59375v-1.11133v-0.86914l-0.63672,-0.5918c-1.502,-1.402 -2.36328,-3.33855 -2.36328,-5.31055c0,-4.135 3.589,-7.5 8,-7.5zM11,9l-5,5l4.5,-2l2.5,2l5,-5l-4.5,2z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-2 origin-left transition-all duration-300 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs">
            Messenger
          </span>
        </a>
        {/* Instagram */}
        <a
          href="https://ig.me/m/momentomagico.lk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-full pr-1 p-3 shadow-lg shadow-purple-900/20 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-900/30"
          aria-label="Chat on Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
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
                <path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-2 origin-left transition-all duration-300 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs">
            Instagram
          </span>
        </a>
      </div>
      {/* Main Chat Button */}
      <motion.button
        onClick={toggleChat}
        style={{ backfaceVisibility: "hidden" }}
        initial={{ scale: 0.4 }}
        animate={{ scale: 1.4 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`will-change-transform flex items-center justify-center w-14 h-14 rounded-full focus:outline-none transform transition-all duration-300 cursor-pointer
          ${
            isOpen
              ? "bg-red-600 rotate-45 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
              : "bg-gray-800 hover:bg-gray-700 hover:scale-110 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
          }`}
        aria-label={isOpen ? "Close chat options" : "Open chat options"}
      >
        {isOpen ? (
          <Plus size={28} className="text-white" />
        ) : (
          <MessageCircle size={28} className="text-white" />
        )}
      </motion.button>
    </div>
  );
};
export default ChatButton;
