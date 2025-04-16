import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AudienceLinks = () => {
  const audienceCards = [
    {
      title: 'Coaches',
      tagline: 'Attract Premium Clients',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
          <path d="M12 12c-3 0-4.5 1.5-4.5 4.5v3h9v-3c0-3-1.5-4.5-4.5-4.5Z" />
          <circle cx="12" cy="7" r="3" />
          <path d="M19 12c-1.5 0-3 .5-3.5 1.5" />
          <path d="M5 12c1.5 0 3 .5 3.5 1.5" />
        </svg>
      ),
      href: '/coaches',
    },
    {
      title: 'Corporate Professionals',
      tagline: 'Boost Your Brand Visibility',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
          <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2" />
          <path d="M18 8h4v8h-4" />
          <path d="m15 12-6 6" />
          <path d="m15 18-6-6" />
        </svg>
      ),
      href: '/corporate',
    },
    {
      title: 'Consultants',
      tagline: 'Generate Quality Leads',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      ),
      href: '/consultants',
    },
    {
      title: 'Profile Optimization',
      tagline: 'Become a Brand That Sparkles',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="m15 21 1.5-1.5a2.83 2.83 0 0 1 4 0L22 21" />
          <path d="M2 21a8 8 0 0 1 10.93-7.52" />
        </svg>
      ),
      href: '/profile-optimization',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">How I Can Help You</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Specialized LinkedIn strategies and solutions tailored for your specific needs.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audienceCards.map((card, index) => (
            <Link href={card.href} key={index} className="block h-full">
              <Card className="h-full transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-2">{card.icon}</div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{card.tagline}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceLinks; 