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

export default function CorporatePage() {
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
    "Struggling to stand out among thousands of professionals in your industry",
    "Your career growth has stagnated despite your qualifications and experience",
    "Missed leadership opportunities because decision-makers don't recognize your value",
    "Limited visibility within your organization and industry",
    "Difficulty attracting new career opportunities and promotions"
  ];

  const whyLinkedIn = [
    { title: "87% of Recruiters", description: "use LinkedIn as their primary candidate sourcing tool" },
    { title: "3X More Likely", description: "to be considered for new opportunities with an optimized profile" },
    { title: "76% of Executives", description: "research potential hires and partners on LinkedIn" },
    { title: "91% Higher Visibility", description: "for professionals who regularly share industry insights" }
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
                Elevate Your Corporate Brand on LinkedIn
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                Boost your professional visibility, accelerate your career growth, and position yourself as a respected industry leader.
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
                Professional image of corporate executive
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
              Are These Challenges Limiting Your Career Growth?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Many accomplished corporate professionals face these same obstacles to advancement and recognition.
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
              Why LinkedIn Matters for Corporate Professionals
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              In today's competitive corporate landscape, your LinkedIn presence is more important than your resume.
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
              Elevate Your Professional Brand
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Learn how to strategically position yourself as a thought leader and accelerate your career growth.
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
                  <h3 className="text-xl font-semibold mb-2">Executive Brand Positioning</h3>
                  <p className="">
                    Position yourself as a respected expert and leader in your industry with a profile that showcases your unique value.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Thought Leadership Content Strategy</h3>
                  <p className="">
                    Learn how to create insightful content that demonstrates your expertise and attracts attention from decision-makers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Networking Approach</h3>
                  <p className="">
                    Build meaningful connections with industry leaders, recruiters, and potential employers or partners.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">
                  <Check className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visibility Amplification Framework</h3>
                  <p className="">
                    Discover proven techniques to increase your visibility both within your organization and across your industry.
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
                Image showing professional using LinkedIn effectively
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
              Choose Your Career Advancement Path
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Select the option that best fits your professional goals and development needs.
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
                    Corporate Brand Blueprint
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Self-paced course for corporate professionals
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">₹12,997</span>
                    <span className="text-gray-500 ml-2">one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "Executive profile optimization framework",
                      "LinkedIn strategy for career advancement",
                      "Content templates for corporate professionals",
                      "Visibility boosting techniques",
                      "Basic networking strategies for industry recognition",
                      "Self-paced video modules (8+ hours)",
                      "3 months access to resource library",
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
                    Enroll Now
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
                  Executive Choice
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    Executive Influence Accelerator
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Personalized coaching for corporate leaders
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">₹59,997</span>
                    <span className="text-gray-500 ml-2">or 3 payments of ₹19,997</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "Everything in Corporate Brand Blueprint, plus:",
                      "Personalized executive brand strategy",
                      "Custom content calendar for thought leadership",
                      "Advanced profile optimization with professional writer",
                      "Strategic visibility plan for your industry",
                      "1-on-1 LinkedIn audit with personal recommendations",
                      "4 private coaching sessions for personalized guidance",
                      "Executive networking strategy and introductions",
                      "Presentation opportunities in industry forums",
                      "Media and speaking opportunity guidance",
                      "Personal branding beyond LinkedIn (integration strategy)",
                      "12 months of priority support for ongoing guidance",
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
                    Apply for Executive Program
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
              Ready to Accelerate Your Professional Growth?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book a complimentary strategy call to discuss how we can help you elevate your corporate brand and advance your career.
            </p>
            <Button className=" text-primary bg-white cursor-pointer hover:bg-gray-300 text-lg px-8 py-6">
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
              Success Stories from Corporate Professionals
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              See how other professionals have accelerated their careers with our LinkedIn strategies.
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
                    <h3 className="font-semibold">Professional Name</h3>
                    <p className="text-gray-500 text-sm">Director, Multinational Company</p>
                  </div>
                </div>
                <p className="italic ">
                  "After implementing Bhavana's LinkedIn strategies, I was approached for speaking opportunities and even received two job offers from industry leaders. My visibility has increased dramatically!"
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
              Common questions about our LinkedIn programs for corporate professionals.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How is this different from other LinkedIn courses?",
                answer: "Our program is specifically tailored for corporate professionals and executives, focusing on sophisticated positioning strategies that resonate in the corporate world. We don't offer generic advice - every strategy is designed to elevate your professional brand in competitive corporate environments."
              },
              {
                question: "Will this help me if I'm looking for a promotion within my current company?",
                answer: "Absolutely. Our strategies help you increase your visibility within your organization, demonstrate your expertise, and position you as leadership material. Many of our clients have secured promotions within 3-6 months of implementing our approach."
              },
              {
                question: "I'm already at an executive level. Is this still valuable for me?",
                answer: "Yes, especially for executives. Our Executive Influence Accelerator program focuses on thought leadership positioning, industry visibility, and strategic networking at the highest levels. It's designed to elevate you from being a successful executive to a recognized industry authority."
              },
              {
                question: "Is this appropriate for all industries?",
                answer: "We've worked with professionals across various sectors including technology, finance, healthcare, manufacturing, education, and professional services. The principles apply universally, but we tailor the specific strategies to your industry context."
              },
              {
                question: "What if my company has strict social media policies?",
                answer: "We understand corporate compliance concerns. Our programs include guidance on navigating corporate social media policies while still building your professional brand. We can help you find the right balance between company representation and personal branding."
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