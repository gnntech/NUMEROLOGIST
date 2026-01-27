import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

const Cart: React.FC = () => {
    const { cartItems, removeFromCart, updateQuantity, totalAmount, cartCount } = useCart();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header Spacer */}
            <div className="h-20 lg:h-24 bg-[#232323]"></div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
                <h1 className="text-3xl md:text-4xl font-bold font-bebas mb-8 text-gray-900">
                    Your Shopping Cart ({cartCount} Items)
                </h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
                        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 font-matter">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8 font-matter">Looks like you haven't added anything yet.</p>
                        <Link
                            to="/shop"
                            className="inline-block px-8 py-3 bg-[#FE7028] text-white font-medium rounded-full hover:bg-[#e5601d] transition-colors font-matter"
                        >
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items List */}
                        <div className="lg:w-2/3 space-y-6">
                            {cartItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center gap-6"
                                >
                                    <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="text-lg font-bold text-gray-900 font-matter mb-1">{item.name}</h3>
                                        <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                                        <p className="text-[#FE7028] font-bold text-xl">{item.price}</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center border border-gray-200 rounded-full px-2 py-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#FE7028]"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#FE7028]"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                            aria-label="Remove item"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg sticky top-28">
                                <h3 className="text-xl font-bold font-bebas mb-6">Order Summary</h3>

                                <div className="space-y-4 mb-6 text-sm font-matter">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>₹{totalAmount.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping Estimate</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax Estimate (18%)</span>
                                        <span>Included</span>
                                    </div>
                                    <div className="h-px bg-gray-200 my-4"></div>
                                    <div className="flex justify-between text-lg font-bold text-gray-900">
                                        <span>Order Total</span>
                                        <span>₹{totalAmount.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="w-full py-4 bg-[#FE7028] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-[#e5601d] transition-all transform hover:-translate-y-1 font-matter flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Proceed to Checkout
                                </button>

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    Secure Checkout powered by Razorpay
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
