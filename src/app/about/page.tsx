"use client";

import { Header } from "../../components/Header";
import banner from "../../../public/assets/images/banner.jpeg"
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Sparkles, Music, Rocket } from "lucide-react";

const features = [
  {
    title: "Championing Local Artists",
    description:
      "We spotlight Sri Lanka’s best progressive talent, elevating them for the global stage.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    title: "Global-Standard Production",
    description:
      "Expect world-class stage design, immersive lighting, and pristine sound that rivals top global festivals.",
    icon: <Sparkles className="w-6 h-6 text-white" />,
  },
  {
    title: "Community-Driven Culture",
    description:
      "More than an event — it’s a movement fueled by artists, fans, and creators alike.",
    icon: <Music className="w-6 h-6 text-white" />,
  },
  {
    title: "Vision Beyond One Night",
    description:
      "From workshops to regional shows, we’re planting seeds for a long-term impact on the scene.",
    icon: <Rocket className="w-6 h-6 text-white" />,
  },
];

const FeatureGrid = () => {
  return (
    <section className="mt-20">
      <h2 className="text-2xl md:text-3xl text-white uppercase tracking-wide font-light mb-10 text-center">
        Why Momento Magico is the Future of Progressive Music in Asia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-white/10 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-white/70 font-light leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden  px-4 md:px-0">
      <Header />

      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src={banner}
          fill
          priority
          alt="Concert stage with blue lights"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 backdrop-blur-sm" />
      </div>

      <div className="">
        {/* Hero Spacer + Headline */}
        <section className=" absolute inert:0 w-screen top-32 text-center z-10 pr-8 md:pr-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-light text-white/20 uppercase tracking-wider"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-white/70 mt-6 text-lg md:text-xl max-w-3xl mx-auto font-light"
          >
            Discover the story behind Momento Magico and why we’re shaping the
            next chapter of progressive music in Asia.
          </motion.p>
        </section>
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 md:px-0 pb-12 md:pb-32 mt-90"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 md:p-16 max-w-5xl mx-auto space-y-20 border border-white/10">
            {/* What is Momento Magico */}
            <div>
              <h2 className="text-2xl md:text-3xl text-white uppercase tracking-wide font-light mb-4">
                What is Momento Magico?
              </h2>
              <p className="text-white/80 text-lg leading-relaxed font-light">
                Momento Magico is Sri Lanka’s first immersive music experience
                dedicated to progressive electronic music. More than a concert,
                it’s a curated celebration of deep, hypnotic soundscapes that
                transport you beyond the ordinary. Rooted in passion and built
                on community, Momento Magico brings together the finest elements
                of underground culture — music, unity, and artistic freedom.
              </p>
            </div>

            {/* Why We're the Future */}
            <FeatureGrid />

            {/* Call to Join */}
            <div>
              <h2 className="text-2xl md:text-3xl text-white uppercase tracking-wide font-light mb-4">
                Join the Journey
              </h2>
              <p className="text-white/80 text-lg leading-relaxed font-light">
                This is your invitation to be part of something truly magical.
                Momento Magico isn’t just a festival — it’s a signal to the
                world that Asia is ready to shape the future of progressive
                music.
              </p>
              <p className="mt-6 italic text-white/60">
                Stay tuned for announcements, behind-the-scenes content, and
                more as we gear up for something unforgettable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutPage;
