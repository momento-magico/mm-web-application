import Image from "next/image";
import logo from '../../../public/assets/images/logo.png'
import Link from "next/link";
export const Header = () => {
  return (
    <header className="absolute top-2 left-0 w-full z-50 p-8">
      <div className="container mx-auto flex justify-between items-center">
        <Image
       
          src={logo}
          sizes="(max-width: 50px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={"momento logo"}        />
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="#events"
                className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
