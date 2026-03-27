import clsx from "clsx";
import {
  CoreFeatures as WhyItsMatters,
  ProblemWeSolve as UserExperience,
  HowItWorks as ExampleOfMiniApps,
} from "@/components/common";

import { dashboardImg, exampleAppImg } from "@/images";
import { whyItMatters } from "@/data/data";
import HeroSection from "@/components/BuildForPeople/HeroSection";

const whatItIs = [
  "Mini apps designed around real user behavior, not only brand promotion",
  "Focus on fun, utility, and daily engagement inside Telegram",
  "Simple experiences that anyone can use without Web3 knowledge",
];

const exampleOfMinitApps = [
  "Engagement and quest hubs",
  "Reward based community tools",
  "Gaming utilities and interactive experiences",
  "Brand activations and campaign driven mini apps",
];

const userExperience = [
  "No complicated onboarding or technical barriers",
  "Gamified actions like quests, rewards, and social interaction",
  "Familiar Web2 feel with optional Web3 functionality in the background",
];
const BuiltForPeople = () => {
  return (
    <main className={clsx("container")}>
      <HeroSection whatItIs={whatItIs} heading="Built For People" />
      <UserExperience
        items={userExperience}
        heading="User Experience Philosophy"
      />
      <ExampleOfMiniApps
        list={exampleOfMinitApps}
        img={exampleAppImg}
        heading="Examples of Mini Apps"
      />
      <WhyItsMatters features={whyItMatters} heading="Why It Matters" type2 />
    </main>
  );
};

export default BuiltForPeople;
