import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ServiceCard {
  id: number;
  image: string;
  description: string;
}

const ServicesCarousel: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const services: ServiceCard[] = [
    {
      id: 1,
      image: '/Services1.png',
      description: 'Understand your life purpose and future direction through your Life Path and Destiny numbers, guiding you toward clarity, growth, and fulfillment.'
    },
    {
      id: 2,
      image: '/Services2.png',
      description: 'A detailed analysis of your birth numbers that reveals your personality traits, strengths, challenges, & life patterns to help you make informed decisions.'
    },
    {
      id: 3,
      image: '/Services3.png',
      description: 'Get guidance on career choices, financial growth, and prosperity by aligning your numerology numbers with the right professional and wealth opportunities.'
    },
    {
      id: 4,
      image: '/Services3.png',
      description: 'Get guidance on career choices, financial growth, and prosperity by aligning your numerology numbers with the right professional and wealth opportunities.'
    },
    {
      id: 5,
      image: '/Services3.png',
      description: 'Get guidance on career choices, financial growth, and prosperity by aligning your numerology numbers with the right professional and wealth opportunities.'
    }
  ];

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 -left-5 lg:-left-14"
        onClick={onClick}
        aria-label="Previous"
      >
        <img src="/leftarrow.png" alt="Previous" className="w-4 h-4 lg:w-6 lg:h-6" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 -right-5 lg:-right-14"
        onClick={onClick}
        aria-label="Next"
      >
        <img src="/rightarrow.png" alt="Next" className="w-4 h-4 lg:w-6 lg:h-6" />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: "slick-dots custom-dots",
    centerMode: isMobile,
    centerPadding: isMobile ? '40px' : '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#2E2D2F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-bebas tracking-wide text-center mb-8 sm:mb-12 text-white"
        >
          OUR SERVICES
        </h2>

        <div className="relative px-2 sm:px-8 lg:px-16 services-carousel">
          <Slider {...settings} key={isMobile ? 'mobile' : 'desktop'}>
            {services.map((service) => (
              <div key={service.id} className="px-2 sm:px-3">
                <div 
                  className="rounded-3xl p-6 sm:p-8 text-center h-[420px] sm:h-[400px] flex flex-col"
                  style={{ backgroundColor: '#3A3939' }}
                >
                  {/* Image */}
                  <div className="h-32 sm:h-36 flex items-center justify-center mb-4 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`Service ${service.id}`}
                      className="max-h-full max-w-[140px] sm:max-w-[160px] object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Line */}
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/Line.png" 
                      alt="" 
                      className="h-2 w-40 sm:w-48 object-contain"
                    />
                  </div>

                  {/* Description */}
                  <div className="flex-1 overflow-hidden">
                    <p 
                      className="text-sm sm:text-base leading-relaxed font-matter text-white"
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
