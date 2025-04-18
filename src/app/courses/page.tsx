"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, LineChart, Award } from 'lucide-react';

export default function CoursesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const courseCategories = [
    {
      title: "Coaches",
      tagline: "Attract Premium Clients",
      description: "Specialized LinkedIn strategies to help coaches position themselves as authorities and attract high-ticket clients who value their expertise.",
      href: "/courses/coaches",
      icon: <Users className="h-12 w-12 text-primary" />,
      features: [
        "Position yourself as the go-to expert in your coaching niche",
        "Attract premium clients who value your expertise",
        "Create engaging content that establishes your authority",
        "Implement proven outreach strategies that convert",
      ]
    },
    {
      title: "Corporate Professionals",
      tagline: "Boost Your Brand Visibility",
      description: "Strategic approaches to help corporate professionals enhance their personal brand and advance their careers through LinkedIn optimization.",
      href: "/courses/corporate",
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      features: [
        "Position yourself as an industry thought leader",
        "Increase visibility within your organization and industry",
        "Strategically network with decision-makers",
        "Create content that showcases your expertise and value",
      ]
    },
    {
      title: "Consultants",
      tagline: "Generate Quality Leads",
      description: "Proven lead generation systems for consultants who want to attract high-value clients and establish authority in their field.",
      href: "/courses/consultants",
      icon: <LineChart className="h-12 w-12 text-primary" />,
      features: [
        "Generate a consistent flow of high-quality leads",
        "Position yourself as a premium service provider",
        "Implement value-based pricing strategies",
        "Convert more prospects into long-term clients",
      ]
    },
    {
      title: "Profile Optimization",
      tagline: "Become a Brand That Sparkles",
      description: "Comprehensive profile transformation services that help you stand out from the crowd and make a powerful first impression on LinkedIn.",
      href: "/courses/profile-optimization",
      icon: <Award className="h-12 w-12 text-primary" />,
      features: [
        "Create a compelling profile that instantly communicates your value",
        "Optimize for LinkedIn's algorithm to increase visibility",
        "Craft a story-driven About section that connects with your audience",
        "Present your experience in a way that highlights achievements",
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 dark:bg-gradient-to-b from-destructive to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                LinkedIn Mastery for Every Professional
              </h1>
              <p className="text-xl mb-8 ">
                Discover specialized LinkedIn programs designed to help you achieve your specific professional goals, whether you're a coach, corporate professional, consultant, or simply looking to optimize your presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="text-lg px-8 py-6">
                  Find Your Perfect Program
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6">
                  Book a Strategy Call
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12  border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "900M+", text: "professionals on LinkedIn globally" },
              { number: "61M+", text: "senior-level influencers active on the platform" },
              { number: "40M", text: "decision-makers use LinkedIn regularly" },
              { number: "80%", text: "of B2B leads come through LinkedIn" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Approach to LinkedIn Success
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We believe in tailored strategies for different professional goals. One-size-fits-all approaches don't work when it comes to LinkedIn.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary text-lg font-medium">
                Image of Bhavana coaching a client on LinkedIn strategies
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3">Specialized Expertise</h3>
                <p className="">
                  Rather than generic advice, our programs are specialized for specific professional categories, addressing the unique challenges and opportunities of each.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Results-Focused Methodology</h3>
                <p className="">
                  Our strategies focus on tangible outcomes: more clients for coaches, career advancement for corporate professionals, quality leads for consultants, and increased visibility for everyone.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Proven Systems</h3>
                <p className="">
                  Each program is built on systems and frameworks that have been tested and refined with hundreds of clients, ensuring predictable results when implemented correctly.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Ongoing Support</h3>
                <p className="">
                  We don't just teach and leave. Our programs include ongoing support and community to help you implement effectively and adapt to LinkedIn's evolving landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Path to LinkedIn Success
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Select the program that's specifically designed for your professional goals and challenges.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {courseCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className=" rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full"
              >
                <div className="p-8 border-b border-gray-100">
                  <div className="mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-primary font-semibold mb-4">{category.tagline}</p>
                  <p className="mb-6">{category.description}</p>
                  <div className="space-y-2 mb-8">
                    {category.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-primary mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 mt-auto">
                  <Link href={category.href}>
                    <Button className="w-full text-lg py-6">
                      Explore {category.title} Programs
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              See what participants across our various programs have achieved with our LinkedIn strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "As a leadership coach, I was struggling to find premium clients. After implementing Bhavana's LinkedIn strategies, I'm now fully booked with a waiting list!",
                name: "Arjun Reddy",
                title: "Executive Coach",
                category: "Coaches Program"
              },
              {
                quote: "The corporate program helped me position myself for a promotion within my organization. The strategies for internal visibility were game-changing.",
                name: "Sneha Kapoor",
                title: "Senior Marketing Manager",
                category: "Corporate Professionals Program"
              },
              {
                quote: "My consulting business transformed after implementing the lead generation system. I'm now attracting better clients and charging premium rates.",
                name: "Vikram Malhotra",
                title: "Management Consultant",
                category: "Consultants Program"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className=" p-6 rounded-lg"
              >
                <p className="italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    <p className="text-primary text-sm mt-1">{testimonial.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Sure Which Program Is Right for You?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book a complimentary strategy call to discuss your goals and find the perfect LinkedIn solution for your specific needs.
            </p>
            <Button className=" text-primary bg-accent hover:bg-accent/80 text-lg px-8 py-6">
              Book Your Free Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Common questions about our LinkedIn programs.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Why do you offer different programs for different professionals?",
                answer: "Each professional category faces unique challenges and has different goals for their LinkedIn presence. Coaches need to attract clients, corporate professionals focus on career advancement, consultants require lead generation, and everyone benefits from profile optimization. Our specialized approach ensures you get exactly what you need."
              },
              {
                question: "Can I start with one program and add others later?",
                answer: "Absolutely! Many clients start with Profile Optimization and then move to a specialized program for their professional category. We offer special rates for returning clients who want to expand their LinkedIn mastery."
              },
              {
                question: "Do your programs work for professionals in any industry?",
                answer: "Yes, our methodologies have been successfully implemented across dozens of industries. While the core strategies remain consistent, we provide guidance on industry-specific applications and examples throughout our programs."
              },
              {
                question: "How much time do I need to dedicate to see results?",
                answer: "Most clients see initial results with just 3-5 hours per week of focused LinkedIn activity. Our programs are designed for busy professionals and include efficiency strategies to maximize your return on time invested."
              },
              {
                question: "What support do you offer after I purchase a program?",
                answer: "All our programs include some level of ongoing support, from email assistance to community access to personal coaching, depending on the tier you select. We're committed to your success and provide the resources you need to implement effectively."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className=" p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 