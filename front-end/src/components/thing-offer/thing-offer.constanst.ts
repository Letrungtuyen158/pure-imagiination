import policyAdvisor from "/public/thing-offers/policy-advisor.png";
import revenueBoosting from "/public/thing-offers/revenue-boosting.png";
import creativeAdvisor from "/public/thing-offers/creative-advisor.png";
import personalBranding from "/public/thing-offers/personal-branding.png";
import { StaticImageData } from "next/image";

interface ThingOfferType {
  title: string;
  description: string;
  image: StaticImageData;
}

export const THING_OFFER: ThingOfferType[] = [
  {
    title: "POLICY ADVISOR",
    description:
      "Protect your TikTok channel with our expert content moderation team. We have a proven track record of ensuring content complies with TikTok policies, giving you peace of mind and the freedom to focus on creating.",
    image: policyAdvisor,
  },
  {
    title: "REVENUE BOOSTING",
    description: "Let’s grow your channel’s revenue together. Focus on crafting amazing products, and leave the sales, customer communication, and business growth to our experienced team.",
    image: revenueBoosting,
  },
  {
    title: "CREATIVE ADVISOR",
    description:
      "Unlock your creative potential. Boost your content quality and increase your audience engagement with our expert support. We’ll help you create content that resonates, whether you need a fresh perspective, a polished script, or a solution to a creative roadblock.",
    image: creativeAdvisor,
  },
  {
    title: "PERSONAL BRANDING",
    description:
      "Building a meaningful personal brand on TikTok takes more than just posting videos. It requires strategy, creativity, and a deep understanding of your audience. Partner with us and let our experienced team guide you in creating a truly influential presence in your community.",
    image: personalBranding,
  },
];
