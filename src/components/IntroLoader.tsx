import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ isLoading, onComplete }) => {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);

  useEffect(() => {
    if (!isLoading) {
      setPhase(1);
      return;
    }

    // Timeline - text first, image rises to center fully before fade out
    // Phase 1: Text rises slowly to center (0 - 1.5s)
    // Phase 2: Image rises smoothly to center (1.5s - 3s)
    // Phase 3: Text fades, image stays centered (3s - 3.5s)
    // Phase 4: Complete, fade out (3.5s - 4s)

    const phase2Timer = setTimeout(() => setPhase(2), 1500);
    const phase3Timer = setTimeout(() => setPhase(3), 3000);
    const phase4Timer = setTimeout(() => setPhase(4), 3500);
    const completeTimer = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      clearTimeout(phase4Timer);
      clearTimeout(completeTimer);
    };
  }, [isLoading, onComplete]);

  const textEase = [0.25, 0.46, 0.45, 0.94] as const;
  const imageEase = [0.25, 0.46, 0.45, 0.94] as const;
  const fadeEase = [0.4, 0, 0.1, 1] as const;

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        className="fixed inset-0 z-50 overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: fadeEase }}
      >
        {/* GNN Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/GNN_background.png)' }}
        />

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* NUMEROLOGIST Text - fades to low opacity, stays behind person */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: phase >= 1 ? 0 : '100vh',
            opacity: phase >= 3 ? 0.2 : 1
          }}
          transition={{
            y: { duration: 1.5, ease: textEase },
            opacity: { duration: 0.5, ease: fadeEase }
          }}
        >
          <h1
            className="font-bebas font-extrabold tracking-[0.12em] select-none text-center px-4"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 14rem)',
              color: '#FFD8C5',
              textShadow: '0 4px 80px rgba(255, 216, 197, 0.4)',
              fontWeight: 700,
              lineHeight: 1
            }}
          >
            NUMEROLOGIST
          </h1>
        </motion.div>

        {/* Person Image - rises from bottom to center, stays centered */}
        {phase >= 2 && (
          <motion.div
            className="absolute inset-0 flex items-end justify-center z-20"
            initial={{ y: '50%', opacity: 0 }}
            animate={{
              y: '0%',
              opacity: 1
            }}
            transition={{
              y: { duration: 1.5, ease: imageEase },
              opacity: { duration: 0.5, ease: fadeEase }
            }}
          >
            {/* Desktop image */}
            <img
              src="/GaurabNPP.png"
              alt="Gaurab Nerpagar"
              className="object-contain object-bottom hidden sm:block"
              style={{
                height: '80vh',
                maxHeight: '750px',
                width: 'auto',
                filter: 'drop-shadow(0 0 60px rgba(0, 0, 0, 0.6))'
              }}
            />
            {/* Mobile image */}
            <img
              src="/GaurabNPP.png"
              alt="Gaurab Nerpagar"
              className="object-contain object-bottom sm:hidden"
              style={{
                height: '55vh',
                width: 'auto',
                maxWidth: '85vw',
                filter: 'drop-shadow(0 0 40px rgba(0, 0, 0, 0.5))'
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroLoader;
