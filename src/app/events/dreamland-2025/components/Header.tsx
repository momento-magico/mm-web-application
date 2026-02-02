import React from 'react';
export function Header() {
  return <header className="w-full py-8 px-8 md:px-16">
      <div className="flex justify-between items-center">
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="#events" className="text-sm tracking-widest hover:text-gray-300 transition-colors">
                EVENTS
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm tracking-widest hover:text-gray-300 transition-colors">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm tracking-widest hover:text-gray-300 transition-colors">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>;
}