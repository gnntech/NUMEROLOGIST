import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fallbackData } from '../data/fallbackData';

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
  packages: Package[];
  marqueeText: string;
}

interface AdminContextType {
  data: AdminData | null;
  loading: boolean;
  updatePromoCards: (cards: PromoCard[]) => Promise<void>;
  updateTestimonials: (testimonials: Testimonial[]) => Promise<void>;
  updatePackages: (packages: Package[]) => Promise<void>;
  updateMarqueeText: (text: string) => Promise<void>;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Remove the old defaultData - we'll use fallbackData from the imported file

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
        console.log('✅ Data loaded from API');
      } else {
        console.warn('⚠️ API returned error, using fallback data');
        setData(fallbackData);
      }
    } catch (error) {
      console.error('❌ Error fetching admin data, using fallback data:', error);
      // Use fallback data when API is unavailable
      setData(fallbackData);
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
    <AdminContext.Provider value={{ data, loading, updatePromoCards, updateTestimonials, updatePackages, updateMarqueeText }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};
