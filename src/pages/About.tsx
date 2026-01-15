import React, { useState } from "react";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const About: React.FC = () => {
  // State for the Expertise Accordion
  const [openExpertise, setOpenExpertise] = useState<number | null>(0);

  const expertiseItems = [
    {
      title: "Numerology",
      desc: "Understanding life patterns through numbers.",
    },
    {
      title: "Wealth Astrology",
      desc: "Identify your money patterns and abundance.",
    },
    {
      title: "Life Guidance",
      desc: "Gain clarity and balance for daily decisions.",
    },
    {
      title: "Career Guidance",
      desc: "Align your professional work with purpose.",
    },
    {
      title: "Astrology",
      desc: "Insights into planetary timing and influence.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO / ABOUT INTRO */}
      <motion.div className="overflow-x-hidden">
        <div className="relative min-h-screen overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/About_bg.png)" }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 min-h-screen flex flex-col lg:grid lg:grid-cols-2 px-4 sm:px-6 lg:px-12">
            {/* 1. DESKTOP IMAGE (Now placed first in code for left alignment) */}
            <div className="hidden lg:flex relative h-[100vh] items-end justify-center">
              <img
                src="/GaurabNPP.png"
                alt="Gaurab Nerpagar - Numerology Expert"
                className="object-contain object-bottom"
                style={{
                  height: "clamp(500px, 85vh, 90vh)",
                  width: "auto",
                  maxWidth: "clamp(400px, 45vw, 700px)",
                }}
              />
            </div>

            {/* 2. TEXT CONTENT (Now on the right on desktop) */}
            <motion.div
              className="text-white space-y-4 max-w-xl mx-auto lg:mx-0 self-center pt-20 lg:pt-0"
              initial={{ opacity: 0, x: -40 }} // Changed x to -40 so it slides IN from the center/left
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h1 className="font-bebas text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] tracking-tight">
                  GAURAB NERPAGAR
                </h1>
                <p className="font-bebas text-[clamp(1.5rem,4vw,3rem)] text-white/90 mt-1">
                  NUMEROLOGY GUIDE
                </p>
              </div>

              <p className="font-matter text-base lg:text-xl">
                I’m a numerology practitioner dedicated to helping individuals
                find clarity, balance, and deeper understanding through the
                language of numbers. My approach blends intuitive insight with
                thoughtful guidance, making each experience meaningful and easy
                to connect with. Through personalized readings and conscious
                offerings, I aim to create a calm, supportive space where
                clarity unfolds naturally and purpose feels within reach.
              </p>
            </motion.div>

            {/* 3. MOBILE IMAGE (Kept at bottom for mobile view) */}
            <div className="relative w-full flex justify-center items-end mt-auto h-[50vh] sm:h-[60vh] lg:hidden">
              <img
                src="/GaurabNPP.png"
                alt="Gaurab Nerpagar"
                className="object-contain w-full max-w-[280px] sm:max-w-[360px]"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ABOUT CARDS SECTION */}
      <motion.section
        className="relative flex items-center overflow-hidden py-16 lg:py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-bebas text-[clamp(2rem,5vw,3rem)] text-[#FE7028] tracking-wide">
                OUR PREMIUM SERVICES
              </h2>
            </div>

            {/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {/* CARD 1 */}
              <div
                className="relative w-full max-w-[436.77px] min-h-[380px] sm:min-h-[444px] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center p-6 sm:p-10 flex flex-col items-start justify-start gap-4 text-[#5A5A5A]"
                style={{
                  backgroundImage: "url(/About_cards.png)",
                  aspectRatio: "436.77 / 444",
                }}
              >
                <img
                  src="/A-Icon1o.png"
                  alt="Belief"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <h3 className="font-bebas text-3xl sm:text-4xl text-left">
                  BELIEF
                </h3>
                <p className="font-matter text-base sm:text-lg text-left leading-relaxed">
                  I believe that numbers are more than calculations — they are
                  subtle guides that reflect our inner patterns, strengths, and
                  life cycles. When understood with awareness, they offer
                  clarity rather than limitation..
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="relative w-full max-w-[436.77px] min-h-[380px] sm:min-h-[444px] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center p-6 sm:p-10 flex flex-col items-start justify-start gap-4 text-[#5A5A5A]"
                style={{
                  backgroundImage: "url(/About_cards.png)",
                  aspectRatio: "436.77 / 444",
                }}
              >
                <img
                  src="/A-Icon2o.png"
                  alt="Guidance"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <h3 className="font-bebas text-3xl sm:text-4xl text-left">
                  GUIDANCE
                </h3>
                <p className="font-matter text-base sm:text-lg text-left leading-relaxed">
                  My approach is grounded, positive, and empowering. I focus on
                  insight rather than prediction, helping clients feel supported
                  instead of overwhelmed. My work is guided by balance,
                  intention, and conscious awareness.
                </p>
              </div>

              {/* CARD 3 */}
              <div
                className="relative w-full max-w-[436.77px] min-h-[380px] sm:min-h-[444px] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center p-6 sm:p-10 flex flex-col items-start justify-start gap-4 text-[#5A5A5A]"
                style={{
                  backgroundImage: "url(/About_cards.png)",
                  aspectRatio: "436.77 / 444",
                }}
              >
                <img
                  src="/A-Icon3o.png"
                  alt="Approach"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <h3 className="font-bebas text-3xl sm:text-4xl text-left">
                  APPROACH
                </h3>
                <p className="font-matter text-base sm:text-lg text-left leading-relaxed">
                  Each individual’s journey is unique. I take time to understand
                  personal experiences, challenges, & goals to provide guidance
                  that feels relevant, respectful, & aligned with one’s natural
                  rhythm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* OUR EXPERTISE SECTION (FINAL VERSION - NO GAPS) */}
      <section className="relative min-h-[600px] lg:min-h-[660px] w-full bg-[#FE7028] px-4 sm:px-6 lg:px-12 z-20 overflow-hidden flex items-start lg:items-center">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
          <div
            className="text-white text-center mb-8 lg:mb-12 translate-y-16 sm:translate-y-4
            "
          >
            <h2 className="font-bebas text-4xl lg:text-6xl tracking-wider uppercase">
              Our Expertise
            </h2>
          </div>

          <div className="w-full h-full grid lg:grid-cols-2 gap-12 items-end">
            {/* LEFT SIDE: ACCORDION */}
            <div
              className="text-white flex flex-col justify-start lg:justify-end pb-10 lg:pb-20 translate-y-20
            sm:translate-y-6 lg:translate-y-16"
            >
              <div className="space-y-6 max-w-xl mx-auto lg:mx-0 pb-8">
                {expertiseItems.map((item, index) => {
                  const isOpen = openExpertise === index;
                  return (
                    <div key={index} className="border-b border-white/30 pb-4">
                      <button
                        onClick={() => setOpenExpertise(isOpen ? null : index)}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <span className="font-bebas text-xl lg:text-2xl tracking-tight uppercase">
                          {item.title}
                        </span>
                        <span className="text-2xl font-light">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="font-matter text-base mt-4 opacity-90 leading-relaxed">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE: FIXED BOTTOM IMAGE */}
            <div className="relative w-full flex justify-center mt-10 lg:mt-0">
              <img
                src="/expertise.png"
                className="sm:absolute w-[80%] sm:w-[100%] sm:bottom-[-220px] lg:bottom-0 lg:max-w-* object-contain sm:translate-y-12"
              />
            </div>
          </div>
        </div>
      </section>
      {/* GALLERY – Desktop Sizes Restored, Mobile Optimized */}
      <section className="w-full bg-white py-10 lg:py-12">
        <div className="w-full px-4 lg:px-12">
          <h2 className="text-center text-5xl lg:text-6xl font-bebas text-[#FE7028] mb-8 uppercase">
            Gallery
          </h2>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-3 w-full">
            {/* Column 1: Images 1 & 4 */}
            <div className="flex flex-col gap-3 shrink-0 items-center">
              {/* Image 1 */}
              <div className="relative w-full max-w-[300px] h-[320px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <img
                  src="./image57.png"
                  className="w-full h-full object-cover"
                  alt="img1"
                />
                {/* BOTTOM TEXT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-bebas text-xl text-white leading-[0.8] tracking-wide mb-0 pb-0">
                    MAIN TITLE
                  </h3>
                  <p className="font-matter font-thin text-xs text-white mt-0 uppercase opacity-90">
                    12 Jan,2026
                  </p>
                </div>
              </div>

              {/* Image 4 */}
              <div className="relative w-full max-w-[300px] h-[310px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <img
                  src="./image58.png"
                  className="w-full h-full object-cover"
                  alt="img4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-bebas text-xl text-white leading-none tracking-wide">
                    MAIN TITLE
                  </h3>
                  <p className="font-matter font-thin text-xs text-white mt-0 uppercase opacity-90">
                    13 Jan,2026
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Images 2 & 5 */}
            <div className="flex flex-col gap-3 shrink-0 items-center">
              {/* Image 2 (Hidden on mobile) */}
              <div className="relative hidden lg:block w-[530px] h-[170px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <img
                  src="./image59.png"
                  className="w-full h-full object-cover"
                  alt="img2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-bebas text-xl text-white leading-none tracking-wide">
                    MAIN TITLE
                  </h3>
                  <p className="font-matter font-thin text-xs text-white mt-0 uppercase opacity-90">
                    14 Jan,2026
                  </p>
                </div>
              </div>

              {/* Image 5 */}
              <div className="relative w-full max-w-[300px] h-[320px] lg:max-w-none lg:w-[530px] lg:h-[460px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <img
                  src="./image60.png"
                  className="w-full h-full object-cover"
                  alt="img5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-bebas text-xl text-white leading-none tracking-wide">
                    MAIN TITLE
                  </h3>
                  <p className="font-matter font-thin text-xs text-white mt-0 uppercase opacity-90">
                    15 Jan,2026
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Images 3 & 6 */}
            <div className="flex flex-col gap-3 shrink-0 items-center">
              {/* Image 3 */}
              <div className="relative w-full max-w-[300px] h-[320px] lg:max-w-none lg:w-[220px] lg:h-[170px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <img
                  src="./image62.png"
                  className="w-full h-full object-cover"
                  alt="img3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-bebas text-xl text-white leading-none tracking-wide">
                    MAIN TITLE
                  </h3>
                  <p className="font-matter font-thin text-xs text-white mt-0 uppercase opacity-90">
                    17 Jan,2026
                  </p>
                </div>
              </div>

              {/* Image 6 (Hidden on mobile) */}
              <div className="relative hidden lg:block w-[220px] h-[460px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <img
                  src="./image61.png"
                  className="w-full h-full object-cover"
                  alt="img6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-bebas text-xl text-white leading-none tracking-wide">
                    MAIN TITLE
                  </h3>
                  <p className="font-matter font-thin text-xs text-white mt-0 uppercase opacity-90">
                    18 Jan,2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-16 bg-white"></div>
      <Footer />
    </div>
  );
};

export default About;