"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Check, Linkedin } from 'lucide-react';

export default function CoachesPage() {
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

  const painPoints = [
    "Struggling to attract premium clients who value your expertise",
    "Your LinkedIn profile doesn't reflect your true coaching abilities",
    "Potential clients aren't finding you through LinkedIn searches",
    "Your connection requests and messages get ignored",
    "You're not sure how to position yourself as an authority in your niche"
  ];

  const whyLinkedIn = [
    { title: "78% of Coaches", description: "find their high-ticket clients through LinkedIn" },
    { title: "67% Increase", description: "in discovery calls when your profile is optimized" },
    { title: "3X More Engagement", description: "with properly positioned content strategy" },
    { title: "92% of Decision Makers", description: "use LinkedIn to find service providers" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Transform Your Coaching Business with LinkedIn Mastery
              </h1>
              <p className="text-xl mb-8 ">
                Attract premium clients who value your expertise and are willing to invest in your high-ticket coaching programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="text-lg px-8 py-6">
                  Book a Strategy Call
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6">
                  View Success Stories
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
            >
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary text-lg font-medium">
                Professional image of coaches succeeding with LinkedIn
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
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
              Are These Challenges Holding Your Coaching Business Back?
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              You're not alone. Many coaches struggle with these exact same issues before optimizing their LinkedIn presence.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {painPoints.map((point, index) => (
              <motion.li
                key={index}
                variants={fadeIn}
                className="bg-secondary/10 p-6 rounded-lg flex items-start"
              >
                <span className="text-primary mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                <p className="text-lg">{point}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Why LinkedIn Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why LinkedIn is Crucial for Coaches
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              LinkedIn has become the go-to platform for professionals seeking expert guidance and coaching services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLinkedIn.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className=" p-6 rounded-lg shadow-sm"
              >
                <Linkedin className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution - What You'll Learn */}
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
              Transform Your LinkedIn Presence
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Learn how to leverage LinkedIn to attract premium clients who are ready to invest in your coaching services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Profile Optimization</h3>
                  <p className="">
                    Position yourself as the go-to expert in your coaching niche with a profile that speaks directly to your ideal clients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Content Strategy That Converts</h3>
                  <p className="">
                    Create engaging content that establishes your authority and attracts high-ticket clients to your coaching services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Outreach & Messaging Templates</h3>
                  <p className="">
                    Access proven templates that help you connect with potential clients and convert conversations into coaching contracts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client Attraction System</h3>
                  <p className="">
                    Implement a step-by-step system for consistently attracting premium clients through LinkedIn.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary text-lg font-medium">
                Image showing coach with premium clients
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Choose Your Path to LinkedIn Success
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Select the option that best fits your coaching business goals and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Small-ticket Course */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    LinkedIn Profile Mastery
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Self-paced course to optimize your LinkedIn presence
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">₹9,997</span>
                    <span className=" ml-2">one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "Step-by-step profile optimization blueprint",
                      "Content templates for coaches (30+ examples)",
                      "LinkedIn algorithm secrets for maximum visibility",
                      "Basic outreach strategy & templates",
                      "Private community access for 3 months",
                      "Self-paced video lessons (6+ hours)",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full py-6 text-lg">
                    Get Started Today
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* High-ticket Course */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-primary shadow-lg relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-primary">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-white px-3 py-1 text-sm font-medium rounded">
                  Most Popular
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    Premium Client Attraction System
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Complete coaching program with 1-on-1 guidance
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">₹49,997</span>
                    <span className=" ml-2">or 3 payments of ₹16,997</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "Everything in LinkedIn Profile Mastery, plus:",
                      "Personalized LinkedIn profile audit & optimization",
                      "Advanced content strategy tailored to your coaching niche",
                      "Premium client attraction framework",
                      "Done-for-you LinkedIn headline & about section",
                      "8 weeks of group coaching sessions",
                      "2 private 1-on-1 coaching sessions",
                      "Priority support via WhatsApp for 6 months",
                      "Advanced lead generation tactics for coaches",
                      "Complete messaging sequence templates",
                      "Sales call conversion strategies",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full py-6 text-lg bg-primary hover:bg-primary/90">
                    Apply Now (Limited Spots)
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Coaching Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book a complimentary strategy call to discuss how we can help you attract premium clients and grow your coaching business with LinkedIn.
            </p>
            <Button className=" text-primary bg-white hover:bg-gray-00 text-lg px-8 py-6">
              Book Your Free Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Success Stories */}
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
              Success Stories from Coaches Like You
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Here's what other coaches have achieved after implementing our LinkedIn strategies.
            </p>
          </motion.div>

          {/* Testimonial Cards - Add actual testimonials here */}
          <div className="grid grid-cols-1 md:grid-cols-3 text-gray-700 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1, duration: 0.6 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Coach Name</h3>
                    <p className=" text-sm">Business Coach</p>
                  </div>
                </div>
                <p className="italic ">
                  "After implementing Bhavana's LinkedIn strategies, I signed 3 premium clients in just 30 days. The return on investment has been incredible!"
                </p>
              </motion.div>
            ))}
          </div>
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
            <p className="text-xl  max-w-3xl mx-auto">
              Get answers to common questions about our LinkedIn programs for coaches.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to see results?",
                answer: "Most coaches start seeing results within 2-4 weeks after implementing our LinkedIn optimization strategies. However, the full impact of the program typically becomes evident after 6-8 weeks of consistent implementation."
              },
              {
                question: "Do I need a large following to make this work?",
                answer: "No, you don't need a large following. Our strategies focus on targeted engagement and positioning rather than follower count. We've had clients with just a few hundred connections who've attracted premium clients through our approach."
              },
              {
                question: "Will this work for my specific coaching niche?",
                answer: "Yes! We've worked with coaches across various niches including business, executive, career, life, health, and relationship coaching. The principles we teach are adaptable to any coaching specialty, and we provide guidance on niche-specific approaches."
              },
              {
                question: "How much time will I need to dedicate to LinkedIn?",
                answer: "For optimal results, we recommend spending about 30-45 minutes per day on LinkedIn, 3-5 days per week. However, we also provide strategies for busy coaches who can only commit to 2-3 hours per week total."
              },
              {
                question: "Is this only for coaches who are just starting out?",
                answer: "Not at all. Our programs are designed for coaches at all levels. Whether you're just starting your coaching business or you're an established coach looking to attract higher-paying clients, our strategies can be tailored to your specific situation."
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