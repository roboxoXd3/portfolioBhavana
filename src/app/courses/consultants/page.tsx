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

export default function ConsultantsPage() {
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
    "Struggling to generate a consistent flow of quality leads for your consultancy",
    "Prospective clients questioning your rates or expertise",
    "Being viewed as a commodity rather than a premium service provider",
    "Competing against larger consulting firms for the same clients",
    "Spending too much time on proposals that don't convert"
  ];

  const whyLinkedIn = [
    { title: "82% of Decision Makers", description: "research consultants on LinkedIn before hiring" },
    { title: "63% Higher Conversion", description: "on proposals when clients find you through LinkedIn" },
    { title: "5X More Proposals", description: "accepted when you're positioned as an authority" },
    { title: "74% of Consultants", description: "who land high-ticket clients use LinkedIn strategically" }
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
                Generate Quality Leads for Your Consultancy
              </h1>
              <p className="text-xl mb-8 ">
                Position yourself as the go-to expert in your field and attract high-value clients who respect your expertise and rates.
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
                Professional image of successful consultant
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
              Are These Consulting Challenges Familiar?
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Many consultants struggle with these common obstacles before mastering LinkedIn lead generation.
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
              Why LinkedIn is Crucial for Consultants
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              LinkedIn has become the premier platform for consultants to establish authority and generate high-quality leads.
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
              Transform Your Consulting Business
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Learn how to position yourself as an authority and generate a steady flow of high-quality leads.
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
                  <h3 className="text-xl font-semibold mb-2">Authority Positioning Strategy</h3>
                  <p className="">
                    Establish yourself as the definitive expert in your niche, making you the obvious choice for high-value clients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lead Generation System</h3>
                  <p className="">
                    Implement a proven system for attracting and qualifying leads that are pre-sold on your expertise and value.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Value-Based Pricing Framework</h3>
                  <p className="">
                    Position your services based on value rather than time, significantly increasing your project rates.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client Conversion Process</h3>
                  <p className="">
                    Master the art of converting leads into clients through strategic discovery calls and proposals.
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
                Image showing consultant with clients
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
              Choose Your Lead Generation Path
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Select the option that aligns with your consulting business goals and growth plans.
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
                    Consultant Lead Generation Essentials
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Self-paced course for independent consultants
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">₹14,997</span>
                    <span className="text-gray-500 ml-2">one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "LinkedIn profile optimization for consultants",
                      "Basic authority positioning framework",
                      "Content strategy for establishing expertise",
                      "Lead generation templates and scripts",
                      "Consultancy service positioning guide",
                      "Self-paced video modules (7+ hours)",
                      "Access to resources for 6 months",
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
                    Start Generating Leads
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
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary te px-3 py-1 text-sm font-medium rounded">
                  Most Popular
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    Consultant Authority Accelerator
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Comprehensive program with personalized coaching
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">₹69,997</span>
                    <span className="text-gray-500 ml-2">or 3 payments of ₹24,997</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "Everything in Lead Generation Essentials, plus:",
                      "Custom authority positioning strategy",
                      "Personal brand development for consultants",
                      "Advanced lead generation system implementation",
                      "High-ticket client acquisition framework",
                      "Value-based pricing model development",
                      "Proposal templates that convert at 80%+",
                      "Sales call script customized to your services",
                      "1-on-1 LinkedIn profile and strategy audit",
                      "6 private coaching sessions (one per month)",
                      "Client testimonial acquisition system",
                      "Referral partner network development",
                      "Lifetime access to all course materials and updates",
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
      <section className="py-16 bg-primary te">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Consulting Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book a complimentary strategy call to discuss how we can help you generate high-quality leads and position yourself as an authority in your field.
            </p>
            <Button className=" text-primary bg-white hover:bg-gray-100 text-lg px-8 py-6">
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
              Success Stories from Consultants
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Hear how other consultants have transformed their businesses using our LinkedIn strategies.
            </p>
          </motion.div>

          {/* Testimonial Cards - Add actual testimonials here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1, duration: 0.6 }}
                className=" p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Consultant Name</h3>
                    <p className="text-gray-500 text-sm">Strategy Consultant</p>
                  </div>
                </div>
                <p className="italic ">
                  "After implementing Bhavana's LinkedIn lead generation system, I've been able to consistently bring in 3-5 high-quality leads per week. My consulting income has doubled in just 4 months."
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
              Get answers to common questions about our LinkedIn programs for consultants.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How is this different from other LinkedIn courses for consultants?",
                answer: "Most LinkedIn courses focus solely on profile optimization. Our program is specifically designed for consultants and delivers a complete lead generation system that includes authority positioning, content strategy, outreach frameworks, and conversion techniques—all tailored to the unique dynamics of consulting businesses."
              },
              {
                question: "I'm a solo consultant. Will this work for me without a team?",
                answer: "Absolutely. Our strategies are specifically designed to work for independent consultants. In fact, many of our most successful clients are solo practitioners who have used our system to compete effectively against much larger consulting firms."
              },
              {
                question: "How much time will I need to implement these strategies?",
                answer: "Most consultants see results with just 3-5 hours per week of focused LinkedIn activity. We provide templates and systems to make your efforts highly efficient, and you'll learn how to batch content creation to maximize your time investment."
              },
              {
                question: "Will this work for my consulting niche?",
                answer: "We've helped consultants in diverse fields including management, IT, HR, financial, marketing, sales, operations, leadership, and many specialized niches. The principles work across all consulting areas, though we'll help you adapt the strategies to your specific niche."
              },
              {
                question: "How long until I see results?",
                answer: "Most consultants begin seeing an increase in inbound inquiries within 3-4 weeks of implementing our strategies. However, the full lead generation system typically takes 60-90 days to reach optimal performance as you build authority and visibility in your space."
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