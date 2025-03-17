"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setShowCoursesDropdown(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before hiding the dropdown to give users time to move to it
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowCoursesDropdown(false);
    }, 150);
  };

  // Clear timeout on component unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCoursesDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Events', href: '/events' },
    { title: 'Courses', href: '/courses', hasDropdown: true },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
  ];

  const courseCategories = [
    {
      title: 'Coaches',
      tagline: 'Attract Premium Clients',
      href: '/courses/coaches',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
          <path d="M12 12c-3 0-4.5 1.5-4.5 4.5v3h9v-3c0-3-1.5-4.5-4.5-4.5Z" />
          <circle cx="12" cy="7" r="3" />
          <path d="M19 12c-1.5 0-3 .5-3.5 1.5" />
          <path d="M5 12c1.5 0 3 .5 3.5 1.5" />
        </svg>
      )
    },
    {
      title: 'Corporate Professionals',
      tagline: 'Boost Your Brand Visibility',
      href: '/courses/corporate',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
          <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2" />
          <path d="M18 8h4v8h-4" />
          <path d="m15 12-6 6" />
          <path d="m15 18-6-6" />
        </svg>
      )
    },
    {
      title: 'Consultants',
      tagline: 'Generate Quality Leads',
      href: '/courses/consultants',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      )
    },
    {
      title: 'Profile Optimization',
      tagline: 'Become a Brand That Sparkles',
      href: '/courses/profile-optimization',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="m15 21 1.5-1.5a2.83 2.83 0 0 1 4 0L22 21" />
          <path d="M2 21a8 8 0 0 1 10.93-7.52" />
        </svg>
      )
    },
  ];

  const whatsappLink = "https://wa.me/919999999999?text=Hi%20Bhavana,%20I'm%20interested%20in%20your%20LinkedIn%20services";

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
            <Image 
              src="/images/bhavana-profile.jpg" 
              alt="Bhavana Govil" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-bold text-primary">Bhavana Govil | <span className="text-accent-foreground">BrandBhava</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.title} className="relative">
              {item.hasDropdown ? (
                <div ref={dropdownRef} className="relative">
                  <div 
                    className="text-gray-700 hover:text-primary font-medium transition-colors cursor-pointer flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>{item.title}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      className="ml-1 h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {/* Megamenu Dropdown */}
                  {showCoursesDropdown && (
                    <div 
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-6 w-[600px] z-50 border border-gray-100 grid grid-cols-2 gap-4"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {courseCategories.map((category, index) => (
                        <Link 
                          key={index} 
                          href={category.href}
                          className="flex items-start p-3 rounded-lg hover:bg-secondary/20 transition-colors"
                        >
                          <div className="mr-3 mt-1">{category.icon}</div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                            <p className="text-sm text-gray-600">{category.tagline}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="mr-1"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join WhatsApp
          </a>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Book a 1-on-1 Session
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col w-[300px]">
            <div className="flex items-center mb-8">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                <Image 
                  src="/images/bhavana-profile.jpg" 
                  alt="Bhavana Govil" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold text-primary">Bhavana Govil</span>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.title} className="flex flex-col">
                  {item.hasDropdown ? (
                    <>
                      <div className="text-lg font-medium text-gray-700 py-2 flex justify-between">
                        <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                          {item.title}
                        </Link>
                      </div>
                      <div className="ml-4 space-y-2 mt-2">
                        {courseCategories.map((category, index) => (
                          <Link 
                            key={index} 
                            href={category.href}
                            className="flex items-center text-gray-600 hover:text-primary py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mr-2">{category.icon}</div>
                            <span>{category.title}</span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center mt-4 bg-[#25D366] hover:bg-[#25D366]/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Join WhatsApp Community
              </a>
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                  Book a 1-on-1 Session
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header; 