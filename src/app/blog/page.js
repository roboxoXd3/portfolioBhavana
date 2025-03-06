import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag, FaSearch } from 'react-icons/fa';

export const metadata = {
  title: 'Blog | Bhavana Govil - LinkedIn Growth & Personal Branding',
  description: 'Read articles on LinkedIn growth, personal branding, content strategy, and lead generation.',
};

export default function Blog() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, strategies, and tips on LinkedIn growth, personal branding, and lead generation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mt-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Blog Post 1 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Blog Image</p>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/blog-1.jpg"
                  alt="10 LinkedIn Profile Tips"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    <span>May 15, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-1" />
                    <span>Profile Optimization</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-dark mb-3">10 LinkedIn Profile Tips That Will Get You Noticed</h2>
                <p className="text-gray-600 mb-4">
                  Learn how to optimize your LinkedIn profile to stand out from the crowd and attract your ideal clients.
                </p>
                <Link 
                  href="#" 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Blog Image</p>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/blog-2.jpg"
                  alt="Content Strategy"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    <span>April 28, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-1" />
                    <span>Content Strategy</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-dark mb-3">The Ultimate LinkedIn Content Strategy for 2024</h2>
                <p className="text-gray-600 mb-4">
                  Discover the content types, posting frequency, and engagement strategies that work best on LinkedIn in 2024.
                </p>
                <Link 
                  href="#" 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Blog Post 3 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Blog Image</p>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/blog-3.jpg"
                  alt="Lead Generation"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    <span>April 10, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-1" />
                    <span>Lead Generation</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-dark mb-3">5 Proven LinkedIn Lead Generation Strategies</h2>
                <p className="text-gray-600 mb-4">
                  Learn how to generate high-quality leads on LinkedIn without spending hours on the platform.
                </p>
                <Link 
                  href="#" 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Blog Post 4 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Blog Image</p>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/blog-4.jpg"
                  alt="Personal Branding"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    <span>March 22, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-1" />
                    <span>Personal Branding</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-dark mb-3">Building Your Personal Brand on LinkedIn: A Step-by-Step Guide</h2>
                <p className="text-gray-600 mb-4">
                  Discover how to establish yourself as an authority in your niche and build a strong personal brand on LinkedIn.
                </p>
                <Link 
                  href="#" 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Blog Post 5 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Blog Image</p>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/blog-5.jpg"
                  alt="LinkedIn Algorithm"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    <span>March 8, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-1" />
                    <span>LinkedIn Algorithm</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-dark mb-3">Decoding the LinkedIn Algorithm: How to Get More Visibility</h2>
                <p className="text-gray-600 mb-4">
                  Learn how the LinkedIn algorithm works and how to optimize your content for maximum reach and engagement.
                </p>
                <Link 
                  href="#" 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Blog Post 6 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Blog Image</p>
                </div>
                {/* Uncomment and use when you have the actual image */}
                {/* <Image
                  src="/images/blog-6.jpg"
                  alt="LinkedIn Tools"
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    <span>February 25, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-1" />
                    <span>Tools & Resources</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-dark mb-3">10 Essential LinkedIn Tools for Growth and Productivity</h2>
                <p className="text-gray-600 mb-4">
                  Discover the best tools and resources to enhance your LinkedIn presence and streamline your workflow.
                </p>
                <Link 
                  href="#" 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-primary text-white">
                1
              </a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Categories & Tags */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Categories */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Categories</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                    <span>Profile Optimization</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">12</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                    <span>Content Strategy</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">8</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                    <span>Lead Generation</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">15</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                    <span>Personal Branding</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">10</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                    <span>LinkedIn Algorithm</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">6</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                    <span>Tools & Resources</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">9</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Popular Tags */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  LinkedIn
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  Personal Branding
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  Content Creation
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  Lead Generation
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  Profile Optimization
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  Networking
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  Social Selling
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  Algorithm
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  Engagement
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  B2B Marketing
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  Sales Navigator
                </Link>
                <Link href="#" className="bg-white px-3 py-1 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  LinkedIn Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want Personalized LinkedIn Growth Tips?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Book a 1:1 session to get personalized LinkedIn strategies tailored to your specific goals and industry.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            <span className="font-bold">Book a 1:1 Session</span>
          </Link>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
} 