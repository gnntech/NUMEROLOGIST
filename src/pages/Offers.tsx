import React from 'react';

const Offers: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Special Offers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take advantage of our limited-time offers and start your numerology journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-amber-900 to-orange-800 text-white rounded-2xl p-8">
            <div className="bg-orange-200 text-amber-900 px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
              LIMITED TIME
            </div>
            <h3 className="text-3xl font-bold mb-4">50% OFF First Reading</h3>
            <p className="text-orange-100 mb-6">
              Get your first numerology reading at half the price. Perfect for newcomers to discover the power of numbers.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl line-through opacity-75">₹999</span>
              <span className="text-4xl font-bold">₹499</span>
            </div>
            <button className="bg-orange-200 text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors">
              Claim Offer
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-900">
            <div className="bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
              BUNDLE DEAL
            </div>
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Complete Package</h3>
            <p className="text-gray-600 mb-6">
              Get all three services together and save big. Includes Life Path Reading, Career Guidance, and Yearly Predictions.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl line-through opacity-75 text-gray-500">₹7497</span>
              <span className="text-4xl font-bold text-amber-900">₹4999</span>
            </div>
            <button className="bg-amber-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors">
              Get Bundle
            </button>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Refer a Friend</h3>
          <p className="text-gray-600 mb-6">
            Refer a friend and both of you get 25% off your next reading. Share the wisdom of numerology!
          </p>
          <button className="bg-amber-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors">
            Start Referring
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;