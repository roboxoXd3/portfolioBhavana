"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LuMoonStar } from "react-icons/lu";
import { GoSun } from "react-icons/go";

const Header = () => {
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCoursesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Events", href: "/events" },
    { title: "Courses", href: "/courses", hasDropdown: true },
    { title: "Blog", href: "/blog" },
    { title: "Newsletter", href: "/newsletter" },
    { title: "Contact", href: "/contact" },
  ];

  const courseCategories = [
    {
      title: "Coaches",
      tagline: "Attract Premium Clients",
      href: "/courses/coaches",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 12c-3 0-4.5 1.5-4.5 4.5v3h9v-3c0-3-1.5-4.5-4.5-4.5Z" />
          <circle cx="12" cy="7" r="3" />
        </svg>
      ),
    },
    {
      title: "Corporate Professionals",
      tagline: "Boost Your Brand Visibility",
      href: "/courses/corporate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      ),
    },
    {
      title: "Consultants",
      tagline: "Generate Quality Leads",
      href: "/courses/consultants",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      ),
    },
    {
      title: "Profile Optimization",
      tagline: "Become a Brand That Sparkles",
      href: "/courses/profile-optimization",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  const whatsappLink =
    "https://wa.me/919999999999?text=Hi%20Bhavana,%20I'm%20interested%20in%20your%20LinkedIn%20services";

  return (
    <header className="sticky top-0 z-50 w-full bg-background text-foreground backdrop-blur-sm border-b border-border shadow-sm transition-colors">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/images/bhavana-profile.jpg"
                alt="Bhavana Govil"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg font-bold text-foreground">
              Bhavana Govil <span className="text-primary">| BrandBhava</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.hasDropdown ? (
                  <div ref={dropdownRef} className="relative">
                    <button
                      className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium transition-colors gap-1"
                      onClick={() =>
                        setShowCoursesDropdown(!showCoursesDropdown)
                      }
                    >
                      {item.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-4 w-4 transition-transform ${
                          showCoursesDropdown ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {showCoursesDropdown && (
                      <div className="absolute top-full right-0 mt-2 w-[520px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 grid grid-cols-2 gap-3 border border-gray-100 dark:border-gray-700 z-50">
                        {courseCategories.map((category) => (
                          <Link
                            key={category.title}
                            href={category.href}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setShowCoursesDropdown(false)}
                          >
                            <div className="mr-3 mt-1 text-primary">
                              {category.icon}
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-white">
                                {category.title}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {category.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center space-x-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25D366] hover:bg-[#25D366]/90 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white text-sm">
                Book a Session
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary cursor-pointer transition"
            >
              {isDarkMode ? <GoSun size={20} /> : <LuMoonStar size={20} />}
            </button>

            {/* Mobile Navigation */}
            <div className="xl:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 dark:text-gray-200"
                  >
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
                    >
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] p-0 bg-white dark:bg-black"
                >
                  {/* Add SheetHeader with SheetTitle for accessibility */}
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 border-2 border-primary">
                          <Image
                            src="/images/bhavana-profile.jpg"
                            alt="Bhavana Govil"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          Bhavana Govil{" "}
                          <span className="text-primary">| BrandBhava</span>
                        </span>
                      </div>
                    </div>

                    <nav className="flex-1 overflow-auto p-4">
                      <div className="flex flex-col space-y-1">
                        {navItems.map((item) => (
                          <div key={item.title}>
                            {item.hasDropdown ? (
                              <div className="mb-2">
                                <Link
                                  href={item.href}
                                  className="flex items-center justify-between py-2 text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
                                >
                                  {item.title}
                                </Link>
                                <div className="ml-4 mt-1 border-l-2 border-gray-100 dark:border-gray-700 pl-3">
                                  {courseCategories.map((category) => (
                                    <Link
                                      key={category.title}
                                      href={category.href}
                                      className="flex items-center py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                                    >
                                      <span className="mr-2">
                                        {category.icon}
                                      </span>
                                      <span>{category.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                className="flex py-2 text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
                              >
                                {item.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </nav>

                    <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex flex-col space-y-3">
                        <Link
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-[#25D366] hover:bg-[#25D366]/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-2"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Join WhatsApp
                        </Link>
                        <Link href="/contact" className="w-full">
                          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                            Book a 1-on-1 Session
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
