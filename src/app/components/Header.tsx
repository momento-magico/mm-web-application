import Image from "next/image";
import React from "react";
import logo from '../../../public/assets/images/logo.png'
export const Header = () => {
  return (
    <header className="absolute top-2 left-0 w-full z-10 p-8">
      <div className="container mx-auto flex justify-between items-center">
        <Image
       
          src={logo}
          sizes="(max-width: 50px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={"momento logo"}        />
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#events"
                className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
