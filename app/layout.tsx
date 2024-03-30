import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stargate Academy - Nurturing Academic and Spiritual Excellence",
  description: "Stargate Academy: Nurturing Academic and Spiritual Excellence since 2008. Discover our comprehensive curriculum blending Nigerian, British, and Islamic studies. Join a community where education goes beyond the classroom, empowering every student to shine bright. Explore now",
  keywords: "Stargate Academy, academic excellence, spiritual development, comprehensive curriculum, Nigerian curriculum, British curriculum, Islamic studies, Best Islamic School In Kubwa, Best School in Kubwa, Stargate Excellence Academy, stargate excellence, excellence academy in kubwa, muslim school in kubwa, muslim school in abuja, best islamic school in abuja",
  authors: [{name:"Stargate Academy", url:"https://www.stargateexcellenceacademy.com.ng/"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
