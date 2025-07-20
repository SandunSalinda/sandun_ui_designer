import { motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:rmsandunsalinda@gmail.com?subject=Let\'s work together&body=Hi Sandun,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0ABest regards,';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-0">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-white" />

      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-2 mb-8 text-sm border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-gray-600 font-medium">Available for opportunities</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I design stories through{' '}
              <span className="text-gray-600">visuals, motion, and intuitive interfaces</span>
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Creative designer blending storytelling, design, and digital craft into seamless experiences.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button 
                onClick={handleEmailClick}
                className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-lg hover:bg-gray-800 transition-all duration-200"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                <span>Let's collaborate</span>
              </motion.button>

              <motion.button 
                className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View work</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Clean profile image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                <img
                  src="/me.png"
                  alt="Sandun's profile"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
              </div>

              {/* Minimal floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm"
                animate={{ 
                  y: [0, -8, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-gray-700">UI/UX Designer</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
          animate={{ y: [0, -4, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
