import HeroSection from "@/components/home/hero-section";
import AudienceLinks from "@/components/home/audience-links";
import SuccessStories from "@/components/home/success-stories";
import Transformations from "@/components/home/transformations";
import MeetBhavana from "@/components/home/meet-bhavana";
import Testimonials from "@/components/home/testimonials";
import LeadMagnet from "@/components/home/lead-magnet";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AudienceLinks />
      <SuccessStories />
      <Transformations />
      <MeetBhavana />
      <Testimonials />
      <LeadMagnet />
      <CTASection />
    </div>
  );
}
