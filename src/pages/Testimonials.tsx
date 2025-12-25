import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sneha Iyer",
      location: "Mumbai",
      text: "Through my Life Path and Destiny reading, I gained a deep understanding of my life purpose and where I'm truly headed. The insights brought me clarity, confidence, and a sense of direction that helped me grow and feel more fulfilled.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "The career guidance session was incredibly insightful. Gaurab helped me understand my strengths and guided me towards a career path that aligns with my numerological profile. I'm now more confident in my professional decisions.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Bangalore",
      text: "I was skeptical at first, but the accuracy of the numerology report amazed me. It revealed aspects of my personality that I never fully understood. The consultation was professional and enlightening.",
      rating: 5
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read testimonials from satisfied clients who have discovered their true potential through numerology.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="text-6xl text-amber-900 font-bold">"</div>
                <div className="flex-1">
                  <blockquote className="text-lg text-gray-700 mb-6">
                    {testimonial.text}
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.location}</div>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-orange-100 mb-6">
            Join hundreds of satisfied clients who have discovered their true potential through numerology.
          </p>
          <button className="bg-orange-200 text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors">
            Book Your Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;