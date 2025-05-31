import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CTASection from '@/components/home/CTASection';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      {/* <TestimonialSection /> */}
      <CTASection />
    </div>
  );
}
