import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import Link from "next/link";
import { MobileNavbar } from "./MobileNavBar";
export const Header = () => {
  return (
    <header className="absolute top-2 left-0 w-full z-50 p-8  md:h-32">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" mb-8">
          <Image
            src={logo}
            className=" absolute w-12 h-12 md:w-16 md:h-16 object-cover z-99"
            sizes="(max-width: 50px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={"Momento Magico logo"}
          />
        </Link>
        <nav>
          <MobileNavbar />
          <ul className=" space-x-8 hidden md:flex">
            <li>
              <Link
                href="/"
                className="text-white text-md uppercase underline tracking-widest hover:opacity-70 transition-opacity"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white text-md uppercase underline tracking-widest hover:opacity-70 transition-opacity"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-white text-md uppercase underline tracking-widest hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <meta name="facebook-domain-verification" content="nqavpviwcplxpfh2q3o6jlvqbbr6w7" />
    </header>
  );
};
