import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import Image from 'next/image';
import { FaUserTie, FaChartLine, FaUsers, FaCalendarAlt, FaMicrophone, FaCheck, FaCalendar } from 'react-icons/fa';

export const metadata = {
  title: 'Services | Bhavana Govil - LinkedIn Growth & Personal Branding',
  description: 'Explore LinkedIn growth services including profile optimization, lead generation strategies, 1:1 training, content creation, and corporate workshops.',
};

export default function Services() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">LinkedIn Growth & Personal Branding Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive solutions to help you establish your authority, grow your network, and generate quality leads on LinkedIn.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service 1: LinkedIn Profile Makeover */}
      <section id="profile-makeover" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary mb-4">
                <FaUserTie size={48} />
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">LinkedIn Profile Makeover</h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform your LinkedIn profile into a lead-generating machine with professional optimization that showcases your expertise and attracts your ideal clients.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Strategic headline optimization to improve searchability</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Compelling about section that showcases your unique value proposition</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Experience section optimization highlighting your achievements</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Strategic keyword placement for improved visibility</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Profile banner design recommendations</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Professional photo guidance</span>
                </li>
              </ul>
              
              <Link 
                href="https://calendly.com/your-calendly-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                <FaCalendar className="mr-2" />
                <span>Book a Profile Makeover</span>
              </Link>
            </div>
            
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-0">
                <p className="text-gray-500">LinkedIn Profile Makeover Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/profile-makeover.jpg"
                alt="LinkedIn Profile Makeover"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 2: Lead Generation Strategies */}
      <section id="lead-generation" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-0">
                <p className="text-gray-500">Lead Generation Strategies Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/lead-generation.jpg"
                alt="LinkedIn Lead Generation Strategies"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
            </div>
            
            <div className="order-1 md:order-2">
              <div className="text-primary mb-4">
                <FaChartLine size={48} />
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">Lead Generation Strategies</h2>
              <p className="text-lg text-gray-600 mb-6">
                Implement proven outreach and engagement strategies to attract high-quality leads and convert connections into clients.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Customized connection request templates</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Strategic messaging sequences for nurturing leads</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Engagement strategy to build relationships</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Target audience identification</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>LinkedIn Sales Navigator optimization (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Lead tracking system setup</span>
                </li>
              </ul>
              
              <Link 
                href="https://calendly.com/your-calendly-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                <FaCalendar className="mr-2" />
                <span>Book a Strategy Session</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 3: 1:1 LinkedIn Training & Consulting */}
      <section id="training" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary mb-4">
                <FaUsers size={48} />
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">1:1 LinkedIn Training & Consulting</h2>
              <p className="text-lg text-gray-600 mb-6">
                Personalized coaching to help you master LinkedIn for your specific business goals, with hands-on guidance and implementation support.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Personalized LinkedIn strategy tailored to your goals</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>One-on-one virtual sessions</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Profile optimization guidance</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Content creation coaching</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Networking and outreach techniques</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Email support between sessions</span>
                </li>
              </ul>
              
              <Link 
                href="https://calendly.com/your-calendly-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                <FaCalendar className="mr-2" />
                <span>Book a Consultation</span>
              </Link>
            </div>
            
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-0">
                <p className="text-gray-500">LinkedIn Training Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/linkedin-training.jpg"
                alt="1:1 LinkedIn Training & Consulting"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 4: Content Strategy & Calendar Creation */}
      <section id="content-strategy" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-0">
                <p className="text-gray-500">Content Strategy Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/content-strategy.jpg"
                alt="Content Strategy & Calendar Creation"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
            </div>
            
            <div className="order-1 md:order-2">
              <div className="text-primary mb-4">
                <FaCalendarAlt size={48} />
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">Content Strategy & Calendar Creation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Develop a strategic content plan that resonates with your audience, showcases your expertise, and drives engagement on LinkedIn.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Content pillars identification based on your expertise</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>30-day content calendar with post ideas</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Post templates for different content types</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Hashtag strategy</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Engagement strategy to maximize reach</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Content performance tracking framework</span>
                </li>
              </ul>
              
              <Link 
                href="https://calendly.com/your-calendly-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                <FaCalendar className="mr-2" />
                <span>Book a Content Strategy Session</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 5: Keynote Speaking & Corporate Training */}
      <section id="speaking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary mb-4">
                <FaMicrophone size={48} />
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">Keynote Speaking & Corporate Training</h2>
              <p className="text-lg text-gray-600 mb-6">
                Engaging workshops and presentations on LinkedIn growth and personal branding for your team or event.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Popular Topics:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>LinkedIn for Business Growth: Strategies That Work</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Personal Branding in the Digital Age</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Content Creation Mastery for LinkedIn</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Social Selling: Converting Connections to Clients</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>LinkedIn for Teams: Amplifying Your Company's Presence</span>
                </li>
              </ul>
              
              <Link 
                href="https://calendly.com/your-calendly-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                <FaCalendar className="mr-2" />
                <span>Book Bhavana for Your Event</span>
              </Link>
            </div>
            
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-0">
                <p className="text-gray-500">Keynote Speaking Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/keynote-speaking.jpg"
                alt="Keynote Speaking & Corporate Training"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your LinkedIn Presence?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Book a free 15-minute discovery call to discuss your LinkedIn goals and how I can help you achieve them.
          </p>
          
          <Link 
            href="https://calendly.com/your-calendly-link" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaCalendar className="mr-2" />
            <span className="font-bold">Book Your Free Discovery Call</span>
          </Link>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
} 