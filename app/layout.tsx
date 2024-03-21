import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stargate Academy",
  description: "Stargate Academy: Nurturing Academic and Spiritual Excellence since 2008. Discover our comprehensive curriculum blending Nigerian, British, and Islamic studies. Join a community where education goes beyond the classroom, empowering every student to shine bright. Explore now",
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
