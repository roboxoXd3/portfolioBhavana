import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Bhavana Govil | BrandBhava - LinkedIn Expert & Growth Consultant",
  description: "Bhavana Govil helps jobseekers, freelancers, startups, and recruiters leverage LinkedIn to accelerate growth, generate leads, and achieve career breakthroughs.",
  keywords: "LinkedIn coaching, LinkedIn expert, LinkedIn consultant, LinkedIn profile optimization, personal branding, career coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <main className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
