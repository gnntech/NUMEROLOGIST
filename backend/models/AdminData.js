const mongoose = require("mongoose");

const promoCardSchema = new mongoose.Schema({
  id: String,
  title: String,
  image: String,
  mobileImage: String,
  description: String,
});
  
const testimonialSchema = new mongoose.Schema({
  id: String,
  name: String,
  location: String,
  quote: String,
  rating: Number,
  video: String, // Video URL or path
  avatar: String, // Avatar image URL
  isVideoTestimonial: { type: Boolean, default: false },
});

const packageSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  image: String,
  minimal: [String],
  detailed: [String],
  benefits: [String],
  idealFor: [String],
  formUrl: String,
});

const adminDataSchema = new mongoose.Schema(
  {
    promoCards: [promoCardSchema],
    testimonials: [testimonialSchema],
    packages: [packageSchema],
    marqueeText: {
      type: String,
      default: "Book Now & Get 25% OFF — Slots are limited. Reserve yours now!!",
    },
    marqueeFormUrl: {
      type: String,
      default: "#",
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("AdminData", adminDataSchema);