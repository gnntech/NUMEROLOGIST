import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Razorpay type
declare global {
    interface Window {
        Razorpay: any;
    }
}

const Checkout: React.FC = () => {
    const { cartItems, totalAmount, clearCart, updateQuantity } = useCart();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.firstName || !formData.phone || !formData.address || !formData.pincode) {
            toast.error('Please fill in all required shipping details');
            return;
        }

        setLoading(true);

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

            // 1. Create Order on Backend
            const response = await fetch(`${API_URL}/payment/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: totalAmount,
                    currency: 'INR',
                    customer: formData,
                    items: cartItems.map(item => ({
                        product_id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        image: item.image
                    }))
                }),
            });

            if (!response.ok) throw new Error('Order creation failed');
            const orderData = await response.json();

            // 2. Open Razorpay
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID || '',
                amount: orderData.amount,
                currency: orderData.currency,
                name: 'Numerologist Shop',
                description: `Order for ${cartItems.length} items`,
                // image: '/GaurabNPP.png', // Removed to fix Mixed Content Error on localhost
                order_id: orderData.id,
                handler: async function (response: any) {
                    // 3. Verify Payment
                    try {
                        const verifyResponse = await fetch(`${API_URL}/payment/verify`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            }),
                        });

                        const verifyData = await verifyResponse.json();

                        if (verifyData.success) {
                            toast.success('Order Placed Successfully!');
                            clearCart();
                            // In a real app, you would verify order in DB here and redirect to success page
                            setTimeout(() => navigate('/shop'), 3000);
                        } else {
                            toast.error('Payment Verification Failed');
                        }
                    } catch (error) {
                        console.error('Verify Error', error);
                        toast.error('Verification failed');
                    }
                },
                prefill: {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: {
                    color: '#FE7028',
                },
                config: {
                    display: {
                        blocks: {
                            upi: {
                                name: "Pay via UPI",
                                instruments: [
                                    {
                                        method: "upi"
                                    }
                                ]
                            },
                            other: {
                                name: "Other Payment Modes",
                                instruments: [
                                    {
                                        method: "card"
                                    },
                                    {
                                        method: "netbanking"
                                    },
                                    {
                                        method: "wallet"
                                    }
                                ]
                            }
                        },
                        sequence: ["block.upi", "block.other"],
                        preferences: {
                            show_default_blocks: true
                        }
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (error) {
            console.error(error);
            toast.error('Failed to initiate payment');
        } finally {
            setLoading(false);
        }
    };

    if (cartItems.length === 0) {
        // Redirect or show message if somehow accessed with empty cart
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                    <button onClick={() => navigate('/shop')} className="text-[#FE7028] hover:underline">Return to Shop</button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <ToastContainer position="top-center" style={{ zIndex: 99999 }} />
            {/* Header Spacer */}
            <div className="h-20 lg:h-24 bg-[#232323]"></div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
                <h1 className="text-3xl md:text-4xl font-bold font-bebas mb-8 text-gray-900 border-b pb-4">
                    Checkout
                </h1>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Left: Shipping Form */}
                    <div className="lg:w-2/3">
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm">
                            <h2 className="text-xl font-bold font-matter mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-[#FE7028] text-white flex items-center justify-center text-sm">1</span>
                                Shipping Details
                            </h2>

                            <form onSubmit={handlePayment} className="grid grid-cols-1 md:grid-cols-2 gap-6 font-matter">

                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                    <input
                                        type="text" name="firstName" required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FE7028] focus:border-transparent outline-none transition-all"
                                        placeholder="Enter first name"
                                        value={formData.firstName} onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text" name="lastName"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FE7028] focus:border-transparent outline-none transition-all"
                                        placeholder="Enter last name"
                                        value={formData.lastName} onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Optional)</label>
                                    <input
                                        type="email" name="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FE7028] focus:border-transparent outline-none transition-all"
                                        placeholder="Enter email for receipt"
                                        value={formData.email} onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-3 text-gray-500">+91</span>
                                        <input
                                            type="tel" name="phone" required pattern="[0-9]{10}"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FE7028] focus:border-transparent outline-none transition-all"
                                            placeholder="10-digit mobile number"
                                            value={formData.phone} onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                                    <textarea
                                        name="address" required rows={3}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FE7028] focus:border-transparent outline-none transition-all"
                                        placeholder="Street address, Flat No, Landmark"
                                        value={formData.address} onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                                    <input
                                        type="text" name="city" required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FE7028] focus:border-transparent outline-none transition-all"
                                        placeholder="City"
                                        value={formData.city} onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                                    <input
                                        type="text" name="state" required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FE7028] focus:border-transparent outline-none transition-all"
                                        placeholder="State"
                                        value={formData.state} onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                                    <input
                                        type="text" name="pincode" required pattern="[0-9]{6}"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FE7028] focus:border-transparent outline-none transition-all"
                                        placeholder="6-digit Pincode"
                                        value={formData.pincode} onChange={handleInputChange}
                                    />
                                </div>

                            </form>
                        </div>
                    </div>

                    {/* Right: Order Details */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg sticky top-28">
                            <h3 className="text-xl font-bold font-bebas mb-6">Your Order</h3>

                            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between items-start gap-4">
                                        <div className="flex gap-3">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900 font-matter line-clamp-1">{item.name}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded text-gray-600 hover:bg-[#FE7028] hover:text-white transition-colors text-xs"
                                                    >
                                                        -
                                                    </button>
                                                    <p className="text-xs text-gray-500 w-4 text-center">{item.quantity}</p>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded text-gray-600 hover:bg-[#FE7028] hover:text-white transition-colors text-xs"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold text-gray-900">{item.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="h-px bg-gray-200 my-4"></div>

                            <div className="space-y-4 mb-6 text-sm font-matter">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-dashed">
                                    <span>Total to Pay</span>
                                    <span>₹{totalAmount.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handlePayment}
                                disabled={loading}
                                className={`w-full py-4 text-white font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-1 font-matter flex items-center justify-center gap-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FE7028] hover:shadow-xl hover:bg-[#e5601d]'
                                    }`}
                            >
                                {loading ? (
                                    <>Processing...</>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        Pay ₹{totalAmount.toFixed(2)} Now
                                    </>
                                )}
                            </button>

                            <div className="mt-6 flex justify-center gap-4 opacity-50 grayscale">
                                {/* Add payment icons here if available, or just text */}
                                <span className="text-xs">Secured by Razorpay</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;
