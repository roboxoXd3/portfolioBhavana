import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Capture More Opportunities on LinkedIn with Proven Branding & Growth Strategies!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Helping Coaches, Consultants, and Professionals Build Their Personal Brand & Generate Leads on LinkedIn.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="#" className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors">
                <span>Join My WhatsApp Group</span>
              </Link>
              <Link href="#" className="inline-flex items-center border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                <span>Book a Call</span>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">13,000+</div>
                <div className="text-gray-600">Professionals Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Companies Served</div>
              </div>
            </div>
          </div>
          
          {/* Image with professional frame */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[450px] h-[450px]">
              {/* Circular frame with subtle border */}
              <div className="absolute inset-0 rounded-full bg-white shadow-lg"></div>
              
              {/* Subtle brand color ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/10"></div>
              
              {/* Image */}
              <Image
                src="/images/profileImage.png"
                alt="Bhavana Govil - LinkedIn Growth Expert"
                fill
                style={{ 
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 