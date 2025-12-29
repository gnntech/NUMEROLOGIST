import React from 'react';
import Slider from 'react-slick';

const PromoSection: React.FC = () => {
  // Dummy carousel images - full width banners
  const carouselImages = [
    { id: 1, image: '/Getintouch_bg.png', alt: 'Promo Banner 1' },
    { id: 2, image: '/Testimonial_bg.png', alt: 'Promo Banner 2' },
    { id: 3, image: '/GNN_background.png', alt: 'Promo Banner 3' },
  ];

  const marqueeText = "Book your Consultation — Slots are limited. Reserve yours now!!";

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    prevArrow: (
      <button className="slick-prev">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all">
          <img src="/leftarrow.png" alt="Previous" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all">
          <img src="/rightarrow.png" alt="Next" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </button>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: '20px' }}>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all" />
    ),
  };

  return (
    <div className="relative">
      {/* Full Width Image Carousel */}
      <div className="promo-carousel-wrapper relative">
        <Slider {...settings}>
          {carouselImages.map((item) => (
            <div key={item.id}>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Running Marquee Section */}
      <div className="bg-red-700 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-white font-medium text-sm sm:text-base">
                {marqueeText}
              </span>
              <button className="ml-4 bg-white text-red-700 px-4 py-1 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
