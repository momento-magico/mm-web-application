"use client";

import { Header } from "../../components/Header";
import banner from "../../../public/assets/images/banner.avif";
import Image from "next/image";
import { Footer } from "../../components/Footer";

const TermsAndConditionsPage = () => {
  return (
    <main className="bg-[#0A0A0A] text-white px-4 md:px-0">
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
          Terms and Conditions
        </h1>

        <p className="text-white/60 text-center text-sm">
          Effective Date: 2025/05/01
        </p>

        <p>
          Welcome to Momento Magico (Pvt) Ltd. (“<strong>we</strong>”, “
          <strong>our</strong>”, or “<strong>us</strong>”). By accessing our
          website, registering for our events, or engaging with our services,
          you agree to comply with the following terms and conditions. Please
          read them carefully.
        </p>

        {/* Section 1 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            1. Event Attendance
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>Tickets</strong> purchased for our events are{" "}
              <strong>non-refundable</strong>, except in the case of event
              cancellation.
            </li>
            <li>
              We reserve the right to deny entry or remove individuals for{" "}
              <strong>disruptive or unsafe behavior</strong>.
            </li>
            <li>
              Attendees must comply with all venue rules, local laws, and{" "}
              <strong>safety guidelines</strong>.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            2. Age Restrictions
          </h2>
          <p>
            Some events may have <strong>minimum age requirements</strong>{" "}
            (e.g., 18+ or 21+). You agree not to register or attend if you do
            not meet the age criteria.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            3. Intellectual Property
          </h2>
          <p>
            All content, branding, media, and materials provided by Momento
            Magico are protected by <strong>copyright</strong> and{" "}
            <strong>intellectual property laws</strong>. You may not reproduce
            or use our content without prior written permission.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            4. Photography & Media Consent
          </h2>
          <p>
            By attending our events, you consent to being{" "}
            <strong>photographed or filmed</strong>. We may use these materials
            for promotional purposes across digital and print platforms.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            5. Limitation of Liability
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Momento Magico is not responsible for:</li>
            <ul className="pl-6">
              <li>Personal injury, loss, or damage incurred at events</li>
              <li>Technical issues on our website or social platforms</li>
              <li>Third-party services or vendors used at events</li>
            </ul>
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">6. Privacy</h2>
          <p>
            By using our services, you also agree to our{" "}
            <a
              href="/privacy-policy"
              className="text-white underline hover:text-white/60 transition"
            >
              <strong>Privacy Policy</strong>
            </a>
            . We value your privacy and take appropriate measures to safeguard
            your data.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">
            7. Modifications
          </h2>
          <p>
            We may update these terms at any time without prior notice.
            Continued use of our services implies acceptance of the current
            version of these terms.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-xl text-white mb-4 font-medium">8. Contact</h2>
          <p>
            If you have any questions or concerns regarding these terms, contact
            us at:{" "}
            <a
              href="mailto:info@momentomagico.lk"
              className="text-white underline hover:text-white/60 transition"
            >
              <i className="fas fa-envelope mr-2"></i>info@momentomagico.lk
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default TermsAndConditionsPage;
