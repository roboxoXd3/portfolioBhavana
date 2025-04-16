import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 LinkedIn Profile Tips That Will Get You Noticed",
      excerpt: "Learn how to optimize your LinkedIn profile to stand out from the crowd and attract recruiters and opportunities.",
      date: "March 10, 2025",
      category: "Profile Optimization",
      slug: "linkedin-profile-tips",
      image: "/images/blog-1.jpg"
    },
    {
      id: 2,
      title: "How to Create Content That Generates Leads on LinkedIn",
      excerpt: "Discover the content strategies that will help you attract your ideal clients and generate quality leads consistently.",
      date: "March 5, 2025",
      category: "Content Strategy",
      slug: "content-lead-generation",
      image: "/images/blog-2.jpg"
    },
    {
      id: 3,
      title: "LinkedIn for Startups: Building Your Brand from Scratch",
      excerpt: "A comprehensive guide for founders looking to establish their brand presence on LinkedIn and connect with potential investors.",
      date: "February 28, 2025",
      category: "Startup Growth",
      slug: "linkedin-for-startups",
      image: "/images/blog-3.jpg"
    },
    {
      id: 4,
      title: "Advanced LinkedIn Search Techniques for Recruiters",
      excerpt: "Master the art of finding the perfect candidates using LinkedIn's powerful search features and Boolean operators.",
      date: "February 20, 2025",
      category: "Recruitment",
      slug: "linkedin-search-techniques",
      image: "/images/blog-4.jpg"
    },
    {
      id: 5,
      title: "How to Network Effectively on LinkedIn Without Being Pushy",
      excerpt: "Build meaningful professional relationships on LinkedIn with these authentic networking strategies.",
      date: "February 15, 2025",
      category: "Networking",
      slug: "effective-linkedin-networking",
      image: "/images/blog-5.jpg"
    },
    {
      id: 6,
      title: "LinkedIn Analytics: Understanding Your Profile Performance",
      excerpt: "Learn how to interpret LinkedIn analytics to improve your content strategy and increase your visibility.",
      date: "February 8, 2025",
      category: "Analytics",
      slug: "linkedin-analytics",
      image: "/images/blog-6.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">LinkedIn Insights & Strategies</h1>
        <p className="text-xl  max-w-3xl mx-auto">
          Practical tips and actionable advice to help you master LinkedIn and achieve your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="block h-full">
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs  ml-2">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                <p className=" line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 text-primary font-medium text-sm flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 