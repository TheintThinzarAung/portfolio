import React, { useEffect, useRef } from 'react';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { setupParticles } from '../utils/particles';
import profilepic from '../images/profilepic.jpg';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const cleanup = setupParticles(canvasRef.current);
      return cleanup;
    }
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-purple-950">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }}
      />
      
      <div style={{marginTop: '20px'}} className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Picture */}
            <motion.div 
              className="relative inline-block mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-purple-900 shadow-lg animate-glow">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <img src={profilepic} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-purple-500/20 to-transparent animate-pulse-soft"></div>
            </motion.div>

            {/* Name and Title */}
            <motion.h3
              className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
                Theint Thinzar Aung
              </span>
            </motion.h3>

            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Data & Business Analyst
            </motion.h2>

            {/* Tagline */}
            <motion.div 
              className="max-w-3xl mx-auto mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Data-Driven Decision Making • Business Process Optimization • Data Visualization & Reporting • Stakeholder Collaboration • Predictive & Trend Analysis
              </p>
            </motion.div>

            {/* Location and Experience */}
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              📍 Fremont, California | 📅 5+ Years Experience
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-6 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a
                href="mailto:theintthinzaraung1995@gmail.com"
                className="p-3 rounded-full bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 animate-bounce-soft shadow-md hover:shadow-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/theint-thinzar-aung"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 animate-bounce-soft shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/TheintThinzarAung"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 animate-bounce-soft shadow-md hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button style={{marginTop: '50px'}}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="text-gray-600 dark:text-gray-400 animate-bounce" size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;