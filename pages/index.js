import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import AboutSection from '@/components/home/AboutSection';
import ScienceSection from '@/components/home/ScienceSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ScienceSection />
      <FeatureSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
}
