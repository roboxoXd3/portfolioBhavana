"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MeetBhavana = () => {
  return (
    <section className="py-16 md:py-24 border-b">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Bhavana Govil</h2>
          <p className=" max-w-2xl mx-auto">
            Learn how I help professionals grow their presence and generate leads on LinkedIn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Profile Image Column */}
          <motion.div 
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/images/bhavana-profile.jpg"
                alt="Bhavana Govil - LinkedIn Expert"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                {/* Replace with actual video component when available */}
                <div className="flex flex-col items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-16 h-16 text-primary/50 mb-4"
                  >
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500">Video Introduction (2-3 minutes)</span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <blockquote className=" text-lg italic">
                    "I'm passionate about helping professionals leverage LinkedIn to its full potential. Through strategic personal branding and proven lead generation techniques, I've helped thousands of individuals and companies transform their LinkedIn presence."
                  </blockquote>
                  <p className="text-right mt-4 font-semibold">- Bhavana Govil</p>
                </div>
                
                <div className="mt-8 text-center">
                  <Link href="/about">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Learn More About Me
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetBhavana; 