const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Order'); // Import Order Model

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


router.post('/create-order', async (req, res) => {
    try {
        const { amount, currency = 'INR', customer, items } = req.body;

        const options = {
            amount: amount * 100,
            currency,
            receipt: `receipt_${Date.now()}`,
        };

        const response = await razorpay.orders.create(options);

        // SAVE ORDER TO DB as 'created'
        const newOrder = new Order({
            razorpay_order_id: response.id,
            amount: amount,
            currency: currency,
            status: 'created',
            customer: customer,
            items: items
        });

        await newOrder.save();

        res.json(response);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).send("Internal Server Error");
    }
});


router.post('/verify', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature === razorpay_signature) {
            // UPDATE ORDER STATUS TO 'paid'
            await Order.findOneAndUpdate(
                { razorpay_order_id: razorpay_order_id },
                {
                    status: 'paid',
                    razorpay_payment_id: razorpay_payment_id,
                    razorpay_signature: razorpay_signature
                }
            );

            res.json({ success: true, message: "Payment verified and saved", orderId: razorpay_order_id });
        } else {
            // UPDATE ORDER STATUS TO 'failed' (Optional)
            await Order.findOneAndUpdate(
                { razorpay_order_id: razorpay_order_id },
                { status: 'failed' }
            );
            res.status(400).json({ success: false, message: "Invalid signature" });
        }
    } catch (error) {
        console.error("Verification Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;
