'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    content: `Working with Bhavana transformed my LinkedIn presence completely. I've generated over 20 quality leads in just two months after implementing her strategies.`,
    name: "Sarah Johnson",
    title: "Marketing Director",
    image: "/images/testimonial1.jpg"
  },
  {
    id: 2,
    content: `Bhavana's LinkedIn training for our sales team resulted in a 40% increase in connection acceptance rates and significantly more conversations with potential clients.`,
    name: "Michael Chen",
    title: "Sales Manager, TechGrowth Inc.",
    image: "/images/testimonial2.jpg"
  },
  {
    id: 3,
    content: `I was skeptical about LinkedIn's potential for my consulting business until I worked with Bhavana. Her content strategy helped me position myself as a thought leader in my industry.`,
    name: "Priya Sharma",
    title: "Business Consultant",
    image: "/images/testimonial3.jpg"
  }
];

const clientLogos = [
  { id: 1, name: 'Company 1', logo: '/placeholder-logo.png' },
  { id: 2, name: 'Company 2', logo: '/placeholder-logo.png' },
  { id: 3, name: 'Company 3', logo: '/placeholder-logo.png' },
  { id: 4, name: 'Company 4', logo: '/placeholder-logo.png' },
  { id: 5, name: 'Company 5', logo: '/placeholder-logo.png' },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const intervalRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [inView]);

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how professionals and businesses have transformed their LinkedIn presence and generated quality leads.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">Trusted by Companies Like</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client) => (
              <div key={client.id} className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded">
                  <p className="text-gray-500 text-sm">{client.name}</p>
                </div>
                {/* Uncomment when you have actual logos */}
                {/* <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  style={{ objectFit: 'contain' }}
                /> */}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-light p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-500 text-xs">Photo</p>
                </div>
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-2xl text-gray-600 italic mb-6">"{testimonials[currentTestimonial].content}"</div>
                <div className="font-bold text-dark">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].title}</div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Before & After Transformations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Before & After Image</p>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src="/case-study-1.jpg"
                  alt="LinkedIn Profile Transformation"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Profile Optimization</h4>
                <p className="text-gray-600 mb-4">
                  Complete LinkedIn profile makeover resulting in 200% more profile views and 15 new connection requests daily.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Before & After Image</p>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src="/case-study-2.jpg"
                  alt="Content Strategy Transformation"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Content Strategy</h4>
                <p className="text-gray-600 mb-4">
                  Implemented strategic content plan that increased engagement by 500% and generated 25 qualified leads per month.
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Before & After Image</p>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src="/case-study-3.jpg"
                  alt="Lead Generation Transformation"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Lead Generation</h4>
                <p className="text-gray-600 mb-4">
                  Outreach strategy that converted cold connections into 12 new clients within 3 months, with a 40% response rate.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 