// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

// const HeroSection = () => {
//   return (
//     <section className="bg-light-blue py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* Left Column (Text) */}
//           <div className="max-w-lg">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary">
//               Capture Opportunities on LinkedIn™️
//             </h1>
//             <p className="text-lg md:text-xl mb-4">
//               <span className="font-semibold">Stellar LinkedIn Profile Branding & Tested Strategies</span> that deliver real results.
//             </p>
//             <p className="text-lg  mb-8">
//               As a LinkedIn Trainer & Growth Consultant to Coaches, Corporates & Consultants, I've helped over 13,000 professionals and 50+ companies leverage LinkedIn for business growth.
//             </p>
//             <Link href="/contact">
//               <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg">
//                 Book Your Free Consultation
//               </Button>
//             </Link>
//           </div>

//           {/* Right Column (Image) */}
//           <div className="flex justify-center md:justify-end">
//             <div className="relative w-full max-w-md aspect-square">
//               {/* Placeholder for the actual image */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full -z-10 transform translate-x-4 translate-y-4"></div>
//               <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
//                 <Image
//                   src="/images/bhavana-profile.jpg"
//                   alt="Bhavana Govil - LinkedIn Expert"
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   priority
//                   className="rounded-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection; 

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-light-blue py-20 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column (Text) */}
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary transition duration-300">
              Capture Opportunities on LinkedIn™️
            </h1>
            <p className="text-lg md:text-xl transition duration-300">
              <span className="font-semibold">Stellar LinkedIn Profile Branding & Tested Strategies</span> that deliver real results.
            </p>
            <p className="text-lg transition duration-300">
              As a LinkedIn Trainer & Growth Consultant to Coaches, Corporates & Consultants, I've helped over 13,000 professionals and 50+ companies leverage LinkedIn for business growth.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg transition transform hover:scale-105"
              >
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
