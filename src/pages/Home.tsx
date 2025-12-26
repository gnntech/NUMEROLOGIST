import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IntroLoader from '../components/IntroLoader';
import ServicesCarousel from '../components/ServicesCarousel';
import ShopSection from '../components/ShopSection';
import GetInTouchSection from '../components/GetInTouchSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state on every page refresh/mount
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
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: '#1a1a1a' }} // Prevent white flash
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
      {/* Background with image */}
      <div 
        className="absolute inset-0  bg-contain bg-no-repeat"
        style={{ backgroundImage: 'url(/GNN_background.png)' }}
      >
        {/* Dark overlay for better text readability */}
       
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Content */}
            <div className="text-white space-y-8">
              {/* Expert badge */}
              <div className="inline-flex font-matter items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <img 
                  src="/Numerology Expert.png" 
                  alt="Numerology Expert" 
                  className="w-6 h-6 mr-2 object-contain"
                />
                <span className="text-orange-100 font-medium font-matter">Numerology Expert</span>
              </div>

              {/* Main heading */}
              <div>
                <h1 className="font leading-tight tracking-tight font-bebas" style={{ fontSize: '83.55px', color: '#FFD8C5', lineHeight: '87.5px', letterSpacing: '1px' }}>
                  <span className="block">GAURAB NERPAGAR</span>
                  <span className="block">NUMEROLOGICS</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-orange-100 leading-relaxed max-w-lg">
                Unlock the ancient wisdom of numerology to reveal your true potential, 
                understand your destiny, and navigate life's journey with clarity and purpose.
              </p>

              {/* CTA Button */}
              <div>
                <button className="bg-orange-200 hover:bg-orange-100 text-amber-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-matter">
                  Book a call
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-12 pt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                      src="/GLOBAL.png" 
                      alt="Global" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-3xl font-bebas tracking-wide font-bold text-orange-100">GLOBAL</div>
                    <div className="text-orange-200">Consultations</div>
                  </div>
                </div>
                
                <div className="w-px h-16 bg-orange-300/50"></div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                      src="/Star.png" 
                      alt="Star" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-3xl font-bebas tracking-wide  font-bold text-orange-100">10+</div>
                    <div className="text-orange-200">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative flex-1">
              <div className="relative w-full max-w-4xl" style={{ transform: 'translateX(-50px) translateY(40px)' }}>
                {/* Gaurab's Image */}
                <img 
                  src="/GaurabNPP.png" 
                  alt="Gaurab Nerpagar - Numerology Expert" 
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '1000px', minWidth: '750px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesCarousel />

      {/* Testimonial Section */}
      <div 
        className="relative z-10 py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/Testimonial_bg.png)' }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-5xl font-bold font-bebas tracking-wide mb-8"
              style={{ color: '#FFFAE5' }}
            >
              TESTIMONIAL
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Testimonial Card */}
            <div className="relative">
              <div 
                className="bg-cover bg-center bg-no-repeat rounded-2xl p-8 shadow-2xl mb-8"
                style={{ 
                  backgroundImage: 'url(/Testimonial_card.png)',
                  minHeight: '300px'
                }}
              >
                {/* Card content overlay */}
                <div className="relative z-10">
                  <div className="text-6xl font-bold leading-none mb-4" style={{ color: '#922930' }}>"</div>
                  <blockquote 
                    className="text-lg mb-6 leading-relaxed font-matter"
                    style={{ color: '#922930' }}
                  >
                    Through my Life Path and Destiny reading, I gained a deep understanding of my life purpose 
                    and where I'm truly headed. The insights brought me clarity, confidence, and a sense of 
                    direction that helped me grow and feel more fulfilled.
                  </blockquote>
                  <div className="mt-6">
                    <div 
                      className="font-semibold text-lg font-matter"
                      style={{ color: '#922930' }}
                    >
                      Sneha Iyer
                    </div>
                    <div 
                      className="font-matter"
                      style={{ color: '#922930', opacity: 0.8 }}
                    >
                      Mumbai
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats directly under the card */}
              <div className="grid grid-cols-3 gap-6 text-left">
                <div>
                  <div 
                    className="text-4xl font-bold font-bebas mb-1"
                    style={{ color: '#FFFAE5' }}
                  >
                    500+
                  </div>
                  <div 
                    className="text-sm font-matter"
                    style={{ color: '#FFFAE5', opacity: 0.9 }}
                  >
                    Clients served
                  </div>
                </div>
                <div>
                  <div 
                    className="text-4xl font-bold font-bebas mb-1"
                    style={{ color: '#FFFAE5' }}
                  >
                    95%
                  </div>
                  <div 
                    className="text-sm font-matter"
                    style={{ color: '#FFFAE5', opacity: 0.9 }}
                  >
                    Positive Feedback
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    <span 
                      className="text-4xl font-bold font-bebas"
                      style={{ color: '#FFFAE5' }}
                    >
                      4.8
                    </span>
                    <img 
                      src="/Star.png" 
                      alt="Star Rating" 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div 
                    className="text-sm font-matter"
                    style={{ color: '#FFFAE5', opacity: 0.9 }}
                  >
                    Client Ratings
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Decorative space or additional content */}
            <div className="relative">
              {/* This space can be used for decorative elements or additional content */}
            </div>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <ShopSection />

      {/* Get In Touch Section */}
      <GetInTouchSection />

      {/* Footer */}
      <Footer />
      </motion.div>
    </>
  );
};

export default Home;