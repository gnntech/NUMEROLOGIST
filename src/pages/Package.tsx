import React from 'react';

const Package: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect numerology package that suits your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Basic Reading</h3>
            <div className="text-4xl font-bold text-amber-900 mb-6">₹999</div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Life Path Number</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Destiny Number</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic Report</li>
            </ul>
            <button className="w-full bg-amber-900 text-white py-3 rounded-full hover:bg-amber-800 transition-colors">
              Choose Package
            </button>
          </div>

          <div className="bg-amber-900 text-white rounded-2xl p-8 text-center shadow-lg transform scale-105">
            <div className="bg-orange-200 text-amber-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">Most Popular</div>
            <h3 className="text-2xl font-bold mb-4">Complete Analysis</h3>
            <div className="text-4xl font-bold mb-6">₹2499</div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center"><span className="text-orange-200 mr-2">✓</span>All Basic Features</li>
              <li className="flex items-center"><span className="text-orange-200 mr-2">✓</span>Career Guidance</li>
              <li className="flex items-center"><span className="text-orange-200 mr-2">✓</span>Relationship Analysis</li>
              <li className="flex items-center"><span className="text-orange-200 mr-2">✓</span>30-min Consultation</li>
            </ul>
            <button className="w-full bg-orange-200 text-amber-900 py-3 rounded-full hover:bg-orange-100 transition-colors">
              Choose Package
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Premium</h3>
            <div className="text-4xl font-bold text-amber-900 mb-6">₹4999</div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Complete Analysis</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Yearly Predictions</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Lucky Numbers</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>60-min Consultation</li>
            </ul>
            <button className="w-full bg-amber-900 text-white py-3 rounded-full hover:bg-amber-800 transition-colors">
              Choose Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;