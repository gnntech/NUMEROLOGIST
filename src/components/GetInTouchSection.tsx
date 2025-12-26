import React, { useState } from 'react';

const GetInTouchSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div 
      className="relative bg-white bg-cover bg-center bg-no-repeat py-20 lg:py-24"
     
    >
      {/* Optional overlay for better form readability */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="relative z-10 flex justify-center items-center min-h-full px-4 md:px-6 lg:px-8">
        {/* Centered container with max-width */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden relative bg-cover bg-center bg-no-repeat lg:block hidden"    style={{ backgroundImage: 'url(/Getintouch_bg.png)' }}>
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              {/* Left side - Background image area (no padding, edge-to-edge) */}
              <div 
                className=""
             
              >
                {/* Image shows edge-to-edge */}
              </div>

              {/* Right side - Contact Form with responsive padding */}
              <div className="flex items-center justify-center">
                <div className="w-full px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16">
                  <h2 
                    className="text-4xl md:text-5xl font-bold font-bebas tracking-wide mb-8"
                    style={{ color: '#922930' }}
                  >
                    GET IN TOUCH
                  </h2>

                  <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="mb-6">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 font-matter text-lg placeholder-opacity-70"
                        style={{ 
                          borderBottomColor: '#922930',
                          color: '#922930'
                        }}
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="mb-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 font-matter text-lg placeholder-opacity-70"
                        style={{ 
                          borderBottomColor: '#922930',
                          color: '#922930'
                        }}
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-6">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 font-matter text-lg placeholder-opacity-70"
                        style={{ 
                          borderBottomColor: '#922930',
                          color: '#922930'
                        }}
                        required
                      />
                    </div>

                    {/* Service Interest */}
                    <div className="mb-6">
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleInputChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 font-matter text-lg"
                        style={{ 
                          borderBottomColor: '#922930',
                          color: formData.serviceInterest ? '#922930' : '#922930'
                        }}
                        required
                      >
                        <option value="" disabled style={{ color: '#922930' }}>Service Interest</option>
                        <option value="life-path-reading" style={{ color: '#922930' }}>Life Path Reading</option>
                        <option value="numerology-report" style={{ color: '#922930' }}>Numerology Report</option>
                        <option value="career-guidance" style={{ color: '#922930' }}>Career Guidance</option>
                        <option value="consultation" style={{ color: '#922930' }}>Personal Consultation</option>
                      </select>
                    </div>

                    {/* Message with extra spacing */}
                    <div className="mb-6 mt-8">
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-transparent border-2 rounded-lg focus:outline-none focus:ring-0 font-matter text-lg placeholder-opacity-70 resize-none"
                        style={{ 
                          borderColor: '#922930',
                          color: '#922930'
                        }}
                        required
                      />
                    </div>

                    {/* Submit Button with extra top margin */}
                    <div className="mt-8">
                      <button
                        type="submit"
                        className="px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-matter"
                        style={{ 
                          backgroundColor: '#922930',
                          color: '#FFFAE5'
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetInTouchSection;