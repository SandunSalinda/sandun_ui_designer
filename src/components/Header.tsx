import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Left - Name/Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 hover:text-blue-600 transition-colors duration-300"
            >
              Sandun Salinda
            </button>
          </div>

          {/* Center - Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm xl:text-base font-medium transition-all duration-300 hover:text-blue-600 relative ${
                  activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Right - Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 xl:px-6 xl:py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 text-sm xl:text-base"
            >
              Contact
            </button>
            {/*<button className="px-4 py-2 xl:px-6 xl:py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm xl:text-base">
              Resume
            </button> */}
            
            <button 
              onClick={handleBehanceClick}
              className="px-4 py-2 xl:px-6 xl:py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm xl:text-base"
            >
              Behance
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 border border-gray-200/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-blue-600 hover:bg-gray-50 w-full text-left ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 space-y-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-3 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 text-left rounded-md hover:bg-gray-50"
                >
                  Contact
                </button>
                <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
                  Resume
                </button>
                <button 
                  onClick={handleBehanceClick}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Behance
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;