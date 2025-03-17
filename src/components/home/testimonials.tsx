"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Bhavana's LinkedIn branding strategies helped my coaching business get 3x more qualified leads within just 2 months!",
      author: "Priya Sharma",
      position: "Executive Coach",
      image: "/images/testimonials/testimonial-1.jpg", // Placeholder image name
    },
    {
      quote: "Our corporate team's LinkedIn presence transformed after Bhavana's training. We're now seen as thought leaders in our industry.",
      author: "Rajiv Mehta",
      position: "Marketing Director, TechCorp India",
      image: "/images/testimonials/testimonial-2.jpg", // Placeholder image name
    },
    {
      quote: "As a consultant, my client acquisition has improved dramatically. Bhavana's profile optimization and content strategy was game-changing.",
      author: "Ananya Gupta",
      position: "Independent Financial Consultant",
      image: "/images/testimonials/testimonial-3.jpg", // Placeholder image name
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Real Results. Real People.</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Join over 13,000 professionals who have transformed their LinkedIn presence with my strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6 pb-6 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/bhavana-profile.jpg";
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="mb-4 text-primary">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="opacity-20"
                      >
                        <path d="M11.86 7c-.4 0-.72.33-.72.72v5.95c0 .4.33.72.72.72h5.95c.4 0 .72-.33.72-.72v-5.95c0-.4-.33-.72-.72-.72h-5.95zm0-3.58h5.95c2.4 0 4.3 1.9 4.3 4.3v5.95c0 2.4-1.9 4.3-4.3 4.3h-5.95c-2.4 0-4.3-1.9-4.3-4.3v-5.95c0-2.4 1.9-4.3 4.3-4.3z"></path>
                        <path d="M6.1 12.55A2.15 2.15 0 0 1 3.97 10.4a2.15 2.15 0 1 1 4.31 0 2.15 2.15 0 0 1-2.15 2.15h-.02zm0-7.15a2.15 2.15 0 0 1-2.15-2.15 2.15 2.15 0 1 1 4.31 0 2.15 2.15 0 0 1-2.15 2.15h-.02zm0 14.3A2.15 2.15 0 0 1 3.97 17.6a2.15 2.15 0 1 1 4.31 0 2.15 2.15 0 0 1-2.15 2.15l-.02-.05z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg italic font-medium">"{testimonial.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center bg-white rounded-full p-1 pr-4 shadow-md">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
              <Image 
                src="/images/bhavana-profile.jpg" 
                alt="Bhavana Govil" 
                fill
                className="object-cover"
              />
            </div>
            <span className="text-gray-700 font-medium">Trusted by professionals from 30+ countries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 