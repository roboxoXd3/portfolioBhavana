'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserTie, FaChartLine, FaUsers, FaCalendarAlt, FaMicrophone } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'LinkedIn Profile Makeover',
    description: 'Transform your LinkedIn profile into a lead-generating machine with professional optimization.',
    icon: <FaUserTie size={40} />,
    link: '/services#profile-makeover',
  },
  {
    id: 2,
    title: 'Lead Generation Strategies',
    description: 'Implement proven outreach and engagement strategies to attract high-quality leads.',
    icon: <FaChartLine size={40} />,
    link: '/services#lead-generation',
  },
  {
    id: 3,
    title: '1:1 LinkedIn Training & Consulting',
    description: 'Personalized coaching to help you master LinkedIn for your specific business goals.',
    icon: <FaUsers size={40} />,
    link: '/services#training',
  },
  {
    id: 4,
    title: 'Content Strategy & Calendar Creation',
    description: 'Develop a strategic content plan that resonates with your audience and drives engagement.',
    icon: <FaCalendarAlt size={40} />,
    link: '/services#content-strategy',
  },
  {
    id: 5,
    title: 'Keynote Speaking & Corporate Training',
    description: 'Engaging workshops and presentations on LinkedIn growth and personal branding.',
    icon: <FaMicrophone size={40} />,
    link: '/services#speaking',
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-light" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What You'll Learn from Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive LinkedIn strategies to help you build your personal brand and generate quality leads.
          </p>
        </motion.div>

        <motion.div
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