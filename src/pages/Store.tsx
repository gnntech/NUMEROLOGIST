import React from 'react';

const Store: React.FC = () => {
  const products = [
    { id: 1, name: 'Digital Guide', price: '$29', description: 'Comprehensive digital guide with step-by-step instructions.' },
    { id: 2, name: 'Premium Package', price: '$79', description: 'Complete package with bonus materials and resources.' },
    { id: 3, name: 'Masterclass Access', price: '$149', description: 'Exclusive access to our comprehensive masterclass series.' },
    { id: 4, name: 'Personal Workbook', price: '$39', description: 'Interactive workbook for personal development and growth.' },
    { id: 5, name: 'Video Course', price: '$99', description: 'In-depth video course with practical exercises and examples.' },
    { id: 6, name: 'Complete Bundle', price: '$199', description: 'Everything you need in one comprehensive bundle package.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Store</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our collection of premium products designed to help you achieve your goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Special Offer</h2>
        <p className="text-gray-600 mb-6">
          Get 20% off your first purchase when you sign up for our newsletter!
        </p>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
          Claim Your Discount
        </button>
      </div>
    </div>
  );
};

export default Store;