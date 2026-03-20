import React from "react";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { Button, Heading, Text } from "@/components/common";
import { logo } from "@/images";
import WorkWith from "../WorkWith/WorkWith";
const partners = [
  "Crypto Projects",
  "Exchanges",
  "Wallets",
  "Game Studios",
  "Influencers",
  "dApps",
  "Payment Companies",
];

const HeroSection: React.FC = () => {
  return (
    <div className={classes.wrapper} id="#hero">
      <div className={clsx(classes.container, "container")}>
        <div className={classes.infoContainer}>
          <Heading xl5 className={classes.heading}>
            Real Global Governance
          </Heading>
          <Text xl2 capitalize className={classes.info}>
            RGG it’s a movement. <br /> At the intersection of gaming and
            marketing, RGG empowers creators, players, and brands through a
            decentralized ecosystem that rewards engagement.
          </Text>
          <div className={classes.buttonContainer}>
            <Button>Book a Demo</Button>
            <Button>Explore products</Button>
          </div>
        </div>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Rgg" className={classes.logo} />
        </div>
      </div>
      <WorkWith partners={partners} />
    </div>
  );
};
export default HeroSection;
