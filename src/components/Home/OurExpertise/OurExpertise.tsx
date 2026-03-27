import React from "react";
import classes from "./OurExpertise.module.css";

import { Heading, Text } from "@/components/common";

import clsx from "clsx";
import HoverStack from "./HoverStack/HoverStack";

const OurExpertise = () => {
  return (
    <section className={clsx(classes.container, "container")} id="expertise">
      <div className={classes.infoContainer}>
        <Heading xl6 className={classes.heading}>
          Our expertise
        </Heading>
        <Text xl2 capitalize className={classes.info}>
          Deep industry knowledge across blockchain, gaming, advertising, and
          fintech allows RGG to deliver real execution, not just ideas. We focus
          on growth, monetization, and building infrastructure that works in
          both Web3 and Web2. By connecting multiple sectors into one ecosystem,
          RGG helps partners launch faster, scale smarter, and rely on practical
          solutions instead of hype.
        </Text>
      </div>
      <HoverStack />
    </section>
  );
};

export default OurExpertise;
