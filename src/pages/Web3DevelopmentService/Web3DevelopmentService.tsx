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
  gamePlayerImg,
  labelImg,
  serviceImg,
  walletIcon,
  webIcon,
} from "@/images";
import { FeaturesType } from "@/types";
import { underConstruction } from "@/videos";

const whatItIs = [
  "A full stack Web3 development service for companies building in blockchain and gaming",
  "Focused on infrastructure, integrations, and scalable product deployment",
  "Designed to support both startups and established platforms",
];
const problemWeSolve = [
  "A decentralized ready casino infrastructure for operators and partners",
  "Lack of transparency between operators and players",
  "Limited monetization models beyond traditional casino structures",
];
const howItWorks = [
  "Operators launch through RGG infrastructure and licensing framework",
  "Games, payments, and engagement systems connect into one ecosystem",
  "Optional integration with wallet based identity and reward mechanics",
];

const features: FeaturesType[] = [
  { img: labelImg, info: "White label casino platform" },
  { img: walletIcon, info: "Wallet and crypto payment support" },
  {
    img: gamePlayerImg,
    info: "Player engagement tools and gamified experiences",
  },
  { img: webIcon, info: "Back office analytics and performance tracking" },
];
const whoItsFor = [
  "Casino operators and gaming brands",
  "Web3 communities launching gaming platforms",
  "Affiliates and traffic partners",
];

const benefits = [
  "Faster go to market with reduced technical overhead",
  "New monetization layers beyond standard casino revenue",
  "Scalable infrastructure that grows with partners",
];
const Web3DevelopmentService = () => {
  return (
    <main className={clsx("container")}>
      <HeroSection
        whatItIs={whatItIs}
        img={serviceImg}
        heading="Decentralized Ads. Real Performance"
        info="Transparent, on-chain advertising infrastructure for web2 & web3 ecosystems."
      />
      <ProblemWeSolve items={problemWeSolve} />
      <HowItWorks list={howItWorks} video={underConstruction} />
      <CoreFeatures features={features} />
      <WhoItsForAndBenefits whoItsFor={whoItsFor} benefits={benefits} />
      <BuiltAs
        firstInfo="Connected to the Decentralized Ad System for built in traffic and user acquisition"
        secondInfo="Part of a broader RGG ecosystem enabling cross product growth"
      />
    </main>
  );
};

export default Web3DevelopmentService;
