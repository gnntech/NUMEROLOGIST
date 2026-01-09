import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <>
      {/* HERO / ABOUT INTRO */}
      <motion.div className="overflow-x-hidden">
        <div className="relative min-h-screen overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/bg_about.png)" }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 min-h-screen grid lg:grid-cols-2 items-end px-4 sm:px-6 lg:px-12">
            {/* LEFT — IMAGE */}
            {/* Mobile & tablet image */}
            <div className="relative w-full lg:hidden flex justify-center items-end h-[60vh] sm:h-[70vh]">
              <img
                src="/GaurabNPP.png"
                alt="Gaurab Nerpagar"
                className="w-full max-w-[300px] sm:max-w-[400px] h-auto object-contain"
              />
            </div>

            {/* Desktop image */}
            <div className="hidden lg:flex relative h-[100vh] justify-center ">
              <img
                src="/GaurabNPP.png"
                alt="Gaurab Nerpagar"
                className="absolute bottom-[-20px] object-contain h-full max-w-[600px] translate-y-10"
              />
            </div>

            {/* RIGHT — CONTENT */}
            <motion.div
              className="text-white space-y-4 max-w-xl mx-auto lg:mx-0 self-center pb-12 lg:pb-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-bebas text-[clamp(2rem,6vw,5rem)] leading-tight  mt-6 lg:mt-0">
                GAURAB NERPAGAR
              </h1>

              <p className="font-matter text-base sm:text-lg">
                I’m a numerology practitioner dedicated to helping individuals
                find clarity, balance, and deeper understanding through the
                language of numbers. My approach blends intuitive insight with
                thoughtful guidance, making each experience meaningful and easy
                to connect with. Through personalized readings and conscious
                offerings, I aim to create a calm, supportive space where
                clarity unfolds naturally and purpose feels within reach.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ABOUT CARDS SECTION */}
      <motion.section
        className="relative flex items-center overflow-hidden py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* SECTION TITLE */}
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-bebas text-[clamp(2rem,5vw,3rem)] text-[#FE7028] tracking-wide">
                PHILOSOPHY & APPROACH
              </h2>
            </motion.div>

            {/* CARDS GRID */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* CARD 1 */}
              <motion.div
                className="rounded-2xl bg-gradient-to-br from-[#A9A8AD] via-[#D7D6DB] to-[#A9A8AD] p-6 flex flex-col gap-4 text-[#5A5A5A] min-h-[320px] sm:min-h-[360px]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/A-Icon1o.png"
                  alt="Belief Icon"
                  className="w-16 h-16 mx-auto"
                />

                <h3 className="font-bebas text-3xl sm:text-4xl text-center mb-4">
                  BELIEF
                </h3>
                <p className="font-matter text-sm sm:text-base">
                  I believe that numbers are more than calculations — they are
                  subtle guides that reflect our inner patterns, strengths, and
                  life cycles. When understood with awareness, they offer
                  clarity rather than limitation.
                </p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                className="rounded-2xl bg-gradient-to-br from-[#A9A8AD] via-[#D7D6DB] to-[#A9A8AD] p-6 flex flex-col gap-4 text-[#5A5A5A] min-h-[320px] sm:min-h-[360px]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/A-Icon2o.png"
                  alt="Guidance Icon"
                  className="w-16 h-16 mx-auto"
                />
                <h3 className="font-bebas text-3xl sm:text-4xl text-center mb-4">
                  GUIDANCE
                </h3>
                <p className="font-matter text-sm sm:text-base">
                  My approach is grounded, positive, and empowering. I focus on
                  insight rather than prediction, helping clients feel supported
                  instead of overwhelmed. Every session is guided by balance,
                  intention, and conscious awareness.
                </p>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                className="rounded-2xl bg-gradient-to-br from-[#A9A8AD] via-[#D7D6DB] to-[#A9A8AD] p-6 flex flex-col gap-4 text-[#5A5A5A] min-h-[320px] sm:min-h-[360px]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/A-Icon3o.png"
                  alt="Approach Icon"
                  className="w-16 h-16 mx-auto"
                />
                <h3 className="font-bebas text-3xl sm:text-4xl text-center mb-4">
                  APPROACH
                </h3>
                <p className="font-matter text-sm sm:text-base">
                  Each individual’s journey is unique. I take time to understand
                  personal experiences, challenges, & goals to provide guidance
                  that feels relevant, respectful, & aligned with one’s natural
                  rhythm.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;