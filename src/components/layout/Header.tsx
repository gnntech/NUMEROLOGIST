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
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-amber-900/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-orange-100 font-matter">
              GNN
            </Link>
          </div>

          {/* Center Nav - Pill Container */}
          <nav className="hidden lg:flex items-center rounded-full px-2 py-2 border border-orange-200/30" style={{ backgroundColor: 'rgba(69, 26, 3, 0.6)' }}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 text-sm font-medium font-matter rounded-full transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-orange-200/30 text-orange-100'
                    : 'text-orange-100/80 hover:text-orange-100 hover:bg-orange-200/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-5 py-2 text-sm font-medium font-matter rounded-full transition-all duration-200 ${
                location.pathname === '/contact'
                  ? 'bg-orange-200/30 text-orange-100'
                  : 'text-orange-100/80 hover:text-orange-100 hover:bg-orange-200/20'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Call Now Button */}
          <div className="hidden lg:flex">
            <button className="bg-orange-200 hover:bg-orange-100 text-amber-900 px-6 py-2.5 rounded-full font-medium transition-all duration-200 font-matter text-sm flex items-center space-x-2">
              <img
                src="/CALL.png"
                alt="Call"
                className="h-4 w-4 object-contain"
              />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-orange-100 hover:text-orange-200 focus:outline-none"
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
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 rounded-2xl mt-2 border border-orange-200/30" style={{ backgroundColor: 'rgba(69, 26, 3, 0.95)' }}>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium font-matter rounded-xl transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-orange-100 bg-orange-200/20'
                      : 'text-orange-100/80 hover:text-orange-100 hover:bg-orange-200/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full mt-3 bg-orange-200 hover:bg-orange-100 text-amber-900 px-4 py-3 rounded-xl font-medium transition-all duration-200 text-center font-matter"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
