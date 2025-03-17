import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your LinkedIn Presence?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let me help you build a stellar LinkedIn profile and create strategies that will attract your ideal clients or opportunities.
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-80">
          Whether you're a coach looking for premium clients, a corporate professional aiming to establish thought leadership, or a consultant seeking quality leads - I have proven strategies for you.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-lg">
            Book a 1-on-1 Strategy Call
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection; 