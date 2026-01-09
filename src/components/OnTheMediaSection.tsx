import React, { useState } from 'react';

const OnTheMediaSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="w-full bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="text-center mb-12 sm:mb-16">
                    <h2
                        className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wider"
                        style={{ color: '#FE7028' }}
                    >
                        ON THE MEDIA
                    </h2>
                </div>


                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group">
                        {!isPlaying ? (
                            <div
                                className="relative w-full h-full cursor-pointer"
                                onClick={() => setIsPlaying(true)}
                            >

                                <img
                                    src="https://img.youtube.com/vi/NILn4EmP4j4/maxresdefault.jpg"
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                />


                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 transition-transform duration-300 group-hover:scale-110">
                                        <div className="w-14 h-14 bg-[#FE7028] rounded-full flex items-center justify-center shadow-lg">
                                            <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/NILn4EmP4j4?autoplay=1&rel=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        )}
                    </div>


                    <div className="text-left space-y-6">

                        <div className="max-w-[520px]">
                            <h3
                                className="font-bebas tracking-wide"
                                style={{
                                    color: '#2F2F2F',
                                    lineHeight: '1.05',
                                }}
                            >

                                <div className="text-[26px] sm:text-[30px] lg:text-[34px]">
                                    NUMEROLOGY AND{' '}
                                    <span style={{ color: '#FE7028' }}>NAME CORRECTION</span> CAN
                                </div>


                                <div className="mt-1 text-[26px] sm:text-[30px] lg:text-[34px]">
                                    <span style={{ color: '#FE7028' }}>CHANGE YOUR LIFE</span>
                                    <span className="mx-2 text-[#BDBDBD]">|</span>
                                    MONEY, CAREER &
                                </div>


                                <div className="mt-1 text-[26px] sm:text-[30px] lg:text-[34px]">
                                    RELATIONSHIP SECRETS
                                </div>
                            </h3>
                        </div>



                        <p
                            className="font-matter text-base sm:text-lg leading-relaxed max-w-xl"
                            style={{ color: '#424242' }}
                        >
                            We were honored to be featured on a popular podcast, where our numerologist shared deep insights into numerology, life paths, and its real-world impact on personal growth, relationships, and clarity. Tune in to learn more from the full episode.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OnTheMediaSection;