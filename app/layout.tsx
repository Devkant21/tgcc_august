import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The GoodCraft Co",
  description: "Home to conscious spirits. Unfold the story of diversity within India through the lens of crafted spirits.",
  openGraph: {
    title: "The GoodCraft Co",
    description: "Home to conscious spirits. Unfold the story of diversity within India through the lens of crafted spirits.",
    url: "https://tgcc-august.vercel.app/",
    siteName: "The GoodCraft Co",
    images: [
      {
        url: "https://i.ibb.co/TH8pZVt/tgcc-logo.png",
        width: 1200,
        height: 600,
        alt: "TGCC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
