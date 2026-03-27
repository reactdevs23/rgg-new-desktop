import clsx from "clsx";

import React from "react";
import {
  BuiltAs,
  CoreFeatures,
  WhoItsForAndBenefits,
  HowItWorks,
  ProblemWeSolve,
  HeroSection,
} from "@/components/common";

import {
  agencyImg,
  campaignImg,
  communityImg,
  dataDrivenImg,
  growthImg,
} from "@/images";
import { FeaturesType } from "@/types";
import { underConstruction } from "@/videos";

const whatItIs = [
  "A Web3 focused marketing and growth agency built for blockchain, gaming, and digital platforms",
  "Combines strategy, distribution, and performance driven campaigns",
  "Designed for both Web3 native and Web2 companies entering crypto",
];
const problemWeSolve = [
  "Inefficient marketing spend with low real engagement",
  "Lack of agencies that understand token economies and community growth",
  "Fragmented campaigns across platforms and ecosystems",
];
const howItWorks = [
  "RGG builds growth strategies aligned with product and audience",
  "Campaigns run through communities, creators, mini apps, and ad infrastructure",
  "Performance tracked with transparent analytics and engagement metrics",
];

const features: FeaturesType[] = [
  { img: growthImg, info: "Growth strategy and brand positioning" },
  {
    img: communityImg,
    info: "Community activation and creator collaborations",
  },
  {
    img: campaignImg,
    info: "Campaign management across Web2 and Web3 channels",
  },
  {
    img: dataDrivenImg,
    info: "Data driven performance optimization",
  },
];
const whoItsFor = [
  "Crypto projects and token ecosystems",
  "Gaming platforms and mini app builders",
  "Brands entering Web3 markets",
];

const benefits = [
  "Real user acquisition instead of artificial traffic",
  "Stronger brand presence across ecosystems",
  "Marketing aligned with product utility and long term growth",
];
const Web3MarketingAgency = () => {
  return (
    <main className={clsx("container")}>
      <HeroSection
        whatItIs={whatItIs}
        img={agencyImg}
        heading="Web3 Marketing Agency"
      />
      <ProblemWeSolve items={problemWeSolve} />
      <HowItWorks list={howItWorks} video={underConstruction} />
      <CoreFeatures features={features} />
      <WhoItsForAndBenefits whoItsFor={whoItsFor} benefits={benefits} />
      <BuiltAs
        firstInfo="Direct integration with the Decentralized Ad System and Telegram Mini App Suite"
        secondInfo="Access to an ecosystem focused on engagement, distribution, and scalable growth"
      />
    </main>
  );
};

export default Web3MarketingAgency;
