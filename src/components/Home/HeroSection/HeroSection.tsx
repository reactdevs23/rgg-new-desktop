import React from "react";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { Button, Heading, Text } from "@/components/common";
import { logo } from "@/images";
import WorkWith from "../WorkWith/WorkWith";
import { headerVideo } from "@/videos";
import ReactScrollLink from "@/components/common/ReactScrollLink/ReactScrollLink";
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
      <video className={classes.video} autoPlay muted loop playsInline>
        <source src={headerVideo} type="video/mp4" />
      </video>
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

            <ReactScrollLink to="ecosystem" offset={0}>
              <Button>Explore products</Button>
            </ReactScrollLink>
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
