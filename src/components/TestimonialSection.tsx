import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

interface VideoTestimonial {
  id: number;
  video: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The workshops improved my technical skills and helped me get placed in a top company.",
    name: "Sneha Iyer",
    role: "Home Keeper",
  },
  {
    id: 2,
    quote: "Joining X Club was the best decision; it shaped both my skills and personality.",
    name: "Pranit Nair",
    role: "Businessman",
  },
  {
    id: 3,
    quote: "X Club taught me how to balance innovation with teamwork.",
    name: "Neha Joshi",
    role: "Student",
  },
  {
    id: 4,
    quote: "The guidance I received transformed my approach to business decisions.",
    name: "Rahul Sharma",
    role: "Entrepreneur",
  },
  {
    id: 5,
    quote: "Numerology insights helped me find clarity in my career path.",
    name: "Priya Patel",
    role: "Designer",
  },
  {
    id: 6,
    quote: "A life-changing experience that brought peace and direction.",
    name: "Amit Kumar",
    role: "Developer",
  },
];

const videoTestimonials: VideoTestimonial[] = [
  { id: 1, video: '/Bg_video.mp4', name: 'Shreyas Karve', role: 'Businessman', avatar: '/Testimonial_card.png' },
  { id: 2, video: '/Bg_video.mp4', name: 'Priya Patel', role: 'Designer', avatar: '/Testimonial_card.png' },
  { id: 3, video: '/Bg_video.mp4', name: 'Amit Kumar', role: 'Developer', avatar: '/Testimonial_card.png' },
];

const TestimonialSection: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(1); // Middle card is active (index 1 of visible 3)
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-slide testimonial cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videoTestimonials.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev === videoTestimonials.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Get visible cards (3 cards with middle one being active/orange)
  const getVisibleCards = () => {
    const prevIndex = (activeCardIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (activeCardIndex + 1) % testimonials.length;
    return [
      { ...testimonials[prevIndex], position: 'left' },
      { ...testimonials[activeCardIndex], position: 'center' },
      { ...testimonials[nextIndex], position: 'right' },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/Testimonial_bg.png)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xl">
          {/* Top Section - Title, Description & Video */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-4 mb-4">
            {/* Left - Title & Description */}
            <div className="pr-8 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-bebas tracking-wide mb-4 uppercase leading-tight">
                <span style={{ color: '#2F2F2F' }}>Words from Those Who've Experienced the </span>
                <span style={{ color: '#FE7028' }}>Journey</span>
              </h2>
              <p 
                className="text-base sm:text-lg leading-relaxed font-matter"
                style={{ color: '#424242', lineHeight: '1.6' }}
              >
                Real experiences shared by clients who discovered clarity, balance, and renewed confidence 
                through thoughtful, supportive numerology guidance. These stories reflect meaningful journeys, 
                personal growth, and moments of insight that helped them move forward with trust and awareness.
              </p>
            </div>

            {/* Right - Video Area */}
            <div className="flex flex-col items-center lg:items-end">
              {/* Video Box */}
              <div 
                className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-[240px] sm:max-w-[280px] cursor-pointer"
                style={{ aspectRatio: '1 / 1' }}
                onClick={togglePlay}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVideo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <video 
                      ref={videoRef}
                      src={videoTestimonials[currentVideo].video}
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      muted
                    />
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <motion.button
                          className="w-12 h-12 rounded-full flex items-center justify-center bg-white/90 shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-5 h-5 ml-1" style={{ color: '#2F2F2F' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Video Caption & Navigation */}
              <div className="flex items-center justify-between w-full max-w-[240px] sm:max-w-[280px] mt-3">
                <button
                  onClick={handlePrevVideo}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:scale-105 transition-transform"
                  style={{ borderColor: '#FE7028' }}
                >
                  <svg className="w-4 h-4" style={{ color: '#FE7028' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                      <img src={videoTestimonials[currentVideo].avatar} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-matter font-medium text-xs" style={{ color: '#2F2F2F' }}>
                        {videoTestimonials[currentVideo].name}
                      </p>
                      <p className="font-matter text-[10px]" style={{ color: '#2F2F2F' }}>
                        {videoTestimonials[currentVideo].role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {videoTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => { setCurrentVideo(index); setIsPlaying(false); }}
                        className={`h-1.5 rounded-full transition-all ${index === currentVideo ? 'w-4' : 'w-1.5'}`}
                        style={{ backgroundColor: index === currentVideo ? '#FE7028' : '#D1D5DB' }}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNextVideo}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                  style={{ backgroundColor: '#FE7028' }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom - Auto-sliding Testimonial Cards */}
          <div className="relative overflow-hidden">
            {/* Mobile - Single Card */}
            <div className="sm:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCardIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl p-5 flex flex-col shadow-lg mx-auto"
                  style={{
                    minHeight: '180px',
                    background: 'linear-gradient(135deg, #FF8E55 0%, #FE7028 100%)',
                  }}
                >
                  <div className="text-2xl font-bold leading-none mb-2 text-white">"</div>
                  <p className="text-sm font-matter mb-4 leading-relaxed flex-1 text-white">
                    {testimonials[activeCardIndex].quote}
                  </p>
                  <div className="mt-auto">
                    <p className="font-matter font-medium text-sm text-white">
                      {testimonials[activeCardIndex].name}
                    </p>
                    <p className="font-matter text-xs" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {testimonials[activeCardIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop - 3 Cards */}
            <div className="hidden sm:flex gap-4 justify-center">
              <AnimatePresence mode="popLayout">
                {visibleCards.map((card, index) => {
                  const isCenter = card.position === 'center';
                  return (
                    <motion.div
                      key={`${card.id}-${card.position}`}
                      layout
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className={`flex-shrink-0 relative rounded-xl p-5 flex flex-col transition-all duration-300 ${
                        isCenter ? 'shadow-lg' : 'shadow-sm'
                      }`}
                      style={{
                        width: 'calc(33.333% - 11px)',
                        minHeight: '180px',
                        background: isCenter 
                          ? 'linear-gradient(135deg, #FF8E55 0%, #FE7028 100%)' 
                          : '#FFFFFF',
                        border: isCenter ? 'none' : '1px solid #E5E7EB',
                      }}
                    >
                      <div 
                        className="text-2xl font-bold leading-none mb-2"
                        style={{ color: isCenter ? '#FFFFFF' : '#FE7028' }}
                      >
                        "
                      </div>
                      <p 
                        className="text-sm font-matter mb-4 leading-relaxed flex-1"
                        style={{ color: isCenter ? '#FFFFFF' : '#2F2F2F' }}
                      >
                        {card.quote}
                      </p>
                      <div className="mt-auto">
                        <p 
                          className="font-matter font-medium text-sm"
                          style={{ color: isCenter ? '#FFFFFF' : '#2F2F2F' }}
                        >
                          {card.name}
                        </p>
                        <p 
                          className="font-matter text-xs"
                          style={{ color: isCenter ? 'rgba(255,255,255,0.85)' : '#6B7280' }}
                        >
                          {card.role}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Dots indicator only */}
            <div className="flex justify-center items-center gap-1 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCardIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${index === activeCardIndex ? 'w-4' : 'w-1.5'}`}
                  style={{ backgroundColor: index === activeCardIndex ? '#FE7028' : '#D1D5DB' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
