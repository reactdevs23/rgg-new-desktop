import React from "react";
import { Wrapper } from "..";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";

import WhatItIs from "../WhatItIs/WhatItIs";
import clsx from "clsx";
import { fadeUp } from "@/Animation/animation";
interface HeroSectionProps {
  whatItIs: string[];
  heading?: string;
  info?: string;
  img: string;
  className?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  whatItIs,
  heading,
  info,
  img,
}) => {
  return (
    <Wrapper
      className={clsx(classes.wrapper, classes.mainWrapper)}
      heading={heading}
      info={info}
    >
      <motion.img
        src={img}
        alt="Casino Platform"
        className={classes.img}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
      />

      <WhatItIs
        title="What It Is"
        list={whatItIs}
        className={classes.whatItIs}
      />
    </Wrapper>
  );
};

export default HeroSection;
