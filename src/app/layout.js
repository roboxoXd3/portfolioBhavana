import "./globals.css";

export const metadata = {
  title: "Bhavana Govil | LinkedIn Growth & Personal Branding Expert",
  description: "Helping Coaches, Consultants, and Professionals Build Their Personal Brand & Generate Leads on LinkedIn.",
  keywords: "LinkedIn, Personal Branding, Lead Generation, LinkedIn Growth, LinkedIn Expert, Bhavana Govil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-linkedinBg text-linkedinText">
        {children}
      </body>
    </html>
  );
}
