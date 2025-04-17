import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-light-blue py-20 border-b md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column (Text) */}
          <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-primary">
            Capture Opportunities on <span className="text-accent">LinkedIn™️</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-muted-foreground">
            <span className="font-semibold text-foreground">Stellar LinkedIn Profile Branding & Tested Strategies</span> that deliver real results.
          </p>
          <p className="text-base text-muted-foreground">
            As a LinkedIn Trainer & Growth Consultant to Coaches, Corporates & Consultants, I've helped over 13,000 professionals and 50+ companies leverage LinkedIn for business growth.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 py-5 text-lg rounded-xl shadow-md hover:scale-105 transition-all">
              Book Your Free Consultation
            </Button>
          </Link>
        </div>

          {/* Right Column (Image) */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              {/* Subtle Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full -z-10 transform translate-x-4 translate-y-4 transition duration-500 ease-in-out"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 transition transform hover:scale-105">
                <Image
                  src="/images/bhavana-profile.jpg"
                  alt="Bhavana Govil - LinkedIn Expert"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
