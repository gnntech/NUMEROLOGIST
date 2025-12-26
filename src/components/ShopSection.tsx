import React from 'react';

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
    <div 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/Shop_bg.png)' }}
    >
      {/* Optional overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold font-bebas tracking-wide mb-6"
            style={{ color: '#FFFAE5' }}
          >
            MEANINGFUL GIFTS GUIDED BY NUMBERS
          </h2>
          <p 
            className="text-lg md:text-xl leading-relaxed font-matter max-w-4xl mx-auto mb-8"
            style={{ color: '#FFFAE5', opacity: 0.9 }}
          >
            Explore a collection of consciously created pieces, thoughtfully designed to bring harmony, 
            clarity, and uplifting energy into everyday life.
          </p>
          
          {/* Primary CTA Button */}
          <button 
            className="bg-transparent border-2 hover:bg-white hover:bg-opacity-20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-matter"
            style={{ 
              borderColor: '#FFFAE5',
              color: '#FFFAE5'
            }}
          >
            Explore the Shop
          </button>
        </div>

        {/* Shop Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopCards.map((card) => (
            <div 
              key={card.id}
              className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ backgroundColor: '#FFFAE5' }}
            >
              {/* Card Image - No padding, extends to edges */}
              <div className="w-full" style={{ height: '250px' }}>
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content - Only text has padding */}
              <div className="p-8 text-center">
                <h3 
                  className="text-xl font-bold font-bebas tracking-wide mb-4"
                  style={{ color: '#A04347' }}
                >
                  {card.title}
                </h3>
                <p 
                  className="text-base leading-relaxed font-matter"
                  style={{ color: '#A04347' }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSection;