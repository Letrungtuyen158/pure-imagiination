import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/cta-section/CtaSection";
import OurPureDreamers from "@/components/our-pure-dreamers/OurPureDreamers";
import Partner from "@/components/partner/Partner";

export default function Home() {
  return (
    <main className=' mb-40'>
      <HeroSection />
      <Partner />
      <CtaSection />
      <OurPureDreamers />
    </main>
  );
}
