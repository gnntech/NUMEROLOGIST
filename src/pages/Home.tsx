import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IntroLoader from '../components/IntroLoader';

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
        className="absolute inset-0 bg-cover bg-contain bg-no-repeat"
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
      <div className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">OUR SERVICES</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 - Life Path Reading */}
            <div className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-orange-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🔮</span>
                </div>
              </div>
              <div className="h-1 w-20 bg-amber-900 mx-auto mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Understand your life purpose and future direction through your Life Path and Destiny numbers, 
                guiding you toward clarity, growth, and fulfillment.
              </p>
            </div>

            {/* Service 2 - Numerology Report */}
            <div className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-orange-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
              </div>
              <div className="h-1 w-20 bg-amber-900 mx-auto mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                A detailed analysis of your birth numbers that reveals your personality traits, strengths, 
                challenges, & life patterns to help you make informed decisions.
              </p>
            </div>

            {/* Service 3 - Career Guidance */}
            <div className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-orange-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">💼</span>
                </div>
              </div>
              <div className="h-1 w-20 bg-amber-900 mx-auto mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Get guidance on career choices, financial growth, and prosperity by aligning your numerology 
                numbers with the right professional and wealth opportunities.
              </p>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-12 space-x-2">
            <div className="w-4 h-4 bg-amber-900 rounded-full"></div>
            <div className="w-4 h-4 bg-amber-900 rounded-full"></div>
            <div className="w-4 h-4 bg-amber-900 rounded-full"></div>
            <div className="w-4 h-4 border-2 border-amber-900 rounded-full"></div>
            <div className="w-4 h-4 bg-amber-900 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="relative z-10 bg-gradient-to-r from-amber-900 to-orange-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-100 mb-8">TESTIMONIALS</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Testimonial */}
            <div className="bg-orange-50 rounded-2xl p-8 shadow-xl border-l-8 border-b-8 border-orange-400">
              <div className="flex items-start space-x-6">
                <div className="text-6xl text-amber-900 font-bold leading-none">"</div>
                <div className="flex-1">
                  <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Through my Life Path and Destiny reading, I gained a deep understanding of my life purpose 
                    and where I'm truly headed. The insights brought me clarity, confidence, and a sense of 
                    direction that helped me grow and feel more fulfilled.
                  </blockquote>
                  <div className="mt-6">
                    <div className="font-semibold text-amber-900 text-lg">Sneha Iyer</div>
                    <div className="text-gray-600">Mumbai</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Gaurab's Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto">
                <img 
                  src="/GaurabNPP.png" 
                  alt="Gaurab Nerpagar" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-5xl font-bold text-orange-100 mb-2">500+</div>
              <div className="text-orange-200 text-lg">Clients Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-100 mb-2">95%</div>
              <div className="text-orange-200 text-lg">Positive Feedback</div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-5xl font-bold text-orange-100">4.8</span>
                <span className="text-orange-200 text-2xl">⭐</span>
              </div>
              <div className="text-orange-200 text-lg">Client Ratings</div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default Home;