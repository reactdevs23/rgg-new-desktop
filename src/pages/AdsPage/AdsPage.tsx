import HeroSection from "@/components/AdSystem/HeroSection";
import clsx from "clsx";
import classes from "./AdsPage.module.css";
import React from "react";
import {
  BuiltAs,
  CoreFeatures,
  WhoItsForAndBenefits,
  HowItWorks,
  ProblemWeSolve,
} from "@/components/common";
import { coreFeatures } from "@/data/data";

import { dashboardImg } from "@/images";

const whatItIs = [
  "A decentralized advertising infrastructure connecting brands, platforms, and users",
  "Built to replace traditional ad networks with transparent, performance driven mechanics",
  "Works across Web2 and Web3 environments",
];
const whoItsFor = [
  "Crypto projects and Web3 brands",
  "Telegram mini apps and gaming platforms",
  "Website owners and digital publishers",
];
const benefits = [
  "Lower acquisition costs for advertisers",
  "New revenue streams for partners and communities",
  "Engagement driven monetization instead of passive impressions",
];
const howItWorks = [
  "Advertisers create campaigns through RGG infrastructure",
  "Publishers, mini apps, casinos, and platforms integrate ad placements",
  "Users engage through missions, quests, or interactive formats",
];

const problemWeSolve = [
  "High CPM costs and low transparency in traditional ads",
  "Limited monetization for communities and creators",
  "Lack of ownership over data and engagement",
];
const AdsPage = () => {
  return (
    <main className={clsx("container")}>
      <HeroSection
        whatItIs={whatItIs}
        heading="Decentralized Ads. Real Performance"
        info="Transparent, on-chain advertising infrastructure for web2 & web3 ecosystems."
      />
      <ProblemWeSolve items={problemWeSolve} />
      <HowItWorks list={howItWorks} img={dashboardImg} />
      <CoreFeatures features={coreFeatures} type2 />
      <WhoItsForAndBenefits whoItsFor={whoItsFor} benefits={benefits} />
      <BuiltAs
        firstInfo="Built as part of a broader ecosystem including casino, mini apps, and infrastructure tools"
        secondInfo="Built as part of a broader ecosystem including casino, mini apps, and infrastructure tools"
      />
    </main>
  );
};

export default AdsPage;
