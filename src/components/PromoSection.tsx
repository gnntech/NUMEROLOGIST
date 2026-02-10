import React, { useState, useEffect } from "react";
import { useAdmin } from "../context/AdminContext";

const ChevronLeft = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FE7028" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FE7028" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const PromoSlider: React.FC = () => {
  const { data } = useAdmin();
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!data || data.promoCards.length === 0) return;

    const totalCards = data.promoCards.length;

    if (currentIndex === 0) {
      setTimeout(() => setCurrentIndex(totalCards), 700);
    } else if (currentIndex === totalCards + 1) {
      setTimeout(() => setCurrentIndex(1), 700);
    }
  }, [currentIndex, data]);

  if (!data || data.promoCards.length === 0) {
    return null;
  }

  const promoCards = data.promoCards;
  const totalCards = promoCards.length;

  // Create infinite loop by duplicating first and last cards
  const extendedCards = [
    promoCards[totalCards - 1],
    ...promoCards,
    promoCards[0],
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}>
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedCards.map((card, index) => (
          <picture key={index} className="block h-full w-full flex-shrink-0">
            <source media="(max-width: 640px)" srcSet={card.mobileImage} />
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-contain"
            />
          </picture>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all z-10"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all z-10"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {promoCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`h-2 rounded-full transition-all ${
              index === (currentIndex - 1 + totalCards) % totalCards
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;