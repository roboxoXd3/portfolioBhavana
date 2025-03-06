'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserTie, FaChartLine, FaUsers, FaCalendarAlt, FaMicrophone } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "LinkedIn Profile Optimization",
    description: "Transform your LinkedIn profile into a powerful personal branding tool that attracts your ideal clients and opportunities. I'll help you craft a compelling story that showcases your expertise and unique value proposition.",
    icon: <FaUserTie className="text-4xl" />,
    link: "/services#profile-optimization"
  },
  {
    id: 2,
    title: "Content Strategy & Creation",
    description: "Develop a strategic content plan that positions you as a thought leader in your industry. I'll help you create engaging posts that resonate with your target audience and drive meaningful engagement.",
    icon: <FaChartLine className="text-4xl" />,
    link: "/services#content-strategy"
  },
  {
    id: 3,
    title: "Lead Generation",
    description: "Implement proven strategies to attract and convert high-quality leads through LinkedIn. I'll show you how to leverage the platform's features to build relationships that translate into business opportunities.",
    icon: <FaUsers className="text-4xl" />,
    link: "/services#lead-generation"
  },
  {
    id: 4,
    title: "LinkedIn Training & Workshops",
    description: "Custom training sessions for individuals and teams to master LinkedIn for business growth. Learn the latest strategies and best practices to maximize your results on the platform.",
    icon: <FaCalendarAlt className="text-4xl" />,
    link: "/services#training"
  },
  {
    id: 5,
    title: "Speaking Engagements",
    description: "Engaging presentations on LinkedIn strategy, personal branding, and social selling for conferences, corporate events, and industry gatherings.",
    icon: <FaMicrophone className="text-4xl" />,
    link: "/services#speaking"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic solutions to elevate your LinkedIn presence and generate quality leads
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                href={service.link}
                className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link 
            href="/services"
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors inline-flex items-center"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;