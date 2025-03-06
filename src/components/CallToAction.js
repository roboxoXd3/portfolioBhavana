'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

const CallToAction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-linkedinBg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-linkedinText">
            Ready to Transform Your LinkedIn Presence?
          </h2>
          <p className="text-lg mb-8 text-linkedinText">
            Join my WhatsApp group for free LinkedIn resources or schedule a call to discuss how I can help you achieve your LinkedIn goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" />
              <span>Join WhatsApp Group</span>
            </a>
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
            >
              <FaCalendarAlt className="mr-2" />
              <span>Book a Call</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 