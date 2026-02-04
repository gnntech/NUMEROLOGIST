import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import { useAdmin } from '../context/AdminContext';

// Package details interface
interface PackageDetails {
  name: string;
  icon: string;
  price: string;
  duration: string;
  description: string;
  whatYouGet: string[];
  benefits: string[];
  idealFor: string[];
  deliveryTime: string;
  consultationType: string;
  googleFormUrl: string;
}

// Detailed package information (dummy but meaningful data)
const packageDetails: { [key: string]: PackageDetails } = {
  'Silver Package': {
    name: 'Silver Package',
    icon: '/Sliver package.png',
    price: '₹2,999',
    duration: '30 Minutes',
    description: 'Perfect for beginners seeking clarity on their life path and future direction through numerology.',
    whatYouGet: [
      'Comprehensive Numerology Report (PDF)',
      'Life Path Number Analysis',
      'Destiny Number Insights',
      'Personal Year Forecast',
      '30-minute Online Consultation',
      'Email Support for 7 Days'
    ],
    benefits: [
      'Understand your core personality traits',
      'Discover your life purpose and direction',
      'Get guidance on career and relationships',
      'Learn about upcoming opportunities'
    ],
    idealFor: [
      'First-time numerology seekers',
      'Those seeking life direction',
      'Career guidance seekers',
      'Personal growth enthusiasts'
    ],
    deliveryTime: '2-3 Business Days',
    consultationType: 'Online (Zoom/Google Meet)',
    googleFormUrl: 'https://forms.gle/your-silver-package-form'
  },
  'Gold Package': {
    name: 'Gold Package',
    icon: '/Gold Package.png',
    price: '₹5,999',
    duration: '45 Minutes',
    description: 'Advanced package for those ready to transform their energy through name and signature correction.',
    whatYouGet: [
      'Complete Numerology Analysis',
      'Name Correction Recommendations',
      'Signature Analysis & Correction',
      'Lucky Numbers & Colors',
      '45-minute Online Consultation',
      'Personalized Action Plan',
      'Email Support for 15 Days'
    ],
    benefits: [
      'Align your name with positive vibrations',
      'Enhance your professional signature',
      'Attract better opportunities',
      'Improve personal and professional relationships'
    ],
    idealFor: [
      'Professionals seeking career growth',
      'Business owners',
      'Those facing repeated obstacles',
      'People wanting energy alignment'
    ],
    deliveryTime: '3-5 Business Days',
    consultationType: 'Online (Zoom/Google Meet)',
    googleFormUrl: 'https://forms.gle/your-gold-package-form'
  },
  'Platinum Package': {
    name: 'Platinum Package',
    icon: '/Platinum Package.png',
    price: '₹9,999',
    duration: '60 Minutes',
    description: 'Premium comprehensive package combining future guidance, corrections, and detailed consultation.',
    whatYouGet: [
      'Premium Future Guidance Report',
      'Complete Numerology Analysis',
      'Name & Signature Correction',
      'Relationship Compatibility Analysis',
      'Health & Wellness Insights',
      '60-minute Detailed Consultation',
      'Personalized Remedies',
      'Email Support for 30 Days'
    ],
    benefits: [
      'Complete life transformation guidance',
      'Detailed future predictions',
      'Relationship harmony solutions',
      'Health and wellness alignment',
      'Business success strategies'
    ],
    idealFor: [
      'Serious transformation seekers',
      'Business leaders',
      'Those at life crossroads',
      'Comprehensive guidance seekers'
    ],
    deliveryTime: '5-7 Business Days',
    consultationType: 'Online/Offline (Your Choice)',
    googleFormUrl: 'https://forms.gle/your-platinum-package-form'
  },
  'Diamond': {
    name: 'Diamond Package',
    icon: '/Diamond.png',
    price: '₹19,999',
    duration: '90 Minutes',
    description: 'Elite business numerology package with magical remedies and money attraction tools.',
    whatYouGet: [
      'Business Numerology Analysis',
      'Business Name Correction',
      'Logo & Brand Analysis',
      'Magical Secret Numbers',
      'Money Attraction 500 Pocket Kit',
      'Lucky Silver Coin (Energized)',
      '90-minute Business Consultation',
      'Partnership Compatibility',
      'Email & WhatsApp Support for 60 Days'
    ],
    benefits: [
      'Accelerate business growth',
      'Attract wealth and prosperity',
      'Resolve business obstacles',
      'Enhance brand energy',
      'Improve cash flow'
    ],
    idealFor: [
      'Business owners',
      'Entrepreneurs',
      'Startups seeking success',
      'Those wanting financial abundance'
    ],
    deliveryTime: '7-10 Business Days',
    consultationType: 'Online/Offline + Physical Kit Delivery',
    googleFormUrl: 'https://forms.gle/your-diamond-package-form'
  },
  'Sapphire': {
    name: 'Sapphire Package',
    icon: '/Sapphire.png',
    price: '₹24,999',
    duration: '90 Minutes',
    description: 'Holistic package combining numerology, astrology, and manifestation training for complete life transformation.',
    whatYouGet: [
      'Premium Future Guidance Report',
      'Astrology + Numerology Combined Analysis',
      'Name & Signature Correction',
      'Law of Attraction Training',
      'Manifestation Techniques',
      'Personalized Meditation Guide',
      '90-minute Comprehensive Consultation',
      'Monthly Follow-up for 3 Months',
      'Priority Support (Email/WhatsApp)'
    ],
    benefits: [
      'Master manifestation techniques',
      'Align with cosmic energies',
      'Transform limiting beliefs',
      'Attract desired outcomes',
      'Achieve life goals faster'
    ],
    idealFor: [
      'Spiritual growth seekers',
      'Manifestation enthusiasts',
      'Those seeking holistic transformation',
      'Life coaches and healers'
    ],
    deliveryTime: '7-10 Business Days',
    consultationType: 'Online/Offline + Training Sessions',
    googleFormUrl: 'https://forms.gle/your-sapphire-package-form'
  },
  'Emerald': {
    name: 'Emerald Package',
    icon: '/Emerald.png',
    price: '₹49,999',
    duration: '120 Minutes',
    description: 'Ultimate VIP package with complete remedies kit, yantras, and extended support for maximum transformation.',
    whatYouGet: [
      'Everything in Sapphire Package',
      'Complete Numerology Remedies Crystal Kit',
      'Money Attracting 500 Pocket Kit',
      'Lucky Silver Coin (Energized)',
      'Vyapar Vriddhi Yantra (Business Growth)',
      'Secret Magic Numbers',
      'Personalized Mantra',
      '120-minute VIP Consultation',
      'Quarterly Follow-ups for 1 Year',
      '24/7 Priority Support'
    ],
    benefits: [
      'Complete life and business transformation',
      'Maximum wealth attraction',
      'Spiritual and material success',
      'Ongoing guidance and support',
      'VIP treatment and priority access'
    ],
    idealFor: [
      'High-net-worth individuals',
      'Serious transformation seekers',
      'Business magnates',
      'Those wanting complete life overhaul'
    ],
    deliveryTime: '10-15 Business Days',
    consultationType: 'Online/Offline + Premium Kit Delivery',
    googleFormUrl: 'https://forms.gle/your-emerald-package-form'
  }
};

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
  const { data } = useAdmin();
  const packages = data?.packages || [];
  const [selectedPackage, setSelectedPackage] = useState<PackageDetails | null>(null);

  const handlePackageClick = (pkgName: string) => {
    const details = packageDetails[pkgName];
    if (details) {
      setSelectedPackage(details);
    }
  };

  const handleEnrollNow = () => {
    if (selectedPackage) {
      window.open(selectedPackage.googleFormUrl, '_blank');
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
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-t-3xl z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src={selectedPackage.icon} alt={selectedPackage.name} className="w-16 h-16 object-contain" />
                    <div>
                      <h2 className="font-bebas text-3xl text-white tracking-wide">{selectedPackage.name}</h2>
                      <p className="font-matter text-white/90 text-lg">{selectedPackage.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPackage(null)}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Description */}
                <div>
                  <p className="font-matter text-lg text-gray-700 leading-relaxed">{selectedPackage.description}</p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Duration</p>
                    <p className="font-matter font-semibold text-gray-900">{selectedPackage.duration}</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Delivery</p>
                    <p className="font-matter font-semibold text-gray-900">{selectedPackage.deliveryTime}</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 col-span-2 md:col-span-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Type</p>
                    <p className="font-matter font-semibold text-gray-900">{selectedPackage.consultationType}</p>
                  </div>
                </div>

                {/* What You Get */}
                <div>
                  <h3 className="font-bebas text-2xl text-gray-900 tracking-wide mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    WHAT YOU GET
                  </h3>
                  <ul className="space-y-3">
                    {selectedPackage.whatYouGet.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-matter text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-bebas text-2xl text-gray-900 tracking-wide mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    KEY BENEFITS
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedPackage.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="font-matter text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div>
                  <h3 className="font-bebas text-2xl text-gray-900 tracking-wide mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
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
                    className="w-full py-4 rounded-xl font-matter font-semibold text-lg text-white shadow-lg"
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
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => handlePackageClick(pkg.name)}
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

                {/* Book Button */}
                <motion.button
                  className="w-40 mx-auto py-3 rounded-full font-matter font-medium text-white transition-all duration-300"
                  style={{ backgroundColor: '#FE7028' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
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
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => handlePackageClick(pkg.name)}
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

                {/* Book Button */}
                <motion.button
                  className="w-40 mx-auto py-3 rounded-full font-matter font-medium text-white transition-all duration-300"
                  style={{ backgroundColor: '#FE7028' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
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
