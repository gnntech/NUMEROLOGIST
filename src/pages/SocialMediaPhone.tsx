import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Carousel component for mobile trending videos
const TrendingVideosCarousel: React.FC<{ reels: any[] }> = ({ reels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reels.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reels.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="lg:hidden">
      <div className="relative w-full max-w-md mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {reels.map((reel) => (
              <div key={reel.id} className="w-full flex-shrink-0">
                <motion.a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    {/* Video Element */}
                    <video 
                      src={reel.videoFile} 
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      onError={(e) => {
                        console.log('Video failed to load:', reel.videoFile);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                        style={{ background: 'linear-gradient(135deg, #FE7028, #F97316)' }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                    </div>

                    {/* Instagram Reel Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="rounded-lg px-3 py-1.5 shadow-lg backdrop-blur-sm" style={{ backgroundColor: '#FE7028' }}>
                        <span className="text-white text-xs font-bold">REEL</span>
                      </div>
                    </div>

                    {/* Video Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h4 className="font-bebas text-lg text-white tracking-wide drop-shadow-lg leading-tight">{reel.title}</h4>
                    </div>
                  </div>
                </motion.a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Previous video"
        >
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Next video"
        >
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reels.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-600 w-8' : 'bg-gray-300 w-2'
              }`}
              style={index === currentIndex ? { backgroundColor: '#FE7028' } : {}}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SocialMediaPhone: React.FC = () => {
  // Instagram Reels - Extended list for phone grid with real Instagram links
  const phoneVideos = [
    { id: 1, videoFile: '/insta_1.mp4', url: 'https://www.instagram.com/reel/DUC5134ETUX/', title: 'Ajit Pawar Case Study' },
    { id: 2, videoFile: '/insta_2.mp4', url: 'https://www.instagram.com/reel/DUDxZX4jYKI/', title: 'Podcast Special' },
    { id: 3, videoFile: '/insta_3.mp4', url: 'https://www.instagram.com/reel/DPWIxHDiDYM/', title: 'Time Changes' },
    { id: 4, videoFile: '/insta_4.mp4', url: 'https://www.instagram.com/reel/DTa0KGwiGbg/', title: 'Thane Mumbai Pune' },
    { id: 5, videoFile: '/insta_1.mp4', url: 'https://www.instagram.com/reel/DUC5134ETUX/', title: 'Numerology Insights' },
    { id: 6, videoFile: '/insta_2.mp4', url: 'https://www.instagram.com/reel/DUDxZX4jYKI/', title: 'Life Guidance' },
    { id: 7, videoFile: '/insta_3.mp4', url: 'https://www.instagram.com/reel/DPWIxHDiDYM/', title: 'Karma & Success' },
    { id: 8, videoFile: '/insta_4.mp4', url: 'https://www.instagram.com/reel/DTa0KGwiGbg/', title: 'Consultation' },
    { id: 9, videoFile: '/insta_1.mp4', url: 'https://www.instagram.com/reel/DUC5134ETUX/', title: 'Destiny Numbers' },
    { id: 10, videoFile: '/insta_2.mp4', url: 'https://www.instagram.com/reel/DUDxZX4jYKI/', title: 'Expert Analysis' },
    { id: 11, videoFile: '/insta_3.mp4', url: 'https://www.instagram.com/reel/DPWIxHDiDYM/', title: 'Transform Life' },
    { id: 12, videoFile: '/insta_4.mp4', url: 'https://www.instagram.com/reel/DTa0KGwiGbg/', title: 'Premium Service' },
  ];

  // Instagram Reels for main section
  const reels = [
    {
      id: 1,
      url: 'https://www.instagram.com/reel/DUC5134ETUX/?igsh=MXdnNWp4cDBycXQwNA==',
      embedUrl: 'https://www.instagram.com/reel/DUC5134ETUX/embed',
      thumbnail: '/insta_1.mp4',
      videoFile: '/insta_1.mp4',
      title: 'How Numerology Works - Ajit Pawar Case Study'
    },
    {
      id: 2,
      url: 'https://www.instagram.com/reel/DUDxZX4jYKI/?igsh=bTM5cjhwN29oNDY4',
      embedUrl: 'https://www.instagram.com/reel/DUDxZX4jYKI/embed',
      thumbnail: '/insta_2.mp4',
      videoFile: '/insta_2.mp4',
      title: 'Podcast with Banter With Cheytan'
    },
    {
      id: 3,
      url: 'https://www.instagram.com/reel/DPWIxHDiDYM/?igsh=eWU2azB6dnVyY2J6',
      embedUrl: 'https://www.instagram.com/reel/DPWIxHDiDYM/embed',
      thumbnail: '/insta_3.mp4',
      videoFile: '/insta_3.mp4',
      title: 'Time Changes - Keep Your Karma Clean'
    },
    {
      id: 4,
      url: 'https://www.instagram.com/reel/DTa0KGwiGbg/?igsh=NjV0a2FoZmIydWM1',
      embedUrl: 'https://www.instagram.com/reel/DTa0KGwiGbg/embed',
      thumbnail: '/insta_4.mp4',
      videoFile: '/insta_4.mp4',
      title: 'Premium Numerology Consultation - Thane, Mumbai & Pune'
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="text-gray-900 space-y-8 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-orange-100 border-2 border-orange-200 shadow-lg"
              style={{ backgroundColor: 'rgba(254, 112, 40, 0.1)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#FE7028">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-matter text-sm font-semibold text-orange-600">Follow Our Journey</span>
            </motion.div>

            {/* Heading */}
            <div>
              <h2 className="font-bebas text-5xl lg:text-7xl tracking-wide text-gray-900 leading-tight mb-4">
                CONNECT WITH US<br />
                <span className="text-orange-600">
                  ON INSTAGRAM
                </span>
              </h2>
              <div className="w-24 h-1.5 bg-orange-500 rounded-full" style={{ backgroundColor: '#FE7028' }}></div>
            </div>

            {/* Description */}
            <p className="font-matter text-xl text-gray-700 leading-relaxed">
              Watch exclusive videos, daily insights, and numerology wisdom. 
              Join our community and transform your life journey.
            </p>

            {/* Features */}
            <div className="space-y-5 pt-2">
              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow" style={{ backgroundColor: '#FE7028' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bebas text-2xl text-gray-900 tracking-wide mb-1">EXCLUSIVE VIDEOS</h3>
                  <p className="font-matter text-gray-600 text-base">Watch reels, tutorials, and live sessions</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bebas text-2xl text-gray-900 tracking-wide mb-1">DAILY INSIGHTS</h3>
                  <p className="font-matter text-gray-600 text-base">Personalized numerology guidance</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-700 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bebas text-2xl text-gray-900 tracking-wide mb-1">JOIN 40.8K+ FOLLOWERS</h3>
                  <p className="font-matter text-gray-600 text-base">Be part of our growing community</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://www.instagram.com/gaurab_nerpagar_numerologics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl font-matter text-white mt-6"
              style={{ backgroundColor: '#FE7028' }}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 25px -5px rgba(254, 112, 40, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
              </svg>
              Follow on Instagram
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Side - Phone Mockup - Beautiful Custom UI */}
          <motion.div
            className="relative order-2 lg:order-2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[360px] mx-auto">
              {/* Phone Frame with enhanced gradient border */}
              <motion.div 
                className="relative rounded-[3.5rem] p-[4px] shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #FE7028 0%, #D97706 50%, #FE7028 100%)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-black rounded-[3.4rem] p-[14px]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-[24px] z-30 flex items-center justify-center">
                    <div className="w-[55px] h-[5px] bg-gray-800 rounded-full mt-2"></div>
                  </div>
                  
                  {/* Screen */}
                  <div className="relative bg-white rounded-[3.2rem] overflow-hidden shadow-inner" style={{ height: '720px' }}>
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-[50px] bg-white z-20 flex items-center justify-between px-8 pt-4 border-b border-gray-100">
                      <span className="text-[15px] font-semibold text-black">9:41</span>
                      <div className="flex items-center space-x-[6px]">
                        <svg className="w-[17px] h-[12px]" fill="black" viewBox="0 0 20 20">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                        </svg>
                        <svg className="w-[15px] h-[12px]" fill="black" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                        <svg className="w-[24px] h-[12px]" viewBox="0 0 24 12">
                          <rect x="0" y="2" width="20" height="8" rx="2" stroke="black" strokeWidth="1" fill="none"/>
                          <rect x="2" y="4" width="14" height="4" fill="black"/>
                          <path d="M21 4h1a1 1 0 011 1v2a1 1 0 01-1 1h-1V4z" fill="black"/>
                        </svg>
                      </div>
                    </div>

                    {/* Instagram Profile Header */}
                    <div className="absolute top-[50px] left-0 right-0 bg-white z-20 px-4 py-4 border-b border-gray-100">
                      {/* Username Row */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <a
                            href="https://www.instagram.com/gaurab_nerpagar_numerologics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[70px] h-[70px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2.5px] cursor-pointer hover:opacity-90 transition-opacity"
                          >
                            <div className="w-full h-full rounded-full bg-white p-[2.5px]">
                              <img 
                                src="/GaurabNPP.png" 
                                alt="Profile" 
                                className="w-full h-full rounded-full object-cover"
                              />
                            </div>
                          </a>
                          <div>
                            <h3 className="text-[16px] font-bold mb-0.5">Gaurab Nerpagar</h3>
                            <p className="text-[13px] text-gray-600">Numerologics</p>
                            <div className="flex items-center space-x-3 mt-1">
                              <span className="text-[13px]"><strong className="text-black">40.8K</strong> <span className="text-gray-600">followers</span></span>
                              <span className="text-[13px]"><strong className="text-black">73</strong> <span className="text-gray-600">posts</span></span>
                            </div>
                          </div>
                        </div>
                        <a
                          href="https://www.instagram.com/gaurab_nerpagar_numerologics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer hover:opacity-70 transition-opacity"
                        >
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="url(#ig-gradient-2)">
                            <defs>
                              <linearGradient id="ig-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FD5949" />
                                <stop offset="50%" stopColor="#D6249F" />
                                <stop offset="100%" stopColor="#285AEB" />
                              </linearGradient>
                            </defs>
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Posts Grid - Clean & More Videos */}
                    <div className="absolute top-[160px] left-0 right-0 bottom-0 overflow-y-auto bg-white scrollbar-hide">
                      <div className="grid grid-cols-3 gap-[1px] bg-gray-100">
                        {phoneVideos.map((video) => (
                          <a
                            key={video.id}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aspect-square bg-gray-900 relative group cursor-pointer overflow-hidden"
                          >
                            <video 
                              src={video.videoFile}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              muted
                              loop
                              playsInline
                              onMouseEnter={(e) => e.currentTarget.play()}
                              onMouseLeave={(e) => {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 0;
                              }}
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Play icon */}
                            <div className="absolute top-2 right-2 z-10">
                              <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>

                            {/* Video title on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-white text-[10px] font-semibold drop-shadow-lg line-clamp-2">{video.title}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Glow Effects */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] opacity-25 blur-3xl rounded-full animate-pulse" style={{ background: 'radial-gradient(circle, rgba(254, 112, 40, 0.4) 0%, rgba(217, 119, 6, 0.2) 50%, transparent 100%)' }}></div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #FE7028, #F97316)' }}
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #D97706, #FE7028)' }}
                animate={{ 
                  y: [0, 15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Video Reels Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-orange-100 border-2 border-orange-200 shadow-lg mb-6"
              style={{ backgroundColor: 'rgba(254, 112, 40, 0.1)' }}
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-5 h-5 mr-2" fill="#FE7028" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
              </svg>
              <span className="font-matter text-sm font-semibold text-orange-600">Watch Our Latest Reels</span>
            </motion.div>
            
            <h3 className="font-bebas text-4xl lg:text-5xl tracking-wide text-gray-900 mb-4">
              TRENDING <span className="text-orange-600">VIDEOS</span>
            </h3>
            <p className="font-matter text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most popular numerology insights, life guidance, and transformational content
            </p>
          </div>

          {/* Mobile Carousel - Hidden on lg and above */}
          <TrendingVideosCarousel reels={reels} />

          {/* Desktop Grid - Hidden on sm and below */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    {/* Video Element */}
                    <video 
                      src={reel.videoFile} 
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      onError={(e) => {
                        console.log('Video failed to load:', reel.videoFile);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
                        style={{ background: 'linear-gradient(135deg, #FE7028, #F97316)' }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                    </div>

                    {/* Instagram Reel Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="rounded-lg px-3 py-1.5 shadow-lg backdrop-blur-sm" style={{ backgroundColor: '#FE7028' }}>
                        <span className="text-white text-xs font-bold">REEL</span>
                      </div>
                    </div>

                    {/* Video Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h4 className="font-bebas text-lg text-white tracking-wide drop-shadow-lg leading-tight">{reel.title}</h4>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <motion.a
              href="https://www.instagram.com/gaurab_nerpagar_numerologics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg font-matter text-white hover:shadow-2xl"
              style={{ backgroundColor: '#FE7028' }}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 25px -5px rgba(254, 112, 40, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View All Videos on Instagram
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Video Modal - Removed since we're opening Instagram directly */}
      </div>

      {/* Add custom animations and scrollbar styles */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default SocialMediaPhone;
    