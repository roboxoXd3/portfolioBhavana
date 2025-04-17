"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission, like sending to an API
    // For now, we'll just simulate success
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/10 to-secondary rounded-2xl p-8 md:p-12 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column (Image) */}
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative w-full max-w-md aspect-[3/4]">
                <div className="bg-card border rounded-lg shadow-lg p-6 relative z-10">
                  <div className="relative w-full aspect-square mb-4">
                    <div className="absolute top-0 left-0 w-full h-full bg-accent/20 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">LinkedIn Profile Branding Guide</h3>
                  <ul className=" space-y-2 mb-4">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Complete profile optimization checklist
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Advanced SEO techniques
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Content strategy framework
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column (Text & Form) */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Brand That Sparkles!</h2>
              <p className="text-lg  mb-6">
                Download my Free LinkedIn Profile Branding Guide and discover proven strategies that have helped 13,000+ professionals stand out and attract opportunities.
              </p>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 text-base"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-6 text-lg">
                    Get Your Free Guide
                  </Button>
                  <p className="text-sm mt-2">
                    By submitting, you agree to receive emails from Bhavana Govil. You can unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700">
                    Check your email for your LinkedIn Profile Branding Guide. Get ready to sparkle!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet; 