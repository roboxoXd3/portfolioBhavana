import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaTicketAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Events & Workshops | Bhavana Govil - LinkedIn Growth & Personal Branding',
  description: 'Join Bhavana Govil for upcoming LinkedIn workshops, webinars, and speaking engagements.',
};

export default function Events() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Events & Workshops</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join me for interactive workshops, webinars, and speaking engagements on LinkedIn growth and personal branding.
            </p>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Event 1 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Event Image</p>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/event-1.jpg"
                  alt="LinkedIn Mastery Workshop"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Webinar
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn Mastery Workshop</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive workshop on optimizing your LinkedIn profile and content strategy.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>June 15, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2 text-primary" />
                    <span>10:00 AM - 12:00 PM IST</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    <span>Online (Zoom)</span>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <FaTicketAlt className="mr-2" />
                  <span>Register Now</span>
                </a>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Event Image</p>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/event-2.jpg"
                  alt="Lead Generation Masterclass"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Workshop
                </div>
                <h3 className="text-xl font-bold mb-2">Lead Generation Masterclass</h3>
                <p className="text-gray-600 mb-4">
                  Learn proven strategies to generate quality leads consistently on LinkedIn.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>July 10, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2 text-primary" />
                    <span>2:00 PM - 4:00 PM IST</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    <span>Online (Zoom)</span>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <FaTicketAlt className="mr-2" />
                  <span>Register Now</span>
                </a>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Event Image</p>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/event-3.jpg"
                  alt="Content Creation Bootcamp"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Bootcamp
                </div>
                <h3 className="text-xl font-bold mb-2">Content Creation Bootcamp</h3>
                <p className="text-gray-600 mb-4">
                  A hands-on bootcamp to help you create engaging LinkedIn content that converts.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>August 5-7, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2 text-primary" />
                    <span>11:00 AM - 1:00 PM IST (Daily)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    <span>Online (Zoom)</span>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <FaTicketAlt className="mr-2" />
                  <span>Register Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Past Events Gallery */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Past Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Past Event 1 */}
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Past Event Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/past-event-1.jpg"
                alt="LinkedIn Summit 2023"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold">LinkedIn Summit 2023</h3>
                  <p className="text-sm">Mumbai, India</p>
                </div>
              </div>
            </div>
            
            {/* Past Event 2 */}
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Past Event Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/past-event-2.jpg"
                alt="Digital Marketing Conference"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold">Digital Marketing Conference</h3>
                  <p className="text-sm">Delhi, India</p>
                </div>
              </div>
            </div>
            
            {/* Past Event 3 */}
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Past Event Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/past-event-3.jpg"
                alt="Corporate Workshop"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold">Corporate Workshop</h3>
                  <p className="text-sm">Bangalore, India</p>
                </div>
              </div>
            </div>
            
            {/* Past Event 4 */}
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Past Event Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/past-event-4.jpg"
                alt="LinkedIn Masterclass"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold">LinkedIn Masterclass</h3>
                  <p className="text-sm">Online Event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Event Success Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">Events Conducted</p>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <p className="text-gray-600">Attendees</p>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-gray-600">Implementation Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to Host a Private Workshop?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            I offer customized LinkedIn workshops for companies and organizations. Get in touch to discuss your requirements.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            <span className="font-bold">Contact Me</span>
          </Link>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
} 