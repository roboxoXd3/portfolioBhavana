"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

const SuccessStories = () => {
  const companies = [
    "Company 1", "Company 2", "Company 3", "Company 4", "Company 5"
  ];

  const testimonials = [
    {
      quote: "Bhavana's LinkedIn training for our sales team resulted in a 40% increase in connection acceptance rates and significantly more conversations with potential clients.",
      author: "Michael Chen",
      position: "Sales Manager, TechGrowth Inc.",
      image: "/images/testimonials/michael.jpg"
    },
    // Add more testimonials here
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className=" max-w-2xl mx-auto">
            See how professionals and businesses have transformed their LinkedIn presence and generated quality leads.
          </p>
        </motion.div>

        {/* Trusted Companies */}
        <div className="mb-16">
          <motion.p 
            className="text-center text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Trusted by Companies Like
          </motion.p>
          <div className="flex flex-wrap  justify-center gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className=" rounded-lg bg-card px-6 py-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card  rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className=" text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className=" italic">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 