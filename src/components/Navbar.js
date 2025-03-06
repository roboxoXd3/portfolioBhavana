'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">BrandBhava</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`${scrolled ? 'text-linkedinText' : 'text-white'} hover:text-primary font-medium transition-colors text-sm`}>
              Home
            </Link>
            <Link href="/about" className={`${scrolled ? 'text-linkedinText' : 'text-white'} hover:text-primary font-medium transition-colors text-sm`}>
              About
            </Link>
            <Link href="/services" className={`${scrolled ? 'text-linkedinText' : 'text-white'} hover:text-primary font-medium transition-colors text-sm`}>
              Services
            </Link>
            <Link href="/resources" className={`${scrolled ? 'text-linkedinText' : 'text-white'} hover:text-primary font-medium transition-colors text-sm`}>
              Resources
            </Link>
            <Link href="/events" className={`${scrolled ? 'text-linkedinText' : 'text-white'} hover:text-primary font-medium transition-colors text-sm`}>
              Events
            </Link>
            <Link href="/blog" className={`${scrolled ? 'text-linkedinText' : 'text-white'} hover:text-primary font-medium transition-colors text-sm`}>
              Blog
            </Link>
            <Link href="/contact" className={`${scrolled ? 'text-linkedinText' : 'text-white'} hover:text-primary font-medium transition-colors text-sm`}>
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="https://wa.me/your-whatsapp-number" 
              className="flex items-center bg-white border border-primary text-primary px-4 py-1.5 rounded-full hover:bg-linkedinHover transition-colors text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2" />
              <span>Join WhatsApp</span>
            </Link>
            <Link 
              href="https://calendly.com/your-calendly-link" 
              className="flex items-center bg-primary text-white px-4 py-1.5 rounded-full hover:bg-secondary transition-colors text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCalendarAlt className="mr-2" />
              <span>Book a Call</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-linkedinText' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-linkedinText hover:text-primary font-medium transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-linkedinText hover:text-primary font-medium transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-linkedinText hover:text-primary font-medium transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/resources" 
              className="text-linkedinText hover:text-primary font-medium transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/events" 
              className="text-linkedinText hover:text-primary font-medium transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/blog" 
              className="text-linkedinText hover:text-primary font-medium transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-linkedinText hover:text-primary font-medium transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-linkedinBorder">
              <Link 
                href="https://wa.me/your-whatsapp-number" 
                className="flex items-center justify-center bg-white border border-primary text-primary px-4 py-1.5 rounded-full hover:bg-linkedinHover transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <FaWhatsapp className="mr-2" />
                <span>Join WhatsApp</span>
              </Link>
              <Link 
                href="https://calendly.com/your-calendly-link" 
                className="flex items-center justify-center bg-primary text-white px-4 py-1.5 rounded-full hover:bg-secondary transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <FaCalendarAlt className="mr-2" />
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 