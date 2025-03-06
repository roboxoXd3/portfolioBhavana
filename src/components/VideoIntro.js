'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay } from 'react-icons/fa';

const VideoIntro = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Meet Bhavana Govil</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how I help professionals grow their presence and generate leads on LinkedIn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            {/* Video Placeholder - Replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4 cursor-pointer hover:bg-secondary transition-colors">
                  <FaPlay className="ml-1" />
                </div>
                <p className="text-gray-500">Video Introduction (2-3 minutes)</p>
              </div>
            </div>
            
            {/* Uncomment and use when you have the actual video */}
            {/* 
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/your-video-id" 
              title="Bhavana Govil - LinkedIn Growth Expert" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
            */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-600">
            {'"'}I{"'"}m passionate about helping professionals leverage LinkedIn to its full potential. 
            Through strategic personal branding and proven lead generation techniques, I{"'"}ve helped 
            thousands of individuals and companies transform their LinkedIn presence.{'"'}
          </p>
          <p className="text-primary font-bold mt-4">- Bhavana Govil</p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoIntro; 