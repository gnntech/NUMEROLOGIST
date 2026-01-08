import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  amazonLink: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Tiger Eye Bracelet',
    description: 'Strength, focus, and confident energy.',
    price: 900,
    image: '/Card1.png',
    amazonLink: 'https://amazon.in',
    inStock: true,
  },
  {
    id: 2,
    name: 'Howlite Bracelet',
    description: 'Promotes calm, balance, and clarity.',
    price: 900,
    image: '/Card2.png',
    amazonLink: 'https://amazon.in',
    inStock: false,
  },
  {
    id: 3,
    name: 'Moonstone Bracelet',
    description: 'Soft, calming energy with a gentle glow.',
    price: 1200,
    image: '/Card3.png',
    amazonLink: 'https://amazon.in',
    inStock: true,
  },
  {
    id: 4,
    name: 'Green Jade Bracelet',
    description: 'A symbol of peace and balance.',
    price: 900,
    image: '/Card9.png',
    amazonLink: 'https://amazon.in',
    inStock: true,
  },
  {
    id: 5,
    name: 'Seven Chakra Bracelet',
    description: 'Balanced stones for overall harmony.',
    price: 1000,
    image: '/Card6.png',
    amazonLink: 'https://amazon.in',
    inStock: true,
  },
  {
    id: 6,
    name: 'Amazonite Bracelet',
    description: 'Soothing tones with a refreshing feel.',
    price: 900,
    image: '/Card5.png',
    amazonLink: 'https://amazon.in',
    inStock: false,
  },
  {
    id: 7,
    name: 'Sulemani Haquik Bracelet',
    description: 'Traditionally worn for grounding energy.',
    price: 1000,
    image: '/Card7.png',
    amazonLink: 'https://amazon.in',
    inStock: false,
  },
  {
    id: 8,
    name: 'Turquoise Bracelet',
    description: 'Protective energy with timeless appeal.',
    price: 900,
    image: '/Card8.png',
    amazonLink: 'https://amazon.in',
    inStock: true,
  },
  {
    id: 9,
    name: 'Bloodstone Bracelet',
    description: 'Grounding energy with a bold, earthy presence.',
    price: 900,
    image: '/Card9.png',
    amazonLink: 'https://amazon.in',
    inStock: true,
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg p-5 flex flex-col"
      style={{ minHeight: '550px' }}
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <div className="relative mb-4 rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: '1/1' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {!product.inStock && (
          <div 
            className="absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full font-matter"
            style={{ backgroundColor: '#FE7028' }}
          >
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col px-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-xl text-gray-900 font-matter">
            {product.name}
          </h3>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all"
            style={{ borderColor: isLiked ? '#FE7028' : '#E5E7EB' }}
          >
            <svg 
              className="w-5 h-5" 
              fill={isLiked ? '#FE7028' : 'none'} 
              stroke={isLiked ? '#FE7028' : '#9CA3AF'}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4 font-matter">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <p className="text-3xl font-bold text-gray-900 mb-4 font-matter">
            ₹{product.price}
          </p>
          
          {/* Two Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={product.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 py-3 rounded-full font-semibold text-center flex items-center justify-center gap-2 font-matter ${
                product.inStock 
                  ? 'text-white cursor-pointer' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              style={{ backgroundColor: product.inStock ? '#FE7028' : undefined }}
              whileHover={product.inStock ? { scale: 1.02 } : {}}
              whileTap={product.inStock ? { scale: 0.98 } : {}}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Buy Now
            </motion.a>
            
            <motion.button
              className={`flex-1 py-3 rounded-full font-semibold text-center flex items-center justify-center gap-2 font-matter border-2 ${
                product.inStock 
                  ? 'cursor-pointer' 
                  : 'border-gray-300 text-gray-400 cursor-not-allowed'
              }`}
              style={{ 
                borderColor: product.inStock ? '#FE7028' : undefined,
                color: product.inStock ? '#FE7028' : undefined
              }}
              whileHover={product.inStock ? { scale: 1.02, backgroundColor: 'rgba(254, 112, 40, 0.1)' } : {}}
              whileTap={product.inStock ? { scale: 0.98 } : {}}
              disabled={!product.inStock}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #616060 0%, #222222 100%)',
        }}
      >
        {/* Background Image - Desktop */}
        <div 
          className="hidden lg:block absolute left-0 top-0 bottom-0 w-[70%] bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/Main_Shop_bg.png)',
            backgroundSize: '115%',
            backgroundPosition: 'left bottom'
          }}
        />
        
        <div className="relative z-10 min-h-[50vh] lg:min-h-screen flex flex-col lg:flex-row lg:items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-20">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
             
              <div className="hidden lg:block">
              </div>
              
              {/* Right - Content */}
              <div className="text-center lg:text-left py-4 lg:py-0 lg:pl-32 px-4 sm:px-0">
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold font-bebas tracking-wider mb-6"
                  style={{ color: '#FE7028' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  SHOP
                </motion.h1>
                
                <motion.p
                  className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90 mb-4 font-matter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Explore a curated collection of spiritual tools chosen to support balance, clarity, and inner alignment. Each item is thoughtfully selected to complement your personal energy and numerology path.
                </motion.p>
                
                <motion.p
                  className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90 font-matter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  All products redirect you to Amazon for a safe and seamless purchase experience.
                </motion.p>
              </div>
            </div>
            
            {/* Mobile Image */}
            <div className="lg:hidden mt-4 pb-4 -ml-4">
              <img 
                src="/Main_Shop_bg.png" 
                alt="Shop" 
                className="w-[120%] max-w-none object-contain object-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section 
        className="py-16 sm:py-20 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
