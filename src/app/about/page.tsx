"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const timelineItems = [
    {
      period: "2023 - Present",
      title: "Founder, Brand Bhava",
      description: "Helping professionals and businesses grow their LinkedIn presence and generate quality leads."
    },
    {
      period: "2020 - 2023",
      title: "LinkedIn Growth Consultant",
      description: "Provided LinkedIn optimization and growth strategies for executives and businesses."
    },
    {
      period: "2017 - 2020",
      title: "Digital Marketing Manager",
      description: "Led social media and content marketing strategies for a tech company."
    },
    {
      period: "2014 - 2017",
      title: "Marketing Specialist",
      description: "Developed and executed marketing campaigns for various clients."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="dark:bg-gradient-to-b from-destructive to-transparent py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Make Your LinkedIn Profile 
              <span className="text-primary block mt-2">Top of Mind, First Choice, Only Choice</span>
            </h1>
            <p className="text-xl md:text-2xl  mb-6">
              Helping 13,000+ professionals and 50+ companies create showstopper LinkedIn profiles that generate real opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 md:py-24  border-b">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative z-10">
                <Image
                  src="/images/bhavana-profile.jpg"
                  alt="Bhavana Govil"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-accent/20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-primary/20 -z-10"></div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">My Story</h2>
              <p className="">
                As a LinkedIn enthusiast and Profile Designer, I discovered my passion for helping professionals leverage LinkedIn's full potential. What started as a simple desire to help others has grown into a mission that has impacted thousands of careers.
              </p>
              <p className="">
                With over 13,000 success stories and partnerships with 50+ companies, I've developed a deep understanding of what makes a LinkedIn profile truly stand out. My approach combines technical expertise with emotional intelligence, ensuring each profile reflects both professional excellence and authentic personal branding.
              </p>
              <div className="bg-secondary/30 p-6 rounded-lg border border-primary/10">
                <h3 className="font-semibold text-primary mb-2">Core Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Strong Ethics & Values
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    High Emotional Intelligence
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Positive Mindset
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services & Expertise */}
      <section className="py-16 bg-gradient-to-br border-b  from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How I Help You Succeed</h2>
            <p className="text-xl  max-w-3xl mx-auto">
              From profile optimization to lead generation strategies, I provide comprehensive solutions tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-card border rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl  font-bold mb-4">Profile Optimization</h3>
              <p className="">Create a LinkedIn profile that stands out and attracts your ideal opportunities with proven optimization techniques.</p>
            </div>

            <div className="bg-card border rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
                </svg>
              </div>
              <h3 className="text-xl   font-bold mb-4">Content Strategy</h3>
              <p className="">Develop engaging content that resonates with your audience and establishes your authority in your field.</p>
            </div>

            <div className="bg-card border rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl   font-bold mb-4">Lead Generation</h3>
              <p className="">Transform your LinkedIn presence into a lead-generating machine with proven engagement strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-16 md:py-24 bg-secondary/10 border-b">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h2>
          
          <div className="max-w-5xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/50"></div>
            
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div 
                  className={`relative flex ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } items-center w-full max-w-[calc(50%-20px)]`}
                >
                  {/* Content Card */}
                  <div className="bg-card border rounded-lg shadow-md p-6 w-full">
                    <div className="mb-4">
                      <h3 className="text-xl  font-bold">{item.period}</h3>
                      <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
                    </div>
                    <p className="">{item.description}</p>
                  </div>

                  {/* Timeline Dot */}
                  <div className={`absolute ${
                    index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                  } w-4 h-4 rounded-full bg-primary border-4 border-white`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-secondary/20 border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I Help</h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Tailored solutions for professionals at every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* BTL Profiles */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Professionals</h3>
              <div className="space-y-6">
                <div className="bg-card border rounded-xl p-6 shadow-md">
                  <h4 className="font-bold  mb-2">Job Seekers</h4>
                  <p className=" mb-4">Struggling to get noticed by employers on LinkedIn? We'll help you stand out.</p>
                </div>
                <div className="bg-card border rounded-xl p-6 shadow-md">
                  <h4 className="font-bold  mb-2">Entrepreneurs</h4>
                  <p className=" mb-4">Generate quality leads and build your brand presence on LinkedIn.</p>
                </div>
                <div className="bg-card border rounded-xl p-6 shadow-md">
                  <h4 className="font-bold  mb-2">Content Creators</h4>
                  <p className=" mb-4">Boost your content engagement and grow your following.</p>
                </div>
              </div>
            </motion.div>

            {/* ATL Profiles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Corporate</h3>
              <div className="space-y-6">
                <div className="bg-card border rounded-xl p-6 shadow-md">
                  <h4 className="font-bold  mb-2">Recruiters</h4>
                  <p className=" mb-4">Enhance your hiring process and employer branding on LinkedIn with us.</p>
                </div>
                <div className="bg-card border rounded-xl p-6 shadow-md">
                  <h4 className="font-bold  mb-2">Corporate Trainers</h4>
                  <p className=" mb-4">Develop effective training programs for LinkedIn optimization.</p>
                </div>
                <div className="bg-card border rounded-xl p-6 shadow-md">
                  <h4 className="font-bold  mb-2">HR Managers</h4>
                  <p className=" mb-4">Build a strong employer brand and improve internal recruiting.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-destructive text-white ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your LinkedIn Presence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of professionals who have already elevated their LinkedIn game with BrandBhava.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919999999999?text=Hi%20Bhavana,%20I'm%20interested%20in%20your%20LinkedIn%20services" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-2 rounded-md font-medium transition-all transform hover:scale-105 duration-300"
              >
                Join WhatsApp Community
              </a>
              <Link href="/contact">
                <Button size="lg" className=" border text-primary cursor-pointer bg-accent hover:bg-white/90 hover:scale-105 duration-300 font-medium px-8 py-3">
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}