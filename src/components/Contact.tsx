import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import {
  FaLinkedin,
  FaDribbble,
  FaBehance,
  FaInstagram
} from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left side - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Let's make something{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                amazing
              </span>{' '}
              together
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-lg">
              Ready to bring your vision to life? Let's collaborate and create exceptional digital experiences.
            </p>
            <motion.a
              href="mailto:rmsandunsalinda@gmail.com"
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Right side - Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Email */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Email</h3>
                <a
                  href="mailto:rmsandunsalinda@gmail.com"
                  className="flex items-center space-x-2 text-lg hover:text-blue-400 transition-colors duration-300 group"
                >
                  <Mail size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="break-all">rmsandunsalinda@gmail.com</span>
                </a>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Phone</h3>
                <a
                  href="tel:+94771234567"
                  className="flex items-center space-x-2 text-lg hover:text-blue-400 transition-colors duration-300 group"
                >
                  <Phone size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <span>+94 77 123 4567</span>
                </a>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Location</h3>
                <div className="flex items-center space-x-2 text-lg">
                  <MapPin size={20} className="text-gray-400" />
                  <span>Gampaha, Sri Lanka</span>
                </div>
              </div>

              {/* Social */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Follow</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/in/sandun-salinda-532416265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin size={18} />
                  </motion.a>
                  <motion.a
                    href="https://dribbble.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaDribbble size={18} />
                  </motion.a>
                  <motion.a
                    href="https://www.behance.net/sandunsalinda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaBehance size={18} />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/sandun_salinda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaInstagram size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold">Sandun Randhika</span>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2024 All rights reserved. Designed & Developed with ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;