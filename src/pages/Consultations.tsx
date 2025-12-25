import React from 'react';

const Consultations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Consultations</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Consultation</h3>
            <p className="text-gray-600 mb-4">
              Perfect for getting started with personalized guidance and insights.
            </p>
            <div className="text-2xl font-bold text-primary-600 mb-4">$99</div>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
              Book Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-primary-600">
            <div className="text-center mb-2">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">Popular</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Consultation</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive analysis with detailed recommendations and follow-up.
            </p>
            <div className="text-2xl font-bold text-primary-600 mb-4">$199</div>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
              Book Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">VIP Consultation</h3>
            <p className="text-gray-600 mb-4">
              Exclusive one-on-one session with priority support and custom solutions.
            </p>
            <div className="text-2xl font-bold text-primary-600 mb-4">$399</div>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>

        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Choose the consultation package that best fits your needs and book your session today.
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultations;