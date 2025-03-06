import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">BrandBhava</h3>
            <p className="mb-4 text-sm">
              Helping Coaches, Consultants, and Professionals Build Their Personal Brand & Generate Leads on LinkedIn.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/your-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://instagram.com/your-instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://wa.me/your-whatsapp-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white/80 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white/80 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white/80 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white/80 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white/80 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#profile-makeover" className="hover:text-white/80 transition-colors">
                  LinkedIn Profile Makeover
                </Link>
              </li>
              <li>
                <Link href="/services#lead-generation" className="hover:text-white/80 transition-colors">
                  Lead Generation Strategies
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="hover:text-white/80 transition-colors">
                  1:1 LinkedIn Training
                </Link>
              </li>
              <li>
                <Link href="/services#content-strategy" className="hover:text-white/80 transition-colors">
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link href="/services#speaking" className="hover:text-white/80 transition-colors">
                  Keynote Speaking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" size={16} />
                <a 
                  href="mailto:contact@brandbhava.com" 
                  className="hover:text-white/80 transition-colors"
                >
                  contact@brandbhava.com
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2" size={16} />
                <a 
                  href="https://wa.me/your-whatsapp-number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  Join WhatsApp Group
                </a>
              </li>
              <li className="flex items-center">
                <FaCalendarAlt className="mr-2" size={16} />
                <a 
                  href="https://calendly.com/your-calendly-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} BrandBhava. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 