import React, { useState, useEffect } from "react";

// Inline SVG icons
const ChevronLeft = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const images = [
  {
    src: "/numerology-report.jpeg",
    mobileSrc: "/mobile-numerology-report.jpg",
    alt: "Personal Numerology Report",
  },
  {
    src: "/lucky-jewellery.jpeg",
    mobileSrc: "/mobile-lucky-jewellery.jpg",
    alt: "Lucky Number Jewellery",
  },
  {
    src: "/career-analysis.jpeg",
    mobileSrc: "/mobile-career-analysis.jpg",
    alt: "Career Number Analysis",
  },
];

const PromoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[100svh] w-screen bg-[#120B07] flex flex-col overflow-hidden">

      
      <div className="relative h-[85%] w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <picture
              key={index}
              className="block h-full w-full flex-shrink-0"
            >
              <source media="(max-width: 640px)" srcSet={img.mobileSrc} />
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </picture>
          ))}
        </div>

        
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? images.length - 1 : currentIndex - 1
            )
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <ChevronLeft size={22} />
        </button>

        
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === images.length - 1 ? 0 : currentIndex + 1
            )
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      
      <div className="h-14 w-full bg-gradient-to-r from-[#FF8A00] to-[#FFB347] overflow-hidden">
        <div className="flex h-full items-center animate-marquee whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="mx-8 text-sm font-semibold text-[#1A0D05]"
            >
              ✨ Book Now & Get 25% OFF
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PromoSection;