import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: 'url(/Footer_bg.png)' }}
    >
      {/* Main Footer Content */}
      <div className="relative z-10 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            
            {/* Column 1 - Brand Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-bebas tracking-wide uppercase text-cream">
                GAURAB NERPAGAR NUMEROLOGICS
              </h3>
              
              <p className="text-cream/90 leading-relaxed font-matter text-base">
                Ayunext Solutions delivers business-focused technology and financial services to help companies grow, streamline operations, and secure their financial future. Our mission is to combine innovation with practical solutions that drive measurable results for our clients.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-6 pt-2">
                <a 
                  href="#" 
                  className="text-cream/80 hover:text-cream transition-colors duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="text-cream/80 hover:text-cream transition-colors duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="text-cream/80 hover:text-cream transition-colors duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="text-cream/80 hover:text-cream transition-colors duration-300 transform hover:scale-110"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-bebas tracking-wide uppercase text-cream">
                QUICK LINKS
              </h3>
              
              <nav className="space-y-3">
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  Home
                </a>
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  About Us
                </a>
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  Services
                </a>
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  Insights / Blog
                </a>
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Column 3 - Services */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-bebas tracking-wide uppercase text-cream">
                SERVICES
              </h3>
              
              <nav className="space-y-3">
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  Software Development
                </a>
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  Cross-Platform Apps
                </a>
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  Digital Marketing
                </a>
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  Financial Consulting
                </a>
                <a 
                  href="#" 
                  className="block text-cream/90 hover:text-cream hover:underline transition-all duration-300 font-matter text-base"
                >
                  Cloud Solutions
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="relative z-10 border-t border-cream/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-cream/80 font-matter">
              © Copyright 2025 GNN. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;