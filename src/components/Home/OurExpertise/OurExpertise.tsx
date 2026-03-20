import React from "react";
import classes from "./OurExpertise.module.css";
import { logo } from "@/images";
import { Button, Heading, Text } from "@/components/common";
import { Link } from "react-scroll";
import clsx from "clsx";

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
      <div className={classes.imgContainer}>
        <img src={logo} alt="Why RGG" className={classes.img} />
      </div>{" "}
    </section>
  );
};

export default OurExpertise;
