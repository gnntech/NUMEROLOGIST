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
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] gap-8 lg:gap-12 items-center">
          {/* Left side - Empty for background to show */}
          <div className="hidden lg:block"></div>

          {/* Right side - Contact Form with white background */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold font-bebas tracking-wide mb-6"
              style={{ color: '#FE7028' }}
            >
              GET IN TOUCH
            </h2>

            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 bg-transparent border-b focus:outline-none font-matter text-base transition-colors duration-300"
                  style={{ 
                    borderBottomColor: '#E5E5E5',
                    color: '#2E2D2F'
                  }}
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 bg-transparent border-b focus:outline-none font-matter text-base transition-colors duration-300"
                  style={{ 
                    borderBottomColor: '#E5E5E5',
                    color: '#2E2D2F'
                  }}
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 bg-transparent border-b focus:outline-none font-matter text-base transition-colors duration-300"
                  style={{ 
                    borderBottomColor: '#E5E5E5',
                    color: '#2E2D2F'
                  }}
                  required
                />
              </div>

              {/* Service Interest */}
              <div>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 bg-transparent border-b focus:outline-none font-matter text-base transition-colors duration-300"
                  style={{ 
                    borderBottomColor: '#E5E5E5',
                    color: formData.serviceInterest ? '#2E2D2F' : '#9CA3AF'
                  }}
                  required
                >
                  <option value="" disabled>Service Interest</option>
                  <option value="life-path-reading">Life Path Reading</option>
                  <option value="numerology-report">Numerology Report</option>
                  <option value="career-guidance">Career Guidance</option>
                  <option value="consultation">Personal Consultation</option>
                </select>
              </div>

              {/* Messages */}
              <div className="pt-2">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-3 bg-transparent border rounded-lg focus:outline-none font-matter text-base resize-none transition-colors duration-300"
                  style={{ 
                    borderColor: '#E5E5E5',
                    color: '#2E2D2F'
                  }}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  className="px-10 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-lg font-matter text-white"
                  style={{ backgroundColor: '#FE7028' }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 20px 25px -5px rgba(254, 112, 40, 0.3)' 
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Send
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouchSection;
