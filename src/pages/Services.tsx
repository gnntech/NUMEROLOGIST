import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the power of numerology through our comprehensive services designed to guide you on your life journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-amber-900 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🔮</span>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Life Path Reading</h3>
            <p className="text-gray-600 mb-6">
              Understand your life purpose and future direction through your Life Path and Destiny numbers.
            </p>
            <button className="bg-amber-900 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-amber-900 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Numerology Report</h3>
            <p className="text-gray-600 mb-6">
              A detailed analysis of your birth numbers that reveals your personality traits and life patterns.
            </p>
            <button className="bg-amber-900 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-amber-900 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Career Guidance</h3>
            <p className="text-gray-600 mb-6">
              Get guidance on career choices and financial growth by aligning your numerology numbers.
            </p>
            <button className="bg-amber-900 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;