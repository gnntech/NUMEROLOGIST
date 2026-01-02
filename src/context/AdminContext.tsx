import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
export interface PromoCard {
  id: string;
  title: string;
  image: string;
  mobileImage: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
}

interface AdminData {
  promoCards: PromoCard[];
  testimonials: Testimonial[];
  products: Product[];
  marqueeText: string;
}

interface AdminContextType {
  data: AdminData;
  updatePromoCards: (cards: PromoCard[]) => void;
  updateTestimonials: (testimonials: Testimonial[]) => void;
  updateProducts: (products: Product[]) => void;
  updateMarqueeText: (text: string) => void;
}

const defaultData: AdminData = {
  promoCards: [
    { id: '1', title: 'Card 1', image: '/numerology-report.jpeg', mobileImage: '/mobile-numerology-report.jpg', description: 'Personal Numerology Report' },
    { id: '2', title: 'Card 2', image: '/lucky-jewellery.jpeg', mobileImage: '/mobile-lucky-jewellery.jpg', description: 'Lucky Number Jewellery' },
    { id: '3', title: 'Card 3', image: '/career-analysis.jpeg', mobileImage: '/mobile-career-analysis.jpg', description: 'Career Number Analysis' },
  ],
  testimonials: [
    { id: '1', name: 'Sneha Iyer', location: 'Mumbai', quote: 'Through my Life Path and Destiny reading, I gained a deep understanding of my life purpose and where I\'m truly headed.', rating: 5 },
  ],
  products: [
    { id: '1', name: 'Numerology Report', image: '/Shop1.png', price: '₹999', description: 'Detailed numerology analysis' },
    { id: '2', name: 'Lucky Bracelet', image: '/Shop2.png', price: '₹1499', description: 'Personalized lucky number bracelet' },
    { id: '3', name: 'Career Guide', image: '/Shop3.png', price: '₹799', description: 'Career path numerology guide' },
  ],
  marqueeText: '✨ Book Now & Get 25% OFF',
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<AdminData>(() => {
    const saved = localStorage.getItem('adminData');
    return saved ? JSON.parse(saved) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('adminData', JSON.stringify(data));
  }, [data]);

  const updatePromoCards = (cards: PromoCard[]) => {
    setData(prev => ({ ...prev, promoCards: cards }));
  };

  const updateTestimonials = (testimonials: Testimonial[]) => {
    setData(prev => ({ ...prev, testimonials }));
  };

  const updateProducts = (products: Product[]) => {
    setData(prev => ({ ...prev, products }));
  };

  const updateMarqueeText = (text: string) => {
    setData(prev => ({ ...prev, marqueeText: text }));
  };

  return (
    <AdminContext.Provider value={{ data, updatePromoCards, updateTestimonials, updateProducts, updateMarqueeText }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};
