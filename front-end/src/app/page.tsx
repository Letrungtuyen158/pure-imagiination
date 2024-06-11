import FormContactSection from "@/components/form-contact-section/FormContactSection";
import HeroSection from "@/components/hero-section/HeroSection";
import CtaSection from "@/components/cta-section/CtaSection";
import OurPureDreamers from "@/components/our-pure-dreamers-section/OurPureDreamers";
import Partner from "@/components/partner-section/Partner";

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

