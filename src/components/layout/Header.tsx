import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Package', path: '/package' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(50, 50, 50, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold font-matter text-white">
              GNN
            </Link>
          </div>

          {/* Center Nav - Glassmorphism Pill */}
          <nav 
            className="hidden lg:flex items-center rounded-full px-2 py-2 backdrop-blur-md"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-5 py-2 text-sm font-medium font-matter rounded-full transition-all duration-200"
                style={{
                  backgroundColor: location.pathname === item.path ? '#FE7028' : 'transparent',
                  color: '#FFFFFF'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Call Now Button */}
          <div className="hidden lg:flex">
            <button 
              className="px-5 py-2.5 rounded-full font-medium transition-all duration-200 font-matter text-sm flex items-center space-x-2"
              style={{ backgroundColor: '#FE7028', color: '#FFFFFF' }}
            >
              <img
                src="/CALL.png"
                alt="Call"
                className="h-4 w-4 object-contain"
              />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-2 rounded-lg backdrop-blur-md"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4">
            <div 
              className="px-2 pt-2 pb-4 space-y-1 rounded-2xl backdrop-blur-md"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium font-matter rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: location.pathname === item.path ? '#FE7028' : 'transparent',
                    color: '#FFFFFF'
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                className="w-full mt-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 font-matter flex items-center justify-center space-x-2"
                style={{ backgroundColor: '#FE7028', color: '#FFFFFF' }}
              >
                <img
                  src="/CALL.png"
                  alt="Call"
                  className="h-4 w-4 object-contain"
                />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
