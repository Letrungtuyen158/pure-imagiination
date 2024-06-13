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
import DoTheBest from "@/components/do-the-best/DoTheBest";
import ReasonSection from "@/components/reason-section/ReasonSection";
import ReasonSlide from "@/components/reason-section/ReasonSlide";

export default function Home() {
  return (
    <main className="overflow-hidden">
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
      <ReasonSection />
      <div className="sm:hidden mt-12 pb-[7rem]">
        <ReasonSlide />
      </div>
      <FormContactSection />
      <DoTheBest />
    </main>
  );
}
