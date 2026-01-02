import React, { useState, useEffect } from "react";
import { useAdmin } from "../context/AdminContext";

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

const PromoSlider: React.FC = () => {
  const { data } = useAdmin();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index if cards change
  useEffect(() => {
    if (currentIndex >= data.promoCards.length) {
      setCurrentIndex(0);
    }
  }, [data.promoCards.length, currentIndex]);

  useEffect(() => {
    if (data.promoCards.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === data.promoCards.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [data.promoCards.length]);

  if (data.promoCards.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.promoCards.map((card) => (
          <picture key={card.id} className="block h-full w-full flex-shrink-0">
            <source media="(max-width: 640px)" srcSet={card.mobileImage} />
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover"
            />
          </picture>
        ))}
      </div>

      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? data.promoCards.length - 1 : currentIndex - 1
          )
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex === data.promoCards.length - 1 ? 0 : currentIndex + 1
          )
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
};

export default PromoSlider;
