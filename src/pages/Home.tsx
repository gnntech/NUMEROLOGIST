import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import IntroLoader from '../components/IntroLoader';

// Lazy load components below the fold
const PromoSection = lazy(() => import('../components/PromoSection'));
const ServicesCarousel = lazy(() => import('../components/ServicesCarousel'));
const ShopSection = lazy(() => import('../components/ShopSection'));
const GetInTouchSection = lazy(() => import('../components/GetInTouchSection'));
const Footer = lazy(() => import('../components/Footer'));

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
            style={{ backgroundImage: 'url(/GNN_background.png)' }}
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
                  className="inline-flex font-matter items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src="/Numerology Expert.png" 
                    alt="Numerology Expert" 
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 object-contain"
                  />
                  <span className="text-orange-100 font-medium font-matter text-sm sm:text-base">Numerology Expert</span>
                </motion.div>

                {/* Main heading */}
                <div>
                  <h1 
                    className="font leading-tight tracking-tight font-bebas whitespace-nowrap" 
                    style={{ 
                      color: '#FFD8C5', 
                      letterSpacing: '1px',
                      fontSize: 'clamp(3rem, 6vw, 7rem)'
                    }}
                  >
                    <motion.span 
                      className="block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      GAURAB NERPAGAR
                    </motion.span>
                    <motion.span 
                      className="block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      NUMEROLOGICS
                    </motion.span>
                  </h1>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-orange-100 leading-relaxed max-w-lg mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Unlock the ancient wisdom of numerology to reveal your true potential, 
                  understand your destiny, and navigate life's journey with clarity and purpose.
                </motion.p>

                {/* Stats - Mobile: before button, Desktop: after button */}
                <motion.div 
                  className="flex lg:hidden flex-row items-center justify-center gap-8 mt-4 pt-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
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
                      <div className="text-xl font-bebas tracking-wide font-bold text-orange-100">GLOBAL</div>
                      <div className="text-sm text-orange-200">Consultations</div>
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
                      <div className="text-xl font-bebas tracking-wide font-bold text-orange-100">10+</div>
                      <div className="text-sm text-orange-200">Years Experience</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="mt-10 lg:mt-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <motion.button 
                    className="mt-5 bg-orange-200 hover:bg-orange-100 text-amber-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg font-matter"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Book a call
                  </motion.button>
                </motion.div>

                {/* Mobile Image - At the very end on mobile, stick to bottom */}
                <motion.div 
                  className="flex justify-center items-end flex-1 lg:hidden"
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
                      <div className="text-3xl font-bebas tracking-wide font-bold text-orange-100">GLOBAL</div>
                      <div className="text-base text-orange-200">Consultations</div>
                    </div>
                  </motion.div>
                  
                  <div className="w-px h-16 bg-orange-300/50"></div>
                  
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
                      <div className="text-3xl font-bebas tracking-wide font-bold text-orange-100">10+</div>
                      <div className="text-base text-orange-200">Years Experience</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
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

        {/* Promo Section */}
        <Suspense fallback={<SectionLoader />}>
          <PromoSection />
        </Suspense>

        {/* Services Section */}
        <Suspense fallback={<SectionLoader />}>
          <ServicesCarousel />
        </Suspense>

        {/* Testimonial Section */}
        <motion.div 
          className="relative z-10 py-20 sm:py-28 lg:py-32 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Testimonial_bg.png)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-bebas tracking-wide mb-8"
                style={{ color: '#FFFAE5' }}
              >
                TESTIMONIAL
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Testimonial Card */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="bg-cover bg-center bg-no-repeat rounded-2xl p-6 sm:p-8 shadow-2xl mb-6 sm:mb-8"
                  style={{ 
                    backgroundImage: 'url(/Testimonial_card.png)',
                    minHeight: '280px'
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card content overlay */}
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-6xl font-bold leading-none mb-3 sm:mb-4" style={{ color: '#922930' }}>"</div>
                    <blockquote 
                      className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed font-matter"
                      style={{ color: '#922930' }}
                    >
                      Through my Life Path and Destiny reading, I gained a deep understanding of my life purpose 
                      and where I'm truly headed. The insights brought me clarity, confidence, and a sense of 
                      direction that helped me grow and feel more fulfilled.
                    </blockquote>
                    <div className="mt-4 sm:mt-6">
                      <div 
                        className="font-semibold text-base sm:text-lg font-matter"
                        style={{ color: '#922930' }}
                      >
                        Sneha Iyer
                      </div>
                      <div 
                        className="font-matter text-sm sm:text-base"
                        style={{ color: '#922930', opacity: 0.8 }}
                      >
                        Mumbai
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stats directly under the card */}
                <motion.div 
                  className="grid grid-cols-3 gap-4 sm:gap-6 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div 
                      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-bebas mb-1"
                      style={{ color: '#FFFAE5' }}
                    >
                      500+
                    </div>
                    <div 
                      className="text-sm sm:text-base font-semibold font-matter"
                      style={{ color: '#FFFAE5', opacity: 0.9 }}
                    >
                      Clients served
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div 
                      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-bebas mb-1"
                      style={{ color: '#FFFAE5' }}
                    >
                      95%
                    </div>
                    <div 
                      className="text-sm sm:text-base font-semibold font-matter"
                      style={{ color: '#FFFAE5', opacity: 0.9 }}
                    >
                      Positive Feedback
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-1 mb-1">
                      <span 
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-bebas"
                        style={{ color: '#FFFAE5' }}
                      >
                        4.8
                      </span>
                      <img 
                        src="/Star.png" 
                        alt="Star Rating" 
                        className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div 
                      className="text-sm sm:text-base font-semibold font-matter"
                      style={{ color: '#FFFAE5', opacity: 0.9 }}
                    >
                      Client Ratings
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right side - Decorative space or additional content */}
              <div className="relative hidden lg:block">
                {/* This space can be used for decorative elements or additional content */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Shop Section */}
        <Suspense fallback={<SectionLoader />}>
          <ShopSection />
        </Suspense>

        {/* Get In Touch Section */}
        <Suspense fallback={<SectionLoader />}>
          <GetInTouchSection />
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