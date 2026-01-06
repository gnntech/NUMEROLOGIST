import React, { useState, useEffect, useRef } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  badge: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'NAME CORRECTION &\nSIGNATURE GUIDANCE',
    description: 'Refine your name and signature to align with supportive vibrations, helping improve confidence, opportunities, and overall life flow.',
    badge: '/1st Badge.png',
  },
  {
    id: 2,
    title: 'LIFE PATH & DESTINY\nREADING',
    description: 'Understand your life purpose and future direction through your Life Path and Destiny numbers, guiding you toward clarity, growth, and fulfillment.',
    badge: '/2nd badge.png',
  },
  {
    id: 3,
    title: 'CAREER & WEALTH\nASTROLOGY',
    description: 'Get guidance on career choices, financial growth, and prosperity by aligning your numerology numbers with the right professional and wealth opportunities.',
    badge: '/3rd badge.png',
  },
  {
    id: 4,
    title: 'PERSONAL\nNUMEROLOGY REPORTS',
    description: 'A detailed analysis of your birth numbers that reveals your personality traits, strengths, challenges, & life patterns to help you make informed decisions.',
    badge: '/4th badge.png',
  },
  {
    id: 5,
    title: 'RELATIONSHIP\nCOMPATIBILITY',
    description: 'Gain insight into relationship dynamics and compatibility through numbers, helping you build understanding, harmony, and stronger connections.',
    badge: '/5th badge.png',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div
      className="relative rounded-2xl p-5 pr-0 pb-0 h-full flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F2F2F2 0%, #BEBEBE 100%)',
      }}
    >
      {/* Content */}
      <div className="pr-3 flex-1">
        <h3
          className="text-[1.7rem] sm:text-[2rem] font-[550] font-bebas tracking-wide mb-2 leading-tight uppercase whitespace-pre-line"
          style={{ color: '#424242' }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm leading-snug font-matter"
          style={{ color: '#5A5A5A' }}
        >
          {service.description}
        </p>
      </div>

      {/* Bottom section with arrow and badge */}
      <div className="flex items-end justify-between mt-auto">
        {/* Arrow Button - Bottom Left */}
        <div className="pb-7 pl-0">
          <button
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform hover:scale-105"
            style={{ backgroundColor: '#FE7028' }}
          >
            <img
              src="/Arrowww.png"
              alt="Arrow"
              className="w-4 h-4 object-contain"
            />
          </button>
        </div>
        <div className="w-32 h-32 sm:w-40 sm:h-42 flex-shrink-0 -mr-1 -mb-1">
          <img
            src={service.badge}
            alt={`${service.title} badge`}
            className="w-full h-full object-contain object-right-bottom"
          />
        </div>
      </div>
    </div>
  );
};

const OurServicesSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  // Touch handling for swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-bebas tracking-wide text-center mb-8"
          style={{ color: '#FE7028' }}
        >
          OUR SERVICES
        </h2>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative">
            <div
              ref={carouselRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="w-full flex-shrink-0 px-4">
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
              style={{ backgroundColor: '#FE7028' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
              style={{ backgroundColor: '#FE7028' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'w-6' : ''
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? '#FE7028' : 'rgba(0,0,0,0.2)',
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid Layout */
          <div className="space-y-4">
            {/* First Row - 3 Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
              {services.slice(0, 3).map((service) => (
                <div key={service.id} className="h-[310px]">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>

            {/* Second Row - 2 Cards Centered */}
            <div className="grid grid-cols-2 gap-4 max-w-[42rem] mx-auto">
              {services.slice(3, 5).map((service) => (
                <div key={service.id} className="h-[310px]">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServicesSection;
