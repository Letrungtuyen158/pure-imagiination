import FormContactSection from "@/components/form-contact-section/FormContactSection";
import HeroSection from "@/components/hero-section/HeroSection";
import CtaSection from "@/components/cta-section/CtaSection";
import OurPureDreamers from "@/components/our-pure-dreamers-section/OurPureDreamers";
import Partner from "@/components/partner-section/Partner";
import Quote from "@/components/quote/Quote";
import { QUOTE_DATA } from "@/components/quote/quote.constanst";
import SectorAnimation from "@/components/sector-animation/SectorAnimation";
import SloganAnimation from "@/components/slogan-animation/SloganAnimation";
import ThingOffer from "@/components/thing-offer/ThingOffer";
import SecondCTA from "@/components/second-cta/SecondCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Partner />
      <CtaSection />
      <OurPureDreamers />
      <Quote title={QUOTE_DATA.NO_MORE_HEADACHE.title} description={QUOTE_DATA.NO_MORE_HEADACHE.description} />
      <SectorAnimation />
      <ThingOffer />
      <Quote title={QUOTE_DATA.NO_MORE_FLOP.title} description={QUOTE_DATA.NO_MORE_FLOP.description} />
      <SecondCTA />
      <SloganAnimation />
      <FormContactSection />
    </main>
  );
}
