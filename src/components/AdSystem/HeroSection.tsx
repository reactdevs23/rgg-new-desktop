import React from "react";
import { Wrapper } from "../common";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";
import { adImg } from "@/images";
import WhatItIs from "../common/WhatItIs/WhatItIs";
import clsx from "clsx";
import { fadeUp } from "@/Animation/animation";
interface HeroSectionProps {
  whatItIs: string[];
  heading?: string;
  info?: string;
  className?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  whatItIs,
  heading,
  info,
}) => {
  return (
    <Wrapper
      className={clsx(classes.wrapper, classes.mainWrapper)}
      heading={heading}
      info={info}
    >
      <motion.img
        src={adImg}
        alt="RGG ADS"
        className={classes.img}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
      />

      <WhatItIs title="What It Is" list={whatItIs} />
    </Wrapper>
  );
};

export default HeroSection;
