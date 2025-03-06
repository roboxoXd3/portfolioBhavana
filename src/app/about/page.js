import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import { FaLinkedin, FaAward, FaCertificate, FaGraduationCap } from 'react-icons/fa';

export const metadata = {
  title: 'About Bhavana Govil | LinkedIn Growth & Personal Branding Expert',
  description: 'Learn about Bhavana Govil\'s journey, expertise, and passion for helping professionals grow on LinkedIn.',
};

export default function About() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section - Enhanced */}
      <section className="pt-32 pb-20 bg-linkedinBg">
        <div className="container mx-auto px-4">
          {/* LinkedIn-style banner image */}
          <div className="relative w-full h-[200px] rounded-t-lg overflow-hidden mb-6">
            <Image
              src="/images/coverImage.jpeg"
              alt="Bhavana Govil LinkedIn Banner"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Profile image - LinkedIn style */}
            <div className="relative">
              <div className="relative w-[170px] h-[170px] rounded-full border-4 border-white overflow-hidden -mt-20 bg-white shadow-md mx-auto md:mx-0">
                <Image
                  src="/images/profileImage.jpeg"
                  alt="Bhavana Govil - LinkedIn Growth Expert"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            
            {/* Profile info - LinkedIn style */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-linkedinText mb-2">Bhavana Govil</h1>
              <p className="text-xl text-primary font-medium mb-3">
                LinkedIn Growth Expert | Personal Branding Specialist | Founder of BrandBhava
              </p>
              <p className="text-gray-600 mb-4">
                Noida, Uttar Pradesh, India • <a href="mailto:contact@brandbhava.com" className="text-primary hover:underline">contact@brandbhava.com</a>
              </p>
              
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a 
                  href="https://linkedin.com/in/your-linkedin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors text-sm font-medium"
                >
                  <FaLinkedin size={16} className="mr-2" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a 
                  href="https://wa.me/your-whatsapp-number" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white border border-primary text-primary px-4 py-2 rounded-full hover:bg-linkedinHover transition-colors text-sm font-medium"
                >
                  <span>Join WhatsApp Group</span>
                </a>
                <a 
                  href="https://calendly.com/your-calendly-link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white border border-primary text-primary px-4 py-2 rounded-full hover:bg-linkedinHover transition-colors text-sm font-medium"
                >
                  <span>Book a Call</span>
                </a>
              </div>
              
              {/* LinkedIn-style highlights */}
              <div className="bg-white p-4 rounded-lg border border-linkedinBorder">
                <h2 className="text-lg font-semibold text-linkedinText mb-3">Highlights</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Helped 13,000+ professionals improve their LinkedIn presence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Worked with 50+ companies on LinkedIn growth strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Certified LinkedIn Marketing Expert & NLP Practitioner</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">My Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                My journey into LinkedIn growth and personal branding began when I realized the immense 
                potential of the platform for professionals seeking to establish their authority and 
                generate quality leads.
              </p>
              <p>
                After spending years in corporate marketing, I noticed that many talented professionals 
                were struggling to showcase their expertise effectively on LinkedIn. Their profiles 
                weren't optimized, their content strategy was inconsistent, and they weren't leveraging 
                the platform's networking capabilities.
              </p>
              <p>
                This realization led me to develop a comprehensive approach to LinkedIn growth that 
                combines strategic personal branding, content optimization, and relationship-building 
                techniques. I've since helped thousands of professionals transform their LinkedIn 
                presence and achieve tangible business results.
              </p>
              <p>
                My philosophy is simple: authentic personal branding combined with strategic content 
                and outreach is the key to LinkedIn success. I believe that every professional has a 
                unique story to tell, and my mission is to help them tell it effectively on LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">My Journey</h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-2">2023 - Present</h3>
                    <h4 className="text-lg font-semibold mb-2">Founder, Brand Bhava</h4>
                    <p className="text-gray-600">
                      Helping professionals and businesses grow their LinkedIn presence and generate quality leads.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 top-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              </div>
              
              {/* Item 2 */}
              <div className="relative">
                <div className="md:w-1/2 md:ml-auto md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-2">2020 - 2023</h3>
                    <h4 className="text-lg font-semibold mb-2">LinkedIn Growth Consultant</h4>
                    <p className="text-gray-600">
                      Provided LinkedIn optimization and growth strategies for executives and businesses.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 top-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              </div>
              
              {/* Item 3 */}
              <div className="relative">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-2">2017 - 2020</h3>
                    <h4 className="text-lg font-semibold mb-2">Digital Marketing Manager</h4>
                    <p className="text-gray-600">
                      Led social media and content marketing strategies for a tech company.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 top-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              </div>
              
              {/* Item 4 */}
              <div className="relative">
                <div className="md:w-1/2 md:ml-auto md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-2">2014 - 2017</h3>
                    <h4 className="text-lg font-semibold mb-2">Marketing Specialist</h4>
                    <p className="text-gray-600">
                      Developed and executed marketing campaigns for various clients.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 top-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications & Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Certifications & Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Certification 1 */}
            <div className="bg-light p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FaCertificate size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn Certification</h3>
              <p className="text-gray-600">
                Certified LinkedIn Marketing Expert
              </p>
            </div>
            
            {/* Certification 2 */}
            <div className="bg-light p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FaAward size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">NLP Practitioner</h3>
              <p className="text-gray-600">
                Certified NLP Practitioner
              </p>
            </div>
            
            {/* Certification 3 */}
            <div className="bg-light p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FaGraduationCap size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                Advanced Digital Marketing Certification
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Bhava Concept */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark mb-8">The Brand Bhava Concept</h2>
            <p className="text-xl text-gray-600 mb-12">
              "Bhava" means "emotion" or "feeling" in Sanskrit. Brand Bhava is about creating an emotional 
              connection with your audience through authentic personal branding.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-6">
                The Brand Bhava approach combines:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-primary/20 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-2">Authenticity</h3>
                  <p className="text-gray-600">
                    Showcasing your true self and expertise in a way that resonates with your audience.
                  </p>
                </div>
                <div className="p-4 border border-primary/20 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-2">Strategy</h3>
                  <p className="text-gray-600">
                    Implementing proven techniques to maximize visibility and engagement on LinkedIn.
                  </p>
                </div>
                <div className="p-4 border border-primary/20 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-2">Connection</h3>
                  <p className="text-gray-600">
                    Building meaningful relationships that convert into business opportunities.
                  </p>
                </div>
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