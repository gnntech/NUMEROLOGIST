import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import IntroLoader from '../components/IntroLoader';

// Lazy load components below the fold
const PromoSection = lazy(() => import('../components/PromoSection'));
const OurServicesSection = lazy(() => import('../components/OurServicesSection'));
const PromoMarquee = lazy(() => import('../components/PromoMarquee'));
const TestimonialSection = lazy(() => import('../components/TestimonialSection'));
const Footer = lazy(() => import('../components/Footer'));
const MeaningfulGiftsSection = lazy(() => import('../components/MeaningfulGiftsSection'));
const OnTheMediaSection = lazy(() => import('../components/OnTheMediaSection'));
const SocialMediaPhone = lazy(() => import('./SocialMediaPhone'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center bg-transparent">
    <div className="w-8 h-8 border-2 border-orange-200 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    // Re-enable scrolling
    document.body.style.overflow = 'unset';
  };

  // Disable scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      {/* Intro Loader - plays on every page refresh */}
      <IntroLoader isLoading={isLoading} onComplete={handleLoaderComplete} />

      {/* Main Home Content */}
      <motion.div
        className="overflow-x-hidden"
      >
        {/* Hero Section with background */}
        <div className="relative min-h-screen min-h-[100dvh] overflow-hidden">
          {/* Background with image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/GNN_background_grey_2.png)' }}
          />

          {/* Main content - Grid layout with image anchored to bottom */}
          <div className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
            {/* Left side - Content */}
            <motion.div
              className="text-white space-y-3 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left pt-4 lg:pt-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-start lg:justify-start lg:flex-1 pb-0 lg:pb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? -50 : 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="max-w-xl mx-auto lg:mx-0 lg:ml-[8vw] space-y-3 lg:space-y-5 mt-6 lg:mt-0"
              >
                {/* Expert badge */}
                <motion.div
                  className="inline-flex font-matter items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                  style={{ backgroundColor: 'rgba(139, 90, 60, 0.85)' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src="/Numerology Expert.png"
                    alt="Numerology Expert"
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 object-contain"
                  />
                  <span className="font-medium font-matter text-sm sm:text-base text-white">Numerology Expert</span>
                </motion.div>

                {/* Main heading */}
                <div>
                  <h1
                    className="font leading-none tracking-tight font-bebas whitespace-nowrap"
                    style={{
                      letterSpacing: '1px',
                      fontSize: 'clamp(3rem, 6vw, 7rem)'
                    }}
                  >
                    <motion.span
                      className="block text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      GAURAB NERPAGAR
                    </motion.span>
                    <motion.span
                      className="block text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      Numerologics
                    </motion.span>
                  </h1>
                </div>

                {/* Description */}
                <motion.p
                  className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0"
                  style={{ color: '#FFFFFF' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Unlock the ancient wisdom of numerology to reveal your true potential,
                  understand your destiny, and navigate life's journey with clarity and purpose.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <motion.button
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg font-matter"
                    style={{ backgroundColor: '#FE7028', color: '#FFFFFF' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Book a call
                  </motion.button>
                </motion.div>

                {/* Stats - Mobile */}
                <motion.div
                  className="flex lg:hidden flex-row items-center justify-center gap-8 mt-4 pt-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src="/GLOBAL.png"
                        alt="Global"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bebas tracking-wide font-bold" style={{ color: '#FFFFFF' }}>GLOBAL</div>
                      <div className="text-sm" style={{ color: '#FFFFFF' }}>Consultations</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src="/Star.png"
                        alt="Star"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bebas tracking-wide font-bold" style={{ color: '#FFFFFF' }}>10+</div>
                      <div className="text-sm" style={{ color: '#FFFFFF' }}>Years Experience</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Stats - Desktop only */}
                <motion.div
                  className="hidden lg:flex flex-row items-center justify-start space-x-12 pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src="/GLOBAL.png"
                        alt="Global"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-bebas tracking-wide font-bold" style={{ color: '#FFFFFF' }}>GLOBAL</div>
                      <div className="text-base" style={{ color: '#FFFFFF' }}>Consultations</div>
                    </div>
                  </motion.div>

                  <div className="w-px h-16" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>

                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src="/Star.png"
                        alt="Star"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-bebas tracking-wide font-bold" style={{ color: '#FFFFFF' }}>10+</div>
                      <div className="text-base" style={{ color: '#FFFFFF' }}>Years Experience</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile Image - At the very end on mobile, stick to bottom */}
            <motion.div
              className="flex justify-center items-end flex-1 lg:hidden order-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.img
                src="/GaurabNPP.png"
                alt="Gaurab Nerpagar - Numerology Expert"
                className="h-auto object-contain object-bottom"
                style={{
                  width: 'clamp(320px, 90vw, 500px)',
                  maxHeight: '100%'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Right side - Image anchored to bottom */}
            <motion.div
              className="order-1 lg:order-2 hidden lg:flex items-end justify-center self-end"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 50 : 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Gaurab's Image - Desktop - anchored to bottom, larger presence */}
              <motion.img
                src="/GaurabNPP.png"
                alt="Gaurab Nerpagar - Numerology Expert"
                className="object-contain object-bottom"
                style={{
                  height: 'clamp(500px, 85vh, 90vh)',
                  width: 'auto',
                  maxWidth: 'clamp(400px, 45vw, 700px)'
                }}
                whileHover={{ scale: 1.0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>


        </div>
        <Suspense fallback={<SectionLoader />}>
          <PromoSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <PromoMarquee />
        </Suspense>

        {/* Services Section */}
        <Suspense fallback={<SectionLoader />}>
          <OurServicesSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <MeaningfulGiftsSection />
        </Suspense>

        {/* On The Media Section */}
        <Suspense fallback={<SectionLoader />}>
          <OnTheMediaSection />
        </Suspense>

        {/* Social Media Phone Section */}
        <Suspense fallback={<SectionLoader />}>
          <SocialMediaPhone />
        </Suspense>

        {/* Testimonial Section */}
        <Suspense fallback={<SectionLoader />}>
          <TestimonialSection />
        </Suspense>




        {/* Footer */}
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </motion.div>
    </>
  );
};

export default Home;
