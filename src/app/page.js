import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import VideoIntro from '@/components/VideoIntro';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <VideoIntro />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
