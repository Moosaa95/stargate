import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"], display: 'swap', variable:"--font-mr" });

export const metadata: Metadata = {
  title: "Stargate Academy - Nurturing Academic and Spiritual Excellence",
  description: "Stargate Academy: Nurturing Academic and Spiritual Excellence since 2008. Discover our comprehensive curriculum blending Nigerian, British, and Islamic studies. Join a community where education goes beyond the classroom, empowering every student to shine bright. Explore now",
  keywords: "Stargate Academy, academic excellence, spiritual development, comprehensive curriculum, Nigerian curriculum, British curriculum, Islamic studies, Best Islamic School In Kubwa, Best School in Kubwa, Stargate Excellence Academy, stargate excellence, excellence academy in kubwa, muslim school in kubwa, muslim school in abuja, best islamic school in abuja",
  authors: [{name:"Stargate Academy", url:"https://www.stargateexcellenceacademy.com.ng/"}],
  openGraph: {
    title: "Stargate Academy - Nurturing Academic and Spiritual Excellence",
    description: "Stargate Academy: Nurturing Academic and Spiritual Excellence since 2008. Discover our comprehensive curriculum blending Nigerian, British, and Islamic studies. Join a community where education goes beyond the classroom, empowering every student to shine bright. Explore now",
    images: [],
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}</body>
    </html>
  );
}

// <!-- HTML Meta Tags -->
// <title>Stargate Academy - Nurturing Academic and Spiritual Excellence</title>
// <meta name="description" content="Stargate Academy: Nurturing Academic and Spiritual Excellence since 2008. Discover our comprehensive curriculum blending Nigerian, British, and Islamic studies. Join a community where education goes beyond the classroom, empowering every student to shine bright. Explore now">

// <!-- Facebook Meta Tags -->
// <meta property="og:url" content="https://www.stargateexcellenceacademy.com.ng/">
// <meta property="og:type" content="website">
// <meta property="og:title" content="Stargate Academy - Nurturing Academic and Spiritual Excellence">
// <meta property="og:description" content="Stargate Academy: Nurturing Academic and Spiritual Excellence since 2008. Discover our comprehensive curriculum blending Nigerian, British, and Islamic studies. Join a community where education goes beyond the classroom, empowering every student to shine bright. Explore now">
// <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/5f96fbeb-ed58-4423-9d7e-4d9393ad4a9a.jpg?token=wA-HkBb9B49wVi5PMxX8zre6ZycKfxdRll-jPnNpkzI&height=846&width=1200&expires=33248421929">

// <!-- Twitter Meta Tags -->
// <meta name="twitter:card" content="summary_large_image">
// <meta property="twitter:domain" content="stargateexcellenceacademy.com.ng">
// <meta property="twitter:url" content="https://www.stargateexcellenceacademy.com.ng/">
// <meta name="twitter:title" content="Stargate Academy - Nurturing Academic and Spiritual Excellence">
// <meta name="twitter:description" content="Stargate Academy: Nurturing Academic and Spiritual Excellence since 2008. Discover our comprehensive curriculum blending Nigerian, British, and Islamic studies. Join a community where education goes beyond the classroom, empowering every student to shine bright. Explore now">
// <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/5f96fbeb-ed58-4423-9d7e-4d9393ad4a9a.jpg?token=wA-HkBb9B49wVi5PMxX8zre6ZycKfxdRll-jPnNpkzI&height=846&width=1200&expires=33248421929">

// <!-- Meta Tags Generated via https://www.opengraph.xyz --></meta>