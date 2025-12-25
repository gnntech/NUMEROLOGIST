import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ isLoading, onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState<'text' | 'person' | 'transition' | 'complete'>('text');

  useEffect(() => {
    if (!isLoading) return;

    // Animation timeline
    const timeline = [
      // Phase 1: Text intro (0-1.5s)
      { phase: 'text', delay: 0 },
      // Phase 2: Person reveal (1.5-3s) 
      { phase: 'person', delay: 1500 },
      // Phase 3: Transition (3-4.5s)
      { phase: 'transition', delay: 3000 },
      // Phase 4: Complete (4.2s)
      { phase: 'complete', delay: 4200 } // Slightly earlier to allow smooth transition
    ];

    const timeouts = timeline.map(({ phase, delay }) =>
      setTimeout(() => {
        setCurrentPhase(phase as any);
        if (phase === 'complete') {
          // Add a small delay before calling onComplete to ensure smooth transition
          setTimeout(() => {
            onComplete();
          }, 300);
        }
      }, delay)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [isLoading, onComplete]);

  // Animation variants for text
  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  // Animation variants for person image
  const personVariants = {
    hidden: {
      opacity: 0,
      scale: 1,
      x: 0,
      y: '100vh'
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: '50px',
      y: 0,
      transition: {
        duration: 1.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.5
      }
    },
    slideRight: {
      opacity: 1,
      scale: 1,
      x: 'calc(75vw - 975px)',
      y: '150px',
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  // Container variants for smooth transitions
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="intro-loader"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)'
        }}
      >
        {/* GNN Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/GNN_background.png)' }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Smooth transition overlay */}
        <motion.div
          className="absolute inset-0 z-5"
          style={{ 
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentPhase === 'complete' ? 0 : 0.3 
          }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        <motion.div
          className="relative flex items-center justify-center w-full h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Phase 1 & 2: Text and Person */}
          {(currentPhase === 'text' || currentPhase === 'person' || currentPhase === 'transition') && (
            <>
              {/* NUMEROLOGIST Text - Lower z-index (BEHIND image) */}
              <motion.div
                className="absolute z-10 text-center"
                variants={textVariants}
                initial="hidden"
                animate={currentPhase === 'transition' ? 'exit' : 'visible'}
              >
                <h1 
                  className="font-bebas tracking-wider select-none"
                  style={{
                    fontSize: 'clamp(4rem, 12vw, 10rem)',
                    color: '#FFD8C5',
                    textShadow: '0 0 30px rgba(255, 216, 197, 0.3)',
                    letterSpacing: '0.1em',
                    lineHeight: '1.1',
                    fontWeight: '900',
                    opacity: 0.7
                  }}
                >
                  NUMEROLOGIST
                </h1>
                
                {/* Subtle underline animation */}
                
              </motion.div>

              {/* Person Image - Higher z-index to appear IN FRONT of text */}
              {(currentPhase === 'person' || currentPhase === 'transition') && (
                <motion.div
                  className="absolute z-20"
                  variants={personVariants}
                  initial="hidden"
                  animate={currentPhase === 'transition' ? 'slideRight' : 'visible'}
                  style={{
                    width: '750px',
                    height: '1000px',
                    maxWidth: '750px',
                    maxHeight: '1000px'
                  }}
                >
                  <img
                    src="/GaurabNPP.png"
                    alt="Gaurab Nerpagar"
                    className="w-full h-auto object-contain filter drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 40px rgba(0, 0, 0, 0.6))',
                      maxHeight: '1000px',
                      minWidth: '750px'
                    }}
                  />
                </motion.div>
              )}
            </>
          )}

          {/* Final fade overlay for smooth transition */}
          {currentPhase === 'complete' && (
            <motion.div
              className="absolute inset-0 z-30"
              style={{ 
                backgroundImage: 'url(/GNN_background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
          )}

          {/* Loading indicator for Phase 1 */}
          {currentPhase === 'text' && (
            <motion.div
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-orange-300 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroLoader;