'use client';

import Image from 'next/image';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-linkedinBg">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-linkedinText leading-tight mb-4">
              Capture More Opportunities on LinkedIn with Proven Branding & Growth Strategies!
            </h1>
            <h2 className="text-lg md:text-xl text-gray-600 mb-8">
              Helping Coaches, Consultants, and Professionals Build Their Personal Brand & Generate Leads on LinkedIn.
            </h2>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://wa.me/your-whatsapp-number" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white border border-primary text-primary px-5 py-2.5 rounded-full hover:bg-linkedinHover transition-colors font-medium"
              >
                <FaWhatsapp className="mr-2" />
                <span>Join My WhatsApp Group</span>
              </a>
              <a 
                href="https://calendly.com/your-calendly-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-primary text-white px-5 py-2.5 rounded-full hover:bg-secondary transition-colors font-medium"
              >
                <FaCalendarAlt className="mr-2" />
                <span>Book a Call</span>
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-linkedinBorder text-center">
                <p className="text-2xl font-bold text-primary">13,000+</p>
                <p className="text-gray-600 text-sm">Professionals Helped</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-linkedinBorder text-center">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-gray-600 text-sm">Companies Served</p>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden border border-linkedinBorder">
              {/* Replace with actual image of Bhavana Govil */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
                <p className="text-gray-500">Professional Image of Bhavana Govil</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              <Image
                src="/images/profileImage.jpeg"
                alt="Bhavana Govil - LinkedIn Growth Expert"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 