import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import avatarImg from '../assets/images/avatar.png';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 220);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.4 }
    );
  }, []);

  return (
    <main id="home" className="min-h-screen bg-zinc-900 pt-32 px-6 md:px-20 text-white">
      {/* Sticky Header Navigation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={scrolled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed home-0 left-0 w-full z-50 shadow-md bg-zinc-900/90 backdrop-blur-sm"
      >
        <div className="max-w-8xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={avatarImg}
              alt="coder avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg ml-16"
            />
            <span className="text-white font-bold">Arti Lanke</span>
          </div>
          <nav className="flex gap-4 text-sm font-medium mr-16">
            <a href="#home" className={`transition-colors px-2 py-1 rounded ${activeSection === 'home' ? 'text-amber-500 font-bold' : 'text-cyan-400 hover:text-amber-300'}`}>Home</a>
            <a href="#about" className={`transition-colors px-2 py-1 rounded ${activeSection === 'about' ? 'text-amber-500 font-bold' : 'text-cyan-400 hover:text-amber-300'}`}>About Me</a>
            <a href="#contact" className={`transition-colors px-2 py-1 rounded ${activeSection === 'contact' ? 'text-amber-500 font-bold' : 'text-cyan-400 hover:text-amber-300'}`}>Contact</a>
          </nav>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section ref={homeRef} className="text-center mt-6" id="home">
        <img
          src={avatarImg}
          alt="coder avatar"
          className="w-40 h-40 rounded-full mx-auto mt-6 object-cover"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-200 mt-4">Hi, I'm Arti Lanke</h1>
        <p className="text-lg text-cyan-400 mt-2">
          Software Developer | C++ | C# | Unity | SQL
        </p>
        {/* Static Navigation Buttons */}
        <nav className="flex justify-center gap-6 mt-8 text-sm font-medium">
          <a href="#home" className={`transition-colors px-2 py-1 rounded ${activeSection === 'home' ? 'text-amber-500 font-bold' : 'text-cyan-400 hover:text-amber-300'}`}>Home</a>
          <a href="#about" className={`transition-colors px-2 py-1 rounded ${activeSection === 'about' ? 'text-amber-500 font-bold' : 'text-cyan-400 hover:text-amber-300'}`}>About Me</a>
          <a href="#contact" className={`transition-colors px-2 py-1 rounded ${activeSection === 'contact' ? 'text-amber-500 font-bold' : 'text-cyan-400 hover:text-amber-300'}`}>Contact</a>
        </nav>
      </section>
    </main>
  );
};

export default Home;