import React from 'react';

const MeaningfulGiftsSection: React.FC = () => {
    return (
        <section className="relative w-full h-[700px] sm:h-[640px] lg:h-[735px] overflow-hidden">

            {/* Background layers */}
            <div className="absolute inset-0 w-full h-full">
                <div
                    className="absolute top-0 left-0 w-full h-[85%] lg:h-[70%]"
                    style={{
                        background: 'linear-gradient(to bottom, #616060 0%, #222222 100%)'
                    }}
                />

                <div
                    className="absolute bottom-0 left-0 w-full h-[17%] lg:h-[30%]"
                    style={{
                        background: 'radial-gradient(circle at center, #FFDA6C 20%, #FE7028 100%)'
                    }}
                />
            </div>

            {/* Soft vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
                }}
            />

            {/* Ornaments */}
            <img
                src="ornament_left.png"
                alt="Left Ornament"
                className="absolute top-0 left-0 w-[180px] lg:w-[300px] pointer-events-none"
                style={{
                    opacity: 0.4,
                    transform: 'translate(-5%, -5%)',
                    zIndex: 10
                }}
            />

            <img
                src="ornament_right_refined.png"
                alt="Right Ornament"
                className="absolute top-0 right-0 w-[180px] lg:w-[300px] pointer-events-none"
                style={{
                    opacity: 0.4,
                    transform: 'translate(5%, -5%)',
                    zIndex: 10
                }}
            />

            {/* ========= HALF CIRCLE IMAGE (FINAL FIX) ========= */}

            {/* Mobile: clipped container so diameter sits exactly at section end */}
            <div className="absolute bottom-0 left-0 w-full h-[250px] overflow-hidden pointer-events-none lg:hidden z-10">
                <img
                    src="/product_half_circle_mobile.png"
                    alt="Numerology Gifts Collection"
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[120%]"
                    style={{ maxWidth: '1000px' }}
                />
            </div>

            {/* Desktop: original behavior preserved */}
            <img
                src="/product_half_circle.png"
                alt="Numerology Gifts Collection"
                className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[57%] pointer-events-none"
                style={{
                    width: '90%',
                    maxWidth: '1000px',
                    zIndex: 15
                }}
            />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-start pt-6 lg:pt-14 px-4 text-center h-full">

                <h1
                    className="font-bebas text-4xl sm:text-5xl lg:text-7xl tracking-wide sm:tracking-wider mb-5"
                    style={{ color: '#FFFFFF' }}
                >
                    MEANINGFUL GIFTS GUIDED BY NUMBERS
                </h1>

                <p
                    className="font-matter text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8 opacity-75"
                    style={{ color: '#F5F1EA' }}
                >
                    Explore a collection of consciously created pieces, thoughtfully designed to bring harmony, clarity, and uplifting energy into everyday life.
                </p>

                <button
                    className="px-8 py-3.5 rounded-full font-matter font-medium text-white text-base sm:text-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg mb-12"
                    style={{
                        background: '#FE7028',
                        boxShadow: '0 4px 15px rgba(254, 112, 40, 0.3)'
                    }}
                >
                    Explore the Shop
                </button>

                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 w-full max-w-5xl mx-auto px-2">
                    <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition">
                        <span className="font-matter text-xs sm:text-base text-[#F5F1EA]">
                            Jewelry & Wearables
                        </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition">
                        <span className="font-matter text-xs sm:text-base text-[#F5F1EA]">
                            Sacred Home Essentials
                        </span>
                    </div>

                    <div className="col-span-2 flex justify-center sm:col-span-auto">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition w-[48%] sm:w-auto min-h-[60px] sm:min-h-0">
                            <span className="font-matter text-xs sm:text-base text-[#F5F1EA]">
                                Wellness Items
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MeaningfulGiftsSection;