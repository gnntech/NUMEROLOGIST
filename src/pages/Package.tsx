import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import { useAdmin } from '../context/AdminContext';
import type { Package as PackageType } from '../context/AdminContext';

const premiumPackages: PackageType[] = [
  {
    id: '1',
    name: 'Sapphire Package',
    price: '₹24,000',
    image: '/Sapphire_Package.png',
    minimal: [
      'Premium Numerology Report',
      'Signature Correction',
      'Name Correction (No official document change required)',
      '30-min online consultation with Gaurab Nerpagar',
    ],
    detailed: [
      'Full Premium Numerology Report',
      'Signature Correction',
      'Name Correction (No need to change your name in official documents)',
      '30-minute online consultation with Gaurab Nerpagar Sir (Audio or Video Call)',
    ],
    benefits: [
      'Understand your core personality traits',
      'Discover your life purpose and direction',
      'Get guidance on career and relationships',
      'Learn about upcoming opportunities',
    ],
    idealFor: [
      'First-time numerology seekers',
      'Those seeking life direction',
      'Career guidance seekers',
      'Personal growth enthusiasts',
    ],
    formUrl: 'https://forms.gle/5n4PjbD92vX5tT8A9',
  },
  {
    id: '2',
    name: 'Emerald Package',
    price: '₹33,000',
    image: '/Emerald_Package.png',
    minimal: [
      'Premium Numerology Report',
      'Name & Signature Correction',
      'Detailed Numerology Explanation',
      'Career, Health, Wealth & Future Guidance',
      '3 personal questions + remedies',
      'Kundali remedies (no explanation)',
      'Free premium crystal bracelet',
      '1-hour face-to-face consultation',
    ],
    detailed: [
      'Full Premium Numerology Report + Name and Signature Correction',
      'Detailed Numerology Explanation',
      'Guidance for Future, Career, Business, Health, and Wealth',
      'Answers and remedies for any 3 of your questions',
      'Astrology (Kundli) remedies / solutions (Note: Astrology/Kundli explanation is not included)',
      'One original premium crystal bracelet favourable to your Date of Birth (free)',
      '1-hour face-to-face premium counselling session with Gaurab Nerpagar Sir',
    ],
    benefits: [
      'Complete life transformation guidance',
      'Detailed future predictions',
      'Relationship harmony solutions',
      'Health and wellness alignment',
      'Business success strategies',
    ],
    idealFor: [
      'Professionals seeking career growth',
      'Business owners',
      'Those facing repeated obstacles',
      'People wanting energy alignment',
    ],
    formUrl: 'https://forms.gle/3gr1TP5aj4w25hXe6',
  },
  {
    id: '3',
    name: 'Diamond Package',
    price: '₹51,000',
    image: '/Diamond_Package.png',
    minimal: [
      'Premium Numerology Report',
      'Name & Signature Correction',
      'Detailed Numerology & Remedies',
      'Detailed Kundali Explanation & Remedies',
      '5-10 crystal bracelets (free)',
      'Career, Health, Wealth & Future Guidance',
      'All questions answered + remedies',
      '1 hr 30 min face-to-face consultation',
    ],
    detailed: [
      'Full Premium Numerology Report + Name and Signature Correction',
      'Detailed Numerology Explanation & Remedies',
      'Detailed Astrology/Kundli Explanation & Remedies',
      '5 to 10 premium crystal bracelets based on your numerology (free)',
      'Guidance for Future, Career, Business, Health, and Wealth',
      'Answers and remedies for all your questions',
      '1 hour 30 minutes face-to-face premium counselling session with Gaurab Nerpagar Sir',
    ],
    benefits: [
      'Complete life and business transformation',
      'Maximum wealth attraction',
      'Spiritual and material success',
      'Ongoing guidance and support',
      'VIP treatment and priority access',
    ],
    idealFor: [
      'High-net-worth individuals',
      'Serious transformation seekers',
      'Business magnates',
      'Those wanting complete life overhaul',
    ],
    formUrl: '#',
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
  const { data, loading } = useAdmin();
  
  // Ensure packages is always an array
  let packageList: PackageType[] = premiumPackages;
  
  if (data && data.packages && Array.isArray(data.packages) && data.packages.length > 0) {
    packageList = data.packages as PackageType[];
  }
  
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);

  const handleEnrollNow = () => {
    if (selectedPackage) {
      window.open(selectedPackage.formUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Package Details Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedPackage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header - Orange Background */}
              <div className="sticky top-0 rounded-t-3xl z-10 p-6" style={{ backgroundColor: '#FE7028' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <img src={selectedPackage.image} alt={selectedPackage.name} className="w-16 h-16 object-contain" />
                    <div className="text-white">
                      <h2 className="font-bebas text-3xl tracking-wide uppercase">{selectedPackage.name}</h2>
                      <p className="font-matter text-white/90 text-lg">{selectedPackage.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPackage(null)}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* What You Get Section */}
                <div>
                  <h3 className="font-bebas text-2xl text-gray-900 tracking-wide mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="#FE7028" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    WHAT YOU GET
                  </h3>
                  <ul className="space-y-3">
                    {selectedPackage.detailed.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-matter text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits Section */}
                <div>
                  <h3 className="font-bebas text-2xl text-gray-900 tracking-wide mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="#FE7028" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    KEY BENEFITS
                  </h3>
                  <ul className="space-y-3">
                    {selectedPackage.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="font-matter text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Section */}
                <div>
                  <h3 className="font-bebas text-2xl text-gray-900 tracking-wide mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="#FE7028" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    IDEAL FOR
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPackage.idealFor.map((person, idx) => (
                      <span key={idx} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-matter text-sm">
                        {person}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <motion.button
                    onClick={handleEnrollNow}
                    className="w-full py-4 rounded-xl font-bebas font-semibold text-lg text-white shadow-lg uppercase tracking-wide"
                    style={{ backgroundColor: '#FE7028' }}
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(254, 112, 40, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now - {selectedPackage.price}
                  </motion.button>
                  <p className="text-center text-gray-500 text-sm mt-3 font-matter">
                    You'll be redirected to our booking form
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
            Discover carefully designed numerology consultation packages to guide your future, correct energies, attract abundance, and align your life and business with success.
          </motion.p>
        </div>
      </div>

      {/* Premium Services Section */}
      <div className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-16"
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

          {/* Package Cards - 3 Column Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {packageList.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => setSelectedPackage(pkg)}
              >
                {/* Icon */}
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-24 h-24 object-contain"
                  />
                </motion.div>

                {/* Package Name */}
                <h3 className="font-bebas text-2xl text-center text-[#2F2F2F] mb-2 tracking-wide">
                  {pkg.name}
                </h3>

                {/* Price */}
                <p className="text-center font-bebas text-4xl mb-4" style={{ color: '#FE7028' }}>
                  {pkg.price}
                </p>

                {/* Includes Label */}
                <p className="text-center text-gray-400 font-matter text-sm uppercase tracking-wider mb-6">
                  INCLUDES
                </p>

                {/* Features */}
                <div className="flex-1 ">
                  <ul className="space-y-0 text-center">
                    {pkg.minimal.map((item, idx) => (
                      <li key={idx} className="font-matter text-sm text-gray-700 py-2">
                        <div className="flex items-center justify-center gap-2">
                          <span>{item}</span>
                        </div>
                        {idx < pkg.minimal.length - 1 && (
                          <img src="/package_line.png" alt="divider" className="w-full h-auto mt-3" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Button */}
                <motion.button
                  className="w-full py-4 rounded-full font-bebas text-lg text-white transition-all duration-300 tracking-wide"
                  style={{ backgroundColor: '#FE7028' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(254, 112, 40, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Session
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
