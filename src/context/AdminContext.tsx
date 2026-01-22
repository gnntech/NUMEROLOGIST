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
  quote?: string;
  rating: number;
  video?: string;
  avatar?: string;
  isVideoTestimonial: boolean;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  amazonLink?: string;
  inStock?: boolean;
}

export interface PackageInclude {
  text: string;
  highlight: boolean;
}

export interface Package {
  id: string;
  name: string;
  icon: string;
  includes: PackageInclude[];
}

interface AdminData {
  promoCards: PromoCard[];
  testimonials: Testimonial[];
  products: Product[];
  packages: Package[];
  marqueeText: string;
}

interface AdminContextType {
  data: AdminData | null;
  loading: boolean;
  updatePromoCards: (cards: PromoCard[]) => Promise<void>;
  updateTestimonials: (testimonials: Testimonial[]) => Promise<void>;
  updateProducts: (products: Product[]) => Promise<void>;
  updatePackages: (packages: Package[]) => Promise<void>;
  updateMarqueeText: (text: string) => Promise<void>;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const defaultData: AdminData = {
  promoCards: [
    { id: '1', title: 'Card 1', image: '/numerology-report.jpeg', mobileImage: '/mobile-numerology-report.jpg', description: 'Personal Numerology Report' },
    { id: '2', title: 'Card 2', image: '/lucky-jewellery.jpeg', mobileImage: '/mobile-lucky-jewellery.jpg', description: 'Lucky Number Jewellery' },
    { id: '3', title: 'Card 3', image: '/career-analysis.jpeg', mobileImage: '/mobile-career-analysis.jpg', description: 'Career Number Analysis' },
  ],
  testimonials: [],
  products: [],
  packages: [],
  marqueeText: 'Book Now & Get 25% OFF',
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from API on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/admin/data`);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        // Fallback to default data if API fails
        setData(defaultData);
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
      // Fallback to default data
      setData(defaultData);
    } finally {
      setLoading(false);
    }
  };

  const updatePromoCards = async (cards: PromoCard[]) => {
    try {
      const response = await fetch(`${API_URL}/admin/data/promo-cards`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ promoCards: cards }),
      });
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error('Error updating promo cards:', error);
      throw error;
    }
  };

  const updateTestimonials = async (testimonials: Testimonial[]) => {
    try {
      const response = await fetch(`${API_URL}/admin/data/testimonials`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testimonials }),
      });
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error('Error updating testimonials:', error);
      throw error;
    }
  };

  const updateProducts = async (products: Product[]) => {
    try {
      const response = await fetch(`${API_URL}/admin/data/products`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products }),
      });
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error('Error updating products:', error);
      throw error;
    }
  };

  const updatePackages = async (packages: Package[]) => {
    try {
      const response = await fetch(`${API_URL}/admin/data/packages`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packages }),
      });
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error('Error updating packages:', error);
      throw error;
    }
  };

  const updateMarqueeText = async (text: string) => {
    try {
      const response = await fetch(`${API_URL}/admin/data/marquee`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ marqueeText: text }),
      });
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error('Error updating marquee text:', error);
      throw error;
    }
  };

  return (
    <AdminContext.Provider value={{ data, loading, updatePromoCards, updateTestimonials, updateProducts, updatePackages, updateMarqueeText }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};
