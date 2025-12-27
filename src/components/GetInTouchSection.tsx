import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="relative py-12 sm:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/Getintouch_bg.png)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] gap-8 lg:gap-12 items-center">
          {/* Left side - Empty space for background to show */}
          <div className="hidden lg:block">
            {/* This space allows the background image to be visible */}
          </div>

          {/* Right side - Contact Form with semi-transparent background */}
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-full">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold font-bebas tracking-wide mb-4 sm:mb-6"
                style={{ color: '#922930' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                GET IN TOUCH
              </motion.h2>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {/* Full Name */}
                <div>
                  <motion.input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 sm:py-4 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 font-matter text-base sm:text-lg placeholder-gray-500 transition-colors duration-300"
                    style={{ 
                      borderBottomColor: '#922930',
                      color: '#922930'
                    }}
                    whileFocus={{ borderBottomWidth: '3px' }}
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 sm:py-4 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 font-matter text-base sm:text-lg placeholder-gray-500 transition-colors duration-300"
                    style={{ 
                      borderBottomColor: '#922930',
                      color: '#922930'
                    }}
                    whileFocus={{ borderBottomWidth: '3px' }}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <motion.input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 sm:py-4 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 font-matter text-base sm:text-lg placeholder-gray-500 transition-colors duration-300"
                    style={{ 
                      borderBottomColor: '#922930',
                      color: '#922930'
                    }}
                    whileFocus={{ borderBottomWidth: '3px' }}
                    required
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <motion.select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 sm:py-4 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 font-matter text-base sm:text-lg transition-colors duration-300"
                    style={{ 
                      borderBottomColor: '#922930',
                      color: formData.serviceInterest ? '#922930' : '#6b7280'
                    }}
                    whileFocus={{ borderBottomWidth: '3px' }}
                    required
                  >
                    <option value="" disabled className="text-gray-500">Service Interest</option>
                    <option value="life-path-reading" className="text-gray-900">Life Path Reading</option>
                    <option value="numerology-report" className="text-gray-900">Numerology Report</option>
                    <option value="career-guidance" className="text-gray-900">Career Guidance</option>
                    <option value="consultation" className="text-gray-900">Personal Consultation</option>
                  </motion.select>
                </div>

                {/* Message */}
                <div className="pt-1 sm:pt-2">
                  <motion.textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 sm:py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-0 font-matter text-sm sm:text-base placeholder-gray-500 resize-none transition-colors duration-300"
                    style={{ 
                      borderColor: '#922930',
                      color: '#922930'
                    }}
                    whileFocus={{ borderWidth: '3px' }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-3 sm:pt-4">
                  <motion.button
                    type="submit"
                    className="px-8 sm:px-10 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg font-matter"
                    style={{ 
                      backgroundColor: '#922930',
                      color: '#FFFAE5'
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' 
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouchSection;