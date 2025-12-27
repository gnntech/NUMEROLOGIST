import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ServiceCard {
  id: number;
  image: string;
  description: string;
}

const ServicesCarousel: React.FC = () => {
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
    }
    , {
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

  // Custom arrow components
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <motion.button
        className="absolute top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 -left-5 sm:-left-16"
        onClick={onClick}
        aria-label="Previous service"
        whileHover={{ scale: 1.1, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <img 
          src="/leftarrow.png" 
          alt="Previous" 
          className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
        />
      </motion.button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <motion.button
        className="absolute top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 -right-5 sm:-right-16"
        onClick={onClick}
        aria-label="Next service"
        whileHover={{ scale: 1.1, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <img 
          src="/rightarrow.png" 
          alt="Next" 
          className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
        />
      </motion.button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'cubic-bezier(0.45, 0, 0.55, 1)',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: () => (
      <div className="w-3 h-3 rounded-full transition-all duration-300" style={{ backgroundColor: '#922930' }}></div>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  };

  return (
    <motion.div 
      className="relative bg-white py-16 sm:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-bebas tracking-wide mb-4"
            style={{ color: '#922930' }}
          >
            OUR SERVICES
          </h2>
        </motion.div>

        {/* Services Carousel */}
        <motion.div 
          className="relative px-4 sm:px-8 lg:px-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={service.id} className="px-2 sm:px-4">
                <motion.div 
                  className="rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 mx-auto"
                  style={{ 
                    backgroundColor: '#FFFAE5',
                    height: '400px', // Responsive height
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  {/* Service Image - Fixed positioning */}
                  <div className="mt-4 sm:mt-7 mb-4 sm:mb-6 flex justify-center items-center" style={{ height: '120px' }}>
                    <motion.img 
                      src={service.image} 
                      alt={`Service ${service.id}`}
                      className="max-w-full max-h-full object-contain"
                      style={{ width: 'auto', height: 'auto', maxWidth: '200px', maxHeight: '200px' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* Decorative Line */}
                  <div className="mt-6 sm:mt-10 mb-4 sm:mb-6 flex justify-center">
                    <img 
                      src="/Line.png" 
                      alt="Decorative line" 
                      className="h-2 w-40 sm:w-60 object-contain"
                    />
                  </div>

                  {/* Service Description - Flexible height */}
                  <div className="flex-1 flex items-center">
                    <p 
                      className="text-sm sm:text-base leading-relaxed font-matter"
                      style={{ color: '#922930' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesCarousel;