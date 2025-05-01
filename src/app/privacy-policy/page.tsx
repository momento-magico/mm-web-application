"use client";

import { Header } from "../../components/Header";
import banner from "../../../public/assets/images/banner.avif";
import Image from "next/image";
import { Footer } from "../../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-[#0A0A0A] text-white  px-4 md:px-0">
      <Header />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 to-[#0A0A0A]/100 z-10" />
        <Image
          src={banner}
          fill
          priority
          alt="Concert stage with blue lights"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto py-32 px-4 md:px-0 max-w-4xl text-white/80 font-light text-lg leading-relaxed space-y-12">
        <h1 className="text-4xl md:text-6xl font-light text-white/20 tracking-widest uppercase text-center">
          Privacy Policy
        </h1>

        <p className="text-white/60 text-center text-sm">
          Effective Date: 2025/05/01
        </p>

        <p>
          {` Momento Magico (Pvt) Ltd. ("we", "us", or "our") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, and protect your information when you interact with us, whether
          through our website, social media, or event registrations.`}
        </p>

        {/* Section 1 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            1. Information We Collect
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Name, email address, and phone number</li>
            <li>Social media handles (when interacting via platforms)</li>
            <li>Payment or billing information (for ticketed events)</li>
            <li>
              Location data or device information (through website analytics)
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            2. How We Use Your Information
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Communicate event updates and promotions</li>
            <li>Process event registrations and payments</li>
            <li>Improve our website and event experiences</li>
            <li>Ensure the security and integrity of our platforms</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            3. Sharing Your Information
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Trusted third-party service providers (e.g., payment processors,
              email marketing tools)
            </li>
            <li>Authorities when required by law</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            4. Cookies & Tracking
          </h2>
          <p>
            Our website may use cookies to enhance your experience and track
            usage statistics via services like Google Analytics.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            5. Data Security
          </h2>
          <p>
            We take reasonable steps to protect your personal information from
            unauthorized access, disclosure, or misuse.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or want to make a
            request regarding your data, please contact us at:{" "}
            <a
              href="mailto:info@momentomagico.lk"
              className="text-white underline hover:text-white/60 transition"
            >
              info@momentomagico.lk
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
