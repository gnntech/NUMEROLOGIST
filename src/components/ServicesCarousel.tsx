import React from 'react';
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
  ];

  // Custom arrow components
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
        onClick={onClick}
        aria-label="Previous service"
        style={{ left: '-60px' }}
      >
        <img 
          src="/leftarrow.png" 
          alt="Previous" 
          className="w-6 h-6 object-contain"
        />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
        onClick={onClick}
        aria-label="Next service"
        style={{ right: '-60px' }}
      >
        <img 
          src="/rightarrow.png" 
          alt="Next" 
          className="w-6 h-6 object-contain"
        />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
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
        }
      }
    ]
  };

  return (
    <div className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl font-bold font-bebas tracking-wide mb-4"
            style={{ color: '#922930' }}
          >
            OUR SERVICES
          </h2>
        </div>

        {/* Services Carousel */}
        <div className="relative px-16">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-4">
                <div 
                  className="rounded-3xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 mx-auto"
                  style={{ 
                    backgroundColor: '#FFFAE5',
                    height: '450px', // Fixed height for all cards
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Service Image - Fixed positioning */}
                  <div className="mt-7 mb-6 flex justify-center items-center" style={{ height: '140px' }}>
                    <img 
                      src={service.image} 
                      alt={`Service ${service.id}`}
                      className="max-w-full max-h-full object-contain"
                      style={{ width: 'auto', height: 'auto', maxWidth: '230px', maxHeight: '230px' }}
                    />
                  </div>

                  {/* Decorative Line */}
                  <div className="mt-10 mb-6 flex justify-center">
                    <img 
                      src="/Line.png" 
                      alt="Decorative line" 
                      className="h-2 w-60 object-contain"
                    />
                  </div>

                  {/* Service Description - Flexible height */}
                  <div className="flex-1 flex items-center">
                    <p 
                      className="text-m leading-relaxed font-matter"
                      style={{ color: '#922930' }}
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