import clsx from "clsx";
import classes from "./CasinoPlatform.module.css";

import {
  BuiltAs,
  CoreFeatures,
  WhoItsForAndBenefits,
  HowItWorks,
  ProblemWeSolve,
  HeroSection,
} from "@/components/common";

import {
  casinoImg,
  dashboardImg,
  gamePlayerImg,
  labelImg,
  walletIcon,
  webIcon,
} from "@/images";
import { FeaturesType } from "@/types";
import { underConstruction } from "@/videos";

const whatItIs = [
  "A decentralized ready casino infrastructure for operators and partners",
  "Built for Web3 and Web2 gaming environments",
  "Supports licensing, white label solutions, and modular integrations",
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

const CasinoPlatform = () => {
  return (
    <main className={clsx("container")}>
      <HeroSection
        img={casinoImg}
        whatItIs={whatItIs}
        heading="Decentralized Casino Platform"
        info="Transparent, on-chain advertising infrastructure for web2 & web3 ecosystems."
      />
      <ProblemWeSolve items={problemWeSolve} />
      <HowItWorks
        list={howItWorks}
        img={dashboardImg}
        video={underConstruction}
      />
      <CoreFeatures features={features} />
      <WhoItsForAndBenefits whoItsFor={whoItsFor} benefits={benefits} />
      <BuiltAs
        firstInfo="Connected to the Decentralized Ad System for built in traffic and user acquisition"
        secondInfo="Part of a broader RGG ecosystem enabling cross product growth"
      />
    </main>
  );
};

export default CasinoPlatform;
