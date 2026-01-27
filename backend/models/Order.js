const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    razorpay_order_id: { type: String, required: true },
    razorpay_payment_id: { type: String },
    razorpay_signature: { type: String },

    amount: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    status: { type: String, enum: ['created', 'paid', 'failed'], default: 'created' },

    customer: {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        phone: { type: String },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        pincode: { type: String }
    },

    items: [{
        product_id: { type: String },
        name: { type: String },
        price: { type: String },
        quantity: { type: Number },
        image: { type: String }
    }],

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
