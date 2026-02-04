const express = require("express");
const router = express.Router();
const AdminData = require("../models/AdminData");

// Default data
const defaultData = {
  promoCards: [
    {
      id: "1",
      title: "Card 1",
      image: "/numerology-report.jpeg",
      mobileImage: "/mobile-numerology-report.jpg",
      description: "Personal Numerology Report",
    },
    {
      id: "2",
      title: "Card 2",
      image: "/lucky-jewellery.jpeg",
      mobileImage: "/mobile-lucky-jewellery.jpg",
      description: "Lucky Number Jewellery",
    },
    {
      id: "3",
      title: "Card 3",
      image: "/career-analysis.jpeg",
      mobileImage: "/mobile-career-analysis.jpg",
      description: "Career Number Analysis",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Sneha Iyer",
      location: "Mumbai",
      quote:
        "The workshops improved my technical skills and helped me get placed in a top company.",
      rating: 5,
      isVideoTestimonial: false,
    },
    {
      id: "2",
      name: "Pranit Nair",
      location: "Businessman",
      quote:
        "Joining X Club was the best decision; it shaped both my skills and personality.",
      rating: 5,
      isVideoTestimonial: false,
    },
    {
      id: "3",
      name: "Neha Joshi",
      location: "Student",
      quote: "X Club taught me how to balance innovation with teamwork.",
      rating: 5,
      isVideoTestimonial: false,
    },
    {
      id: "4",
      name: "Rahul Sharma",
      location: "Entrepreneur",
      quote:
        "The guidance I received transformed my approach to business decisions.",
      rating: 5,
      isVideoTestimonial: false,
    },
    {
      id: "5",
      name: "Priya Patel",
      location: "Designer",
      quote: "Numerology insights helped me find clarity in my career path.",
      rating: 5,
      isVideoTestimonial: false,
    },
    {
      id: "6",
      name: "Amit Kumar",
      location: "Developer",
      quote: "A life-changing experience that brought peace and direction.",
      rating: 5,
      isVideoTestimonial: false,
    },
    {
      id: "v1",
      name: "Shreyas Karve",
      location: "Businessman",
      video: "/Bg_video.mp4",
      avatar: "/Testimonial_card.png",
      rating: 5,
      isVideoTestimonial: true,
    },
    {
      id: "v2",
      name: "Priya Patel",
      location: "Designer",
      video: "/Bg_video.mp4",
      avatar: "/Testimonial_card.png",
      rating: 5,
      isVideoTestimonial: true,
    },
    {
      id: "v3",
      name: "Amit Kumar",
      location: "Developer",
      video: "/Bg_video.mp4",
      avatar: "/Testimonial_card.png",
      rating: 5,
      isVideoTestimonial: true,
    },
  ],
  packages: [
    {
      id: "1",
      name: "Silver Package",
      icon: "/Sliver package.png",
      includes: [
        { text: "Future guidance", highlight: false },
        { text: "Numerology report", highlight: false },
        { text: "+", highlight: false },
        { text: "Half hour online", highlight: true },
        { text: "consultation", highlight: true },
      ],
    },
    {
      id: "2",
      name: "Gold Package",
      icon: "/Gold Package.png",
      includes: [
        { text: "Numerology name &", highlight: false },
        { text: "signature correction", highlight: false },
        { text: "+", highlight: false },
        { text: "Half hour online", highlight: true },
        { text: "consultation", highlight: true },
      ],
    },
    {
      id: "3",
      name: "Platinum Package",
      icon: "/Platinum Package.png",
      includes: [
        { text: "Premium future guidance", highlight: false },
        { text: "Numerology report", highlight: false },
        { text: "+", highlight: false },
        { text: "Signature correction", highlight: false },
        { text: "+", highlight: false },
        { text: "45 minutes online", highlight: true },
        { text: "consultation", highlight: true },
        { text: "+", highlight: false },
        { text: "Name correction", highlight: false },
      ],
    },
    {
      id: "4",
      name: "Diamond",
      icon: "/Diamond.png",
      includes: [
        { text: "Business Numerology", highlight: false },
        { text: "+", highlight: false },
        { text: "Business Name Correction", highlight: false },
        { text: "+", highlight: false },
        { text: "Magical secret numbers and", highlight: false },
        { text: "secret remedies", highlight: false },
        { text: "+", highlight: false },
        { text: "Money attraction 500", highlight: true },
        { text: "pocket kit + lucky silver coin", highlight: true },
        { text: "+", highlight: false },
        { text: "1 hour Online / offline", highlight: false },
        { text: "consultation", highlight: false },
      ],
    },
    {
      id: "5",
      name: "Sapphire",
      icon: "/Sapphire.png",
      includes: [
        { text: "Premium future guidance", highlight: false },
        { text: "Numerology report", highlight: false },
        { text: "+", highlight: false },
        { text: "Atrology", highlight: true },
        { text: "+", highlight: false },
        { text: "Signature correction", highlight: false },
        { text: "+", highlight: false },
        { text: "Name correction", highlight: false },
        { text: "+", highlight: false },
        { text: "Law of attraction", highlight: false },
        { text: "(manifestation training)", highlight: false },
        { text: "+", highlight: false },
        { text: "1 hour online / offline", highlight: false },
        { text: "consultation", highlight: false },
      ],
    },
    {
      id: "6",
      name: "Emerald",
      icon: "/Emerald.png",
      includes: [
        { text: "Sapphire Package", highlight: false },
        { text: "+", highlight: false },
        { text: "Your all  numerology", highlight: false },
        { text: "remedies crystals kit", highlight: false },
        { text: "+", highlight: false },
        { text: "Money attracting 500", highlight: true },
        { text: "pocket kit", highlight: true },
        { text: "+", highlight: false },
        { text: "Lucky silver coin", highlight: true },
        { text: "+", highlight: false },
        { text: "Vyapar vriddhi yantra", highlight: false },
        { text: "+", highlight: false },
        { text: "Secret magic numbers", highlight: false },
        { text: "+", highlight: false },
        { text: "1.5 hours online / offline", highlight: false },
        { text: "consultation", highlight: false },
      ],
    },
  ],
  marqueeText: "Book Now & Get 25% OFF",
};

// GET admin data
router.get("/data", async (req, res) => {
  try {
    let adminData = await AdminData.findOne();

    // If no data exists, create default data
    if (!adminData) {
      adminData = new AdminData(defaultData);
      await adminData.save();
    }

    res.json(adminData);
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ error: "Failed to fetch admin data" });
  }
});

// UPDATE admin data
router.put("/data", async (req, res) => {
  try {
    const updateData = req.body;

    let adminData = await AdminData.findOne();

    if (!adminData) {
      adminData = new AdminData({ ...defaultData, ...updateData });
    } else {
      Object.assign(adminData, updateData);
      adminData.updatedAt = Date.now();
    }

    await adminData.save();
    res.json(adminData);
  } catch (error) {
    console.error("Error updating admin data:", error);
    res.status(500).json({ error: "Failed to update admin data" });
  }
});

// UPDATE specific fields
router.patch("/data/promo-cards", async (req, res) => {
  try {
    let adminData = await AdminData.findOne();
    if (!adminData) {
      adminData = new AdminData(defaultData);
    }
    adminData.promoCards = req.body.promoCards;
    await adminData.save();
    res.json(adminData);
  } catch (error) {
    res.status(500).json({ error: "Failed to update promo cards" });
  }
});

router.patch("/data/testimonials", async (req, res) => {
  try {
    let adminData = await AdminData.findOne();
    if (!adminData) {
      adminData = new AdminData(defaultData);
    }
    adminData.testimonials = req.body.testimonials;
    await adminData.save();
    res.json(adminData);
  } catch (error) {
    res.status(500).json({ error: "Failed to update testimonials" });
  }
});

router.patch("/data/packages", async (req, res) => {
  try {
    let adminData = await AdminData.findOne();
    if (!adminData) {
      adminData = new AdminData(defaultData);
    }
    adminData.packages = req.body.packages;
    await adminData.save();
    res.json(adminData);
  } catch (error) {
    res.status(500).json({ error: "Failed to update packages" });
  }
});

router.patch("/data/marquee", async (req, res) => {
  try {
    let adminData = await AdminData.findOne();
    if (!adminData) {
      adminData = new AdminData(defaultData);
    }
    adminData.marqueeText = req.body.marqueeText;
    await adminData.save();
    res.json(adminData);
  } catch (error) {
    res.status(500).json({ error: "Failed to update marquee text" });
  }
});

module.exports = router;