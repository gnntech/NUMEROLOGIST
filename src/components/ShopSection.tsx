import React from 'react';
import { motion } from 'framer-motion';

interface ShopCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ShopSection: React.FC = () => {
  const shopCards: ShopCard[] = [
    {
      id: 1,
      image: '/Shop1.png',
      title: 'JEWELRY & WEARABLES',
      description: 'Everyday pieces designed with simplicity, comfort, and intention.'
    },
    {
      id: 2,
      image: '/Shop2.png',
      title: 'DECOR & LIFESTYLE',
      description: 'Calming essentials created to support mindful moments and balance.'
    },
    {
      id: 3,
      image: '/Shop3.png',
      title: 'WELLNESS ITEMS',
      description: 'Thoughtful pieces that add warmth and harmony to your space.'
    }
  ];

  return (
    <motion.div 
      className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/Shop_bg.png)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Optional overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-bebas tracking-wide mb-4 sm:mb-6"
            style={{ color: '#FFFAE5' }}
          >
            MEANINGFUL GIFTS GUIDED BY NUMBERS
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl leading-relaxed font-matter max-w-4xl mx-auto mb-6 sm:mb-8"
            style={{ color: '#FFFAE5', opacity: 0.9 }}
          >
            Explore a collection of consciously created pieces, thoughtfully designed to bring harmony, 
            clarity, and uplifting energy into everyday life.
          </p>
          
          {/* Primary CTA Button */}
          <motion.button 
            className="bg-transparent border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg font-matter"
            style={{ 
              borderColor: '#FFFAE5',
              color: '#FFFAE5'
            }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Explore the Shop
          </motion.button>
        </motion.div>

        {/* Shop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {shopCards.map((card, index) => (
            <motion.div 
              key={card.id}
              className="rounded-3xl shadow-lg overflow-hidden transition-all duration-300"
              style={{ backgroundColor: '#FFFAE5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
              }}
            >
              {/* Card Image - No padding, extends to edges */}
              <div className="w-full h-48 sm:h-56 lg:h-64">
                <motion.img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Card Content - Only text has padding */}
              <div className="p-6 sm:p-8 text-center">
                <h3 
                  className="text-lg sm:text-xl font-bold font-bebas tracking-wide mb-3 sm:mb-4"
                  style={{ color: '#A04347' }}
                >
                  {card.title}
                </h3>
                <p 
                  className="text-sm sm:text-base leading-relaxed font-matter"
                  style={{ color: '#A04347' }}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ShopSection;