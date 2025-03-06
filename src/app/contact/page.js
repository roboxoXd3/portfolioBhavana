import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { FaWhatsapp, FaCalendarAlt, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const metadata = {
  title: 'Contact | Bhavana Govil - LinkedIn Growth & Personal Branding',
  description: 'Get in touch with Bhavana Govil for LinkedIn growth strategies, personal branding, and lead generation.',
};

export default function Contact() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about how I can help you grow on LinkedIn? Let's connect!
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* WhatsApp */}
            <div className="bg-light p-8 rounded-lg shadow-md text-center">
              <div className="text-green-500 mb-4 flex justify-center">
                <FaWhatsapp size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Join WhatsApp Group</h2>
              <p className="text-gray-600 mb-6">
                Get free LinkedIn tips and connect with like-minded professionals.
              </p>
              <a 
                href="https://wa.me/your-whatsapp-number" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors w-full"
              >
                <FaWhatsapp className="mr-2" />
                <span>Join Now</span>
              </a>
            </div>
            
            {/* Calendly */}
            <div className="bg-light p-8 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FaCalendarAlt size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Book a Call</h2>
              <p className="text-gray-600 mb-6">
                Schedule a free 15-minute discovery call to discuss your LinkedIn goals.
              </p>
              <a 
                href="https://calendly.com/your-calendly-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors w-full"
              >
                <FaCalendarAlt className="mr-2" />
                <span>Book Now</span>
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-light p-8 rounded-lg shadow-md text-center">
              <div className="text-dark mb-4 flex justify-center">
                <FaEnvelope size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Email Me</h2>
              <p className="text-gray-600 mb-6">
                Send me an email and I'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:contact@brandbhava.com" 
                className="inline-flex items-center justify-center bg-dark text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors w-full"
              >
                <FaEnvelope className="mr-2" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Media */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-8">Connect on Social Media</h2>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://linkedin.com/in/your-linkedin" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="bg-primary text-white p-4 rounded-full hover:bg-secondary transition-colors mb-2">
                  <FaLinkedin size={32} />
                </div>
                <span className="text-dark">LinkedIn</span>
              </a>
              <a 
                href="https://instagram.com/your-instagram" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors mb-2">
                  <FaInstagram size={32} />
                </div>
                <span className="text-dark">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark mb-3">How quickly can I expect results?</h3>
                <p className="text-gray-600">
                  While results vary based on your starting point and goals, most clients see significant improvements in profile views and engagement within 2-4 weeks of implementing my strategies.
                </p>
              </div>
              
              <div className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-600">
                  Yes! I offer various packages that include ongoing support, from monthly check-ins to more intensive weekly coaching sessions, depending on your needs.
                </p>
              </div>
              
              <div className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark mb-3">What industries do you work with?</h3>
                <p className="text-gray-600">
                  I've worked with professionals across various industries, including tech, finance, healthcare, education, and more. My strategies are adaptable to your specific industry and goals.
                </p>
              </div>
              
              <div className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark mb-3">How do your services differ from other LinkedIn coaches?</h3>
                <p className="text-gray-600">
                  My approach combines strategic personal branding with proven lead generation techniques. I focus on authentic relationship-building rather than just increasing vanity metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
} 