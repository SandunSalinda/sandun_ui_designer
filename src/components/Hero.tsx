import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:rmsandunsalinda@gmail.com?subject=Let\'s work together&body=Hi Sandun,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0ABest regards,';
  };

  const blurAmount = Math.min(scrollY / 300, 1) * 10;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden pt-20 lg:pt-0">
      {/* Background with blur effect */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{ 
          filter: `blur(${blurAmount}px)`,
          transform: `scale(${1 + scrollY * 0.0005})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
      </div>

      {/* Glassmorphic overlay */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{ 
          background: `rgba(255, 255, 255, ${Math.min(scrollY / 500, 0.3)})`,
          backdropFilter: `blur(${Math.min(scrollY / 100, 20)}px)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`order-2 lg:order-1 text-center lg:text-left transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-3 py-2 mb-6 text-xs sm:text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700 leading-tight">preparing for my next opportunity in creative design and UX</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              I design stories — through visuals, motion, and intuitive interfaces
            </h1>
          </div>

          {/* Right Content */}
          <div className={`order-1 lg:order-2 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Profile Image */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-300">
                <img
                  src="/me.png"
                  alt="Sandun's profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Bio Text */}
              <div className="mt-6 lg:mt-8 text-center lg:text-right">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6 px-4 lg:px-0">
                  I'm a creative designer blending storytelling, design, and digital craft into seamless experiences.
                </p>
                
                <button 
                  onClick={handleEmailClick}
                  className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
                >
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Email Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;