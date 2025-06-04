import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="md:hidden absolute top-4 left-0 right-0  shadow-md z-50">
      <div className="flex items-center justify-end px-4 py-3">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className=" absolute right-6 h-6 w-6 z-99" color="white" />
          ) : (
            <Menu className="h-6 w-6" color="white" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className=" absolute top-0 right-0 left-0 pt-18 px-4 py-2 pb-4 bg-[#0A0A0A]/50 text-white">
          <ul className="space-y-2">
            <li className="flex justify-end">
              <Link
                href="/#events"
                className="block py-2 px-4 text-lg rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
            </li>
            <li className="flex justify-end">
              <Link
                href="/about"
                className="block py-2 px-4 text-lg rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="flex justify-end">
              <Link
                href="/#contact"
                className="block py-2 px-4 text-lg rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
