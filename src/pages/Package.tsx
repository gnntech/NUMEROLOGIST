import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const packages = [
  {
    name: 'Silver Package',
    icon: '/Sliver package.png',
    includes: [
      { text: 'Future guidance', highlight: false },
      { text: 'Numerology report', highlight: false },
      { text: '+', highlight: false },
      { text: 'Half hour online', highlight: true },
      { text: 'consultation', highlight: true },
    ],
  },
  {
    name: 'Gold Package',
    icon: '/Gold Package.png',
    includes: [
      { text: 'Numerology name &', highlight: false },
      { text: 'signature correction', highlight: false },
      { text: '+', highlight: false },
      { text: 'Half hour online', highlight: true },
      { text: 'consultation', highlight: true },
    ],
  },
  {
    name: 'Platinum Package',
    icon: '/Platinum Package.png',
    includes: [
      { text: 'Premium future guidance', highlight: false },
      { text: 'Numerology report', highlight: false },
      { text: '+', highlight: false },
      { text: 'Signature correction', highlight: false },
      { text: '+', highlight: false },
      { text: '45 minutes online', highlight: true },
      { text: 'consultation', highlight: true },
      { text: '+', highlight: false },
      { text: 'Name correction', highlight: false },
    ],
  },
  {
    name: 'Diamond',
    icon: '/Diamond.png',
    includes: [
      { text: 'Business Numerology', highlight: false },
      { text: '+', highlight: false },
      { text: 'Business Name Correction', highlight: false },
      { text: '+', highlight: false },
      { text: 'Magical secret numbers and', highlight: false },
      { text: 'secret remedies', highlight: false },
      { text: '+', highlight: false },
      { text: 'Money attraction 500', highlight: true },
      { text: 'pocket kit + lucky silver coin', highlight: true },
      { text: '+', highlight: false },
      { text: '1 hour Online / offline', highlight: false },
      { text: 'consultation', highlight: false },
    ],
  },
  {
    name: 'Sapphire',
    icon: '/Sapphire.png',
    includes: [
      { text: 'Premium future guidance', highlight: false },
      { text: 'Numerology report', highlight: false },
      { text: '+', highlight: false },
      { text: 'Atrology', highlight: true },
      { text: '+', highlight: false },
      { text: 'Signature correction', highlight: false },
      { text: '+', highlight: false },
      { text: 'Name correction', highlight: false },
      { text: '+', highlight: false },
      { text: 'Law of attraction', highlight: false },
      { text: '(manifestation training)', highlight: false },
      { text: '+', highlight: false },
      { text: '1 hour online / offline', highlight: false },
      { text: 'consultation', highlight: false },
    ],
  },
  {
    name: 'Emerald',
    icon: '/Emerald.png',
    includes: [
      { text: 'Sapphire Package', highlight: false },
      { text: '+', highlight: false },
      { text: 'Your all  numerology', highlight: false },
      { text: 'remedies crystals kit', highlight: false },
      { text: '+', highlight: false },
      { text: 'Money attracting 500', highlight: true },
      { text: 'pocket kit', highlight: true },
      { text: '+', highlight: false },
      { text: 'Lucky silver coin', highlight: true },
      { text: '+', highlight: false },
      { text: 'Vyapar vriddhi yantra', highlight: false },
      { text: '+', highlight: false },
      { text: 'Secret magic numbers', highlight: false },
      { text: '+', highlight: false },
      { text: '1.5 hours online / offline', highlight: false },
      { text: 'consultation', highlight: false },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Package: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div
        className="relative w-full py-24 sm:py-32 lg:py-40"
        style={{
          backgroundImage: 'url(/Packages_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wider mb-6"
            style={{ color: '#FE7028' }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            CONSULTANCY PACKAGES
          </motion.h1>
          <motion.p 
            className="font-matter text-base sm:text-lg lg:text-xl text-white leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Discover carefully designed numerology consultation packages to guide your future, correct energies, attract abundance, and align your life and business with success. Choose a package that resonates with your goals and transformation journey.
          </motion.p>
        </div>
      </div>

      {/* Premium Services Section */}
      <div className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-wider mb-3"
              style={{ color: '#FE7028' }}
            >
              OUR PREMIUM SERVICES
            </h2>
            <p className="font-matter text-lg sm:text-xl lg:text-2xl text-[#2F2F2F]">
              Astro-numerology | Manifestation | Vastu
            </p>
          </motion.div>

          {/* Package Cards - First Row */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {packages.slice(0, 3).map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Icon */}
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={pkg.icon} 
                    alt={pkg.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </motion.div>

                {/* Package Name */}
                <h3 className="font-matter font-semibold text-xl sm:text-2xl text-center text-[#2F2F2F] mb-2">
                  {pkg.name}
                </h3>

                {/* Includes Label */}
                <p className="text-center text-gray-400 font-matter text-sm uppercase tracking-wider mb-4">
                  INCLUDES
                </p>

                {/* Features */}
                <div className="flex-1 text-center space-y-0.5 mb-6">
                  {pkg.includes.map((item, idx) => (
                    <p
                      key={idx}
                      className={`font-matter text-sm ${
                        item.highlight ? 'text-[#FE7028]' : 'text-[#424242]'
                      }`}
                    >
                      {item.text}
                    </p>
                  ))}
                </div>

                {/* Enroll Button */}
                <motion.button
                  className="w-40 mx-auto py-3 rounded-full font-matter font-medium text-white transition-all duration-300"
                  style={{ backgroundColor: '#FE7028' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Package Cards - Second Row */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {packages.slice(3, 6).map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Icon */}
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={pkg.icon} 
                    alt={pkg.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </motion.div>

               
                <h3 className="font-matter font-semibold text-xl sm:text-2xl text-center text-[#2F2F2F] mb-2">
                  {pkg.name}
                </h3>

                {/* Includes Label */}
                <p className="text-center text-gray-400 font-matter text-sm uppercase tracking-wider mb-4">
                  INCLUDES
                </p>

                {/* Features */}
                <div className="flex-1 text-center space-y-0.5 mb-6">
                  {pkg.includes.map((item, idx) => (
                    <p
                      key={idx}
                      className={`font-matter text-sm ${
                        item.highlight ? 'text-[#FE7028]' : 'text-[#424242]'
                      }`}
                    >
                      {item.text}
                    </p>
                  ))}
                </div>

                {/* Enroll Button */}
                <motion.button
                  className="w-40 mx-auto py-3 rounded-full font-matter font-medium text-white transition-all duration-300"
                  style={{ backgroundColor: '#FE7028' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Worldwide Consultations Section */}
      <motion.div 
        className="w-full py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: '#FE7028' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-wider text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            WORLDWIDE CONSULTATIONS
          </motion.h2>
          <motion.p 
            className="font-matter text-lg sm:text-xl lg:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            +91 70303 80884 | +91 86686 45003 | +91 90675 93111
          </motion.p>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Package;
