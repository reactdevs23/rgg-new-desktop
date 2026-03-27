import { magnifyIcon, sdkImg, walletIcon } from "@/images";
import { FeaturesType } from "@/types";

const coreFeatures: FeaturesType[] = [
  {
    img: magnifyIcon,
    info: "On chain tracking and transparent analytics",
  },
  {
    img: walletIcon,
    info: "Wallet based targeting and reward systems",
  },
  {
    img: sdkImg,
    info: "Flexible SDK for websites, apps, and gaming platforms",
  },
];
const whyItMatters: FeaturesType[] = [
  {
    img: magnifyIcon,
    info: "People stay longer when tools feel useful and entertaining",
  },
  {
    img: walletIcon,
    info: "Communities grow faster when users feel part of the ecosystem",
  },
  {
    img: sdkImg,
    info: "Creates a direct bridge between users, brands, and the RGG network",
  },
];

export { coreFeatures, whyItMatters };
