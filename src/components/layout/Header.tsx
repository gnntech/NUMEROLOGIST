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
    { name: 'Services', path: '/services' },
    { name: 'Package', path: '/package' },
    { name: 'Offers', path: '/offers' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-amber-900/95 shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Hidden on mobile, we'll use the navigation space */}
          <div className="flex-shrink-0 hidden lg:block">
            <Link to="/" className="text-2xl font-bold text-orange-100 font-matter">
              GNN
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <nav className="hidden md:flex space-x-8 mx-auto lg:mx-0">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium font-matter transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-orange-200 border-b-2 border-orange-200'
                    : 'text-orange-100 hover:text-orange-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-orange-200 hover:bg-orange-100 text-amber-900 px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2 font-matter">
              <img 
                src="/CALL.png" 
                alt="Call" 
                className="h-4 w-4 object-contain"
              />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-orange-100 hover:text-orange-200 focus:outline-none focus:text-orange-200"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-amber-900/95 backdrop-blur-sm border-t border-orange-300/20">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium font-matter transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-orange-200 bg-orange-800/50'
                      : 'text-orange-100 hover:text-orange-200 hover:bg-orange-800/30'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 bg-orange-200 hover:bg-orange-100 text-amber-900 px-6 py-2 rounded-full font-medium transition-colors duration-200 text-center flex items-center justify-center space-x-2 font-matter">
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