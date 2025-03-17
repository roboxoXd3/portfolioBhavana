"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Transformations = () => {
  const transformations = [
    {
      title: "Profile Optimization",
      description: "Complete LinkedIn profile makeover resulting in 300% more profile views and 15 new connection requests daily.",
      beforeImage: "/images/transformations/profile-before.jpg",
      afterImage: "/images/transformations/profile-after.jpg"
    },
    {
      title: "Content Strategy",
      description: "Implemented strategic content plan that increased engagement by 500% and generated 25 qualified leads per month.",
      beforeImage: "/images/transformations/content-before.jpg",
      afterImage: "/images/transformations/content-after.jpg"
    },
    {
      title: "Lead Generation",
      description: "Success strategy that converted solid connections into 12 new clients within 3 months, with a 40% response rate.",
      beforeImage: "/images/transformations/leads-before.jpg",
      afterImage: "/images/transformations/leads-after.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Before & After Transformations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Before Image</span>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">After Image</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-primary/50 text-white text-xs px-2 py-1 rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations; 