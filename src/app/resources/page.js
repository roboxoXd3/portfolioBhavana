import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import Image from 'next/image';
import { FaDownload, FaPlay, FaWhatsapp, FaFileAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Free Resources | Bhavana Govil - LinkedIn Growth & Personal Branding',
  description: 'Access free LinkedIn resources including profile optimization checklists, webinars, and lead generation guides.',
};

export default function Resources() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Free LinkedIn Resources</h1>
            <p className="text-xl text-gray-600 mb-8">
              Valuable tools and guides to help you optimize your LinkedIn presence and generate quality leads.
            </p>
          </div>
        </div>
      </section>
      
      {/* Profile Optimization Checklist */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">LinkedIn Profile Optimization Checklist</h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform your LinkedIn profile with this comprehensive checklist covering all the essential elements of a high-performing profile.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Profile photo and banner optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Headline formulas that attract attention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>About section template and examples</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Experience section best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Skills and endorsements strategy</span>
                </li>
              </ul>
              <a 
                href="#" 
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                <FaDownload className="mr-2" />
                <span>Download Free Checklist</span>
              </a>
            </div>
            <div className="relative h-[350px] w-full rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-0">
                <p className="text-gray-500">Profile Checklist Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/profile-checklist.jpg"
                alt="LinkedIn Profile Optimization Checklist"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Webinars & Training Replays */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-dark mb-6">Free Webinars & Training Replays</h2>
            <p className="text-lg text-gray-600">
              Watch these free training sessions to learn proven LinkedIn strategies and techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Webinar 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-video bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/80 text-white p-3 rounded-full cursor-pointer hover:bg-primary transition-colors">
                    <FaPlay />
                  </div>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/webinar-1.jpg"
                  alt="LinkedIn Content Strategy Webinar"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">LinkedIn Content Strategy That Converts</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to create engaging content that attracts your ideal clients and generates quality leads.
                </p>
                <a 
                  href="#" 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Watch Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Webinar 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-video bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/80 text-white p-3 rounded-full cursor-pointer hover:bg-primary transition-colors">
                    <FaPlay />
                  </div>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/webinar-2.jpg"
                  alt="LinkedIn Lead Generation Webinar"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">5 Steps to LinkedIn Lead Generation</h3>
                <p className="text-gray-600 mb-4">
                  Discover a proven 5-step process to generate high-quality leads consistently on LinkedIn.
                </p>
                <a 
                  href="#" 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Watch Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Webinar 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-video bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/80 text-white p-3 rounded-full cursor-pointer hover:bg-primary transition-colors">
                    <FaPlay />
                  </div>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/webinar-3.jpg"
                  alt="Personal Branding Webinar"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Building Your Personal Brand on LinkedIn</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to establish yourself as an authority in your niche and stand out from the competition.
                </p>
                <a 
                  href="#" 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Watch Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lead Generation Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="order-2 md:order-1 relative h-[350px] w-full rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-0">
                <p className="text-gray-500">Lead Generation Guide Image</p>
              </div>
              {/* Uncomment and use when you have the actual image */}
              {/* <Image
                src="/images/lead-generation-guide.jpg"
                alt="LinkedIn Lead Generation Guide"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-dark mb-6">LinkedIn Lead Generation Guide</h2>
              <p className="text-lg text-gray-600 mb-6">
                A comprehensive guide to generating quality leads on LinkedIn without spending hours on the platform.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Identifying your ideal client profile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Connection request templates that get accepted</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Messaging sequences that convert</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Content strategy for lead generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Measuring and optimizing your results</span>
                </li>
              </ul>
              <a 
                href="#" 
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                <FaFileAlt className="mr-2" />
                <span>Download Free Guide</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want More LinkedIn Tips?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Join my WhatsApp group for regular LinkedIn tips, strategies, and updates on new resources.
          </p>
          
          <a 
            href="https://wa.me/your-whatsapp-number" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp className="mr-2 text-xl" />
            <span className="font-bold">Join WhatsApp Group</span>
          </a>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
} 