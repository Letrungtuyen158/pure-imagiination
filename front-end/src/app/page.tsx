import FormContactSection from "@/components/FormContactSection";
import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/cta-section/CtaSection";
import OurPureDreamers from "@/components/our-pure-dreamers/OurPureDreamers";
import Partner from "@/components/partner/Partner";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Partner />
      <CtaSection />
      <OurPureDreamers />
      <FormContactSection />
    </main>
  );
}

