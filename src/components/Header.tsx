import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBehanceClick = () => {
    window.open('https://www.behance.net/sandunsalinda', '_blank');
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Left - Name/Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg lg:text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              Sandun Salinda
            </button>
          </motion.div>

          {/* Center - Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-gray-900 relative ${
                  activeSection === item.id ? 'text-gray-900' : 'text-gray-600'
                }`}
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gray-900"
                    layoutId="activeTab"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Right - Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
            
            <motion.button 
              onClick={handleBehanceClick}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Behance
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden"
        >
          <motion.div 
            className="px-2 pt-2 pb-3 space-y-1 bg-white border border-gray-100 rounded-lg shadow-sm mt-3"
            initial={{ y: -10 }}
            animate={{ y: isMenuOpen ? 0 : -10 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-gray-900 hover:bg-gray-50 w-full text-left ${
                  activeSection === item.id ? 'text-gray-900 bg-gray-50' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="pt-2 space-y-1 border-t border-gray-100">
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="w-full px-3 py-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 text-left rounded-md hover:bg-gray-50 text-sm"
              >
                Contact
              </motion.button>
              <motion.button 
                onClick={handleBehanceClick}
                className="w-full bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-all duration-200"
              >
                Behance
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
