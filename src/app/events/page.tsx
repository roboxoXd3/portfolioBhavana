"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: "LinkedIn Mastery Workshop",
      description: "A comprehensive workshop on optimizing your LinkedIn profile and content strategy",
      date: "June 15, 2024",
      time: "10:00 AM - 12:00 PM IST",
      image: "/images/events/linkedin-mastery.jpg",
      location: "Online Event"
    },
    {
      title: "Lead Generation Masterclass",
      description: "Learn proven strategies to generate quality leads consistently on LinkedIn",
      date: "July 10, 2024",
      time: "2:00 PM - 4:00 PM IST",
      image: "/images/events/lead-generation.jpg",
      location: "Online Event"
    },
    {
      title: "Content Creation Bootcamp",
      description: "A hands-on bootcamp to help you create engaging LinkedIn content that converts",
      date: "August 5, 2024",
      time: "11:00 AM - 1:00 PM IST",
      image: "/images/events/content-bootcamp.jpg",
      location: "Online Event"
    }
  ];

  const pastEvents = [
    {
      title: "LinkedIn Summit 2023",
      location: "Mumbai, India",
      image: "/images/events/past/summit.jpg"
    },
    {
      title: "Digital Marketing Conference",
      location: "Delhi, India",
      image: "/images/events/past/conference.jpg"
    },
    {
      title: "Corporate Workshop",
      location: "Bangalore, India",
      image: "/images/events/past/workshop.jpg"
    },
    {
      title: "LinkedIn Masterclass",
      location: "Online Event",
      image: "/images/events/past/masterclass.jpg"
    }
  ];

  const metrics = [
    { value: "50+", label: "Events Conducted" },
    { value: "5,000+", label: "Attendees" },
    { value: "4.8/5", label: "Average Rating" },
    { value: "85%", label: "Implementation Rate" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl  font-bold mb-6">Events & Workshops</h1>
            <p className=" text-lg mb-8">
              Join me for interactive workshops, webinars, and speaking engagements on LinkedIn growth and personal branding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Upcoming Events
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48 bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Event Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-700 font-bold mb-2">{event.title}</h3>
                  <p className=" mb-4 text-gray-700">{event.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  <Button className="w-full">Register Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Past Events
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Past Event Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center text-white p-4">
                      <h3 className="font-bold">{event.title}</h3>
                      <p className="text-sm">{event.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</h3>
                <p className="">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Want to Host a Private Workshop?</h2>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default EventsPage; 