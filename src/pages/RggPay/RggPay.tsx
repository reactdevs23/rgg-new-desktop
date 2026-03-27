import clsx from "clsx";

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
  complianceImg,
  dataDrivenImg,
  growthImg,
  payImg,
  routingImg,
  securityImg,
  walletIcon,
} from "@/images";
import { FeaturesType } from "@/types";
import { underConstruction } from "@/videos";

const whatItIs = [
  "A payment infrastructure connecting low risk and high risk payment solutions",
  "Built for Web2 and Web3 companies operating across multiple industries",
  "Bridges traditional PSPs with crypto native payment flows",
];
const problemWeSolve = [
  "Businesses struggle to access stable payment rails across different risk categories",
  "High risk sectors face banking limitations and fragmented providers",
  "Web3 companies need compliant gateways that still allow flexibility",
];
const howItWorks = [
  "RGG PAY connects businesses to suitable payment partners based on risk profile",
  "Supports fiat, crypto, and hybrid checkout environments",
  "Centralized orchestration layer managing providers and transaction routing",
];

const features: FeaturesType[] = [
  { img: securityImg, info: "Low risk and high risk PSP connections" },
  {
    img: walletIcon,
    info: "Crypto payment integrations and wallet support",
  },
  {
    img: routingImg,
    info: "Multi provider routing and payment orchestration",
  },
  {
    img: complianceImg,
    info: "Compliance aware infrastructure",
  },
];
const whoItsFor = [
  "Gaming, casino, and digital entertainment platforms",
  "Web3 projects and online businesses",
  "Companies needing flexible global payment coverage",
];

const benefits = [
  "Access to payment solutions others struggle to obtain",
  "Reduced downtime through multi provider structure",
  "Scalable infrastructure for growing platforms",
];
const RggPay = () => {
  return (
    <main className={clsx("container")}>
      <HeroSection whatItIs={whatItIs} img={payImg} heading="RGG Pay" />
      <ProblemWeSolve items={problemWeSolve} />
      <HowItWorks list={howItWorks} video={underConstruction} />
      <CoreFeatures features={features} />
      <WhoItsForAndBenefits whoItsFor={whoItsFor} benefits={benefits} />
      <BuiltAs
        firstInfo="Deep integration with the RGG ecosystem including Casino Platform and Ad System"
        secondInfo="One stop shop approach combining payments, growth, and infrastructure under one network"
      />
    </main>
  );
};

export default RggPay;
