"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Linkedin, Star } from "lucide-react";

export default function ProfileOptimizationPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const painPoints = [
    "Your LinkedIn profile doesn't properly reflect your skills and experience",
    "You're not getting noticed by recruiters or potential clients",
    "Your profile doesn't stand out in a sea of similar professionals",
    "You're not sure how to highlight your achievements effectively",
    "Your current profile isn't generating any meaningful engagement",
  ];

  const profileSections = [
    {
      title: "Head-Turning Headline",
      description:
        "Craft a compelling headline that instantly conveys your value and makes people want to learn more about you.",
    },
    {
      title: "Engaging About Section",
      description:
        "Transform your About section into a powerful personal brand story that connects with your ideal audience.",
    },
    {
      title: "Strategic Experience Layout",
      description:
        "Present your experience in a way that highlights achievements rather than just listing responsibilities.",
    },
    {
      title: "Skill Optimization",
      description:
        "Strategically select and organize your skills to improve searchability and demonstrate expertise.",
    },
    {
      title: "Recommendation Strategy",
      description:
        "Implement a system for acquiring powerful recommendations that validate your expertise.",
    },
    {
      title: "Visual Enhancement",
      description:
        "Create a visually cohesive profile with optimized images and media that reinforces your brand.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Create a LinkedIn Profile That Sparkles
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                Transform your LinkedIn presence from ordinary to extraordinary
                with expert optimization strategies that get you noticed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="text-lg px-8 py-6">
                  Book a Profile Audit
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6">
                  View Transformations
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
                Image showing LinkedIn profile transformation
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "76%",
                text: "of professionals say a great LinkedIn profile helped them advance",
              },
              {
                number: "122%",
                text: "more messages with an optimized LinkedIn profile",
              },
              {
                number: "3X",
                text: "increase in profile views with strategic keywords",
              },
              {
                number: "91%",
                text: "of hiring managers check LinkedIn before interviews",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
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
              Is Your LinkedIn Profile Letting You Down?
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Many professionals are missing opportunities because their
              profiles aren't effectively showcasing their value.
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </span>
                <p className="text-lg">{point}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Profile Sections */}
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
              The 6 Essential Elements of a Standout Profile
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Each section of your LinkedIn profile plays a crucial role in
              creating a compelling personal brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {profileSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                <p className="">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16  ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Witness the Transformation
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              See how our profile optimization strategies create dramatic
              improvements in visibility and engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <div className="bg-gray-200 px-4 py-2 flex items-center">
                  <span className="text-red-500 mr-2">✕</span>
                  <p className="font-medium">BEFORE</p>
                </div>
                <div className="p-6">
                  {/* Replace with actual before profile example */}
                  <div className="h-[300px] flex items-center justify-center text-gray-500">
                    Basic LinkedIn profile example
                  </div>
                </div>
              </div>
              <div className="bg-red-100 text-gray-700 p-4 rounded-lg">
                <p className="font-medium mb-2">The Problems:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Generic headline that doesn't attract attention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>
                      About section focused on responsibilities, not
                      achievements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>
                      Poor keyword optimization leading to low visibility
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>No clear value proposition or differentiation</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <div className="bg-green-100 px-4 py-2 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <p className="font-medium">AFTER</p>
                </div>
                <div className="p-6">
                  {/* Replace with actual after profile example */}
                  <div className="h-[300px] flex items-center justify-center text-gray-500">
                    Optimized LinkedIn profile example
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 text-gray-700 rounded-lg">
                <p className="font-medium mb-2">The Results:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Compelling headline that instantly communicates value
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Story-driven About section that engages and inspires
                      action
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Strategic keyword placement increasing search visibility
                      by 300%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Clear unique selling proposition that attracts ideal
                      opportunities
                    </span>
                  </li>
                </ul>
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
              Choose Your Profile Optimization Package
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Select the option that best fits your needs and career goals.
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
                    DIY Profile Makeover
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Self-guided profile optimization course
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      ₹4,997
                    </span>
                    <span className="text-gray-500 ml-2">one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "Step-by-step profile optimization guide",
                      "LinkedIn headline formula templates",
                      "About section writing framework",
                      "Keyword research methodology",
                      "30+ professional headline examples",
                      "Self-assessment worksheets",
                      "Video tutorials for each profile section",
                      "Profile image optimization guide",
                      "30 days email support",
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
                    VIP Profile Transformation
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Done-for-you profile optimization with personal coaching
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      ₹24,997
                    </span>
                    <span className="text-gray-500 ml-2">
                      or 2 payments of ₹12,997
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "Everything in DIY Profile Makeover, plus:",
                      "Personal 1-on-1 profile strategy session",
                      "Custom-written LinkedIn headline by our experts",
                      "Professionally crafted About section",
                      "Strategic Experience section optimization",
                      "Keyword optimization for maximum visibility",
                      "Custom banner image design",
                      "Professional photo review and recommendations",
                      "Content strategy starter plan",
                      "2 review calls to refine your profile",
                      "Featured section curation",
                      "60 days of priority email support",
                      "LinkedIn settings optimization for privacy and visibility",
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
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
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
              What Our Clients Say
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Hear from professionals who have transformed their LinkedIn
              presence with our help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                title: "Marketing Director",
                rating: 5,
                text: "My profile views increased by 450% in the first month after Bhavana's optimization. Within 6 weeks, I was approached for a dream role that I wouldn't have found otherwise.",
              },
              {
                name: "Rajiv Mehta",
                title: "Financial Consultant",
                rating: 5,
                text: "The VIP transformation was worth every penny. Not only is my profile now attracting higher-quality clients, but I also understand how to maintain and leverage it for long-term success.",
              },
              {
                name: "Ananya Patel",
                title: "Tech Entrepreneur",
                rating: 5,
                text: "Bhavana's ability to capture my voice while positioning me as an authority in my space was remarkable. The investment in my profile optimization paid for itself within weeks through new partnership opportunities.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className=" p-6 rounded-lg"
              >
                <div className="flex space-x-1 mb-3">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                </div>
                <p className="italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Your LinkedIn Profile?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Take the first step toward a LinkedIn presence that opens doors
              and creates opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="text-primary bg-white hover:bg-gray-100 text-lg px-8 border-2 py-5">
                Book a Profile Audit
              </Button>
              <Button className="bg-transparent border-2  border-white hover:/10 text-lg px-8 py-5">
                View Sample Transformations
              </Button>
            </div>
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
            <p className="text-xl  max-w-3xl mx-auto">
              Get answers to common questions about our LinkedIn profile
              optimization services.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question:
                  "How long does it take to see results from profile optimization?",
                answer:
                  "Most clients see a noticeable increase in profile views within the first week after optimization. More significant results, such as increased connection requests and opportunity inquiries, typically begin within 2-4 weeks.",
              },
              {
                question:
                  "Will my profile still sound like me after optimization?",
                answer:
                  "Absolutely. We don't use generic templates. Instead, we work to enhance your authentic voice while applying proven strategies that increase visibility and engagement. Your unique personality and value proposition will shine through.",
              },
              {
                question:
                  "I'm not looking for a job. Is profile optimization still valuable?",
                answer:
                  "Yes! LinkedIn profile optimization is valuable for all professionals, not just job seekers. It helps establish your authority in your field, attracts business opportunities, speaking engagements, partnerships, and helps you build a strong professional network.",
              },
              {
                question: "Can I see examples of profiles you've optimized?",
                answer:
                  "We respect our clients' privacy, but we do have before and after examples with permission that we can share during your consultation. We also provide detailed case studies showing the measurable results our clients have achieved.",
              },
              {
                question: "What happens after my profile is optimized?",
                answer:
                  "We don't just optimize and leave. Both packages include follow-up support to help you leverage your newly optimized profile. The VIP package includes strategic guidance on content and engagement to maximize the impact of your optimization.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-lg shadow-sm"
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
