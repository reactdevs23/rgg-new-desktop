import React from "react";
import { Wrapper } from "../common";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";
import {
  adImg,
  firstSampleAppImg,
  secondSampleAppImg,
  thirdSampleAppImg,
} from "@/images";
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
      <div className={classes.imgContainer}>
        <motion.img
          src={firstSampleAppImg}
          alt="First"
          className={clsx(classes.img, classes.firstImg)}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false }}
        />

        <motion.img
          src={secondSampleAppImg}
          alt="Second"
          className={clsx(classes.img, classes.secondImg)}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        />

        <motion.img
          src={thirdSampleAppImg}
          alt="Third"
          className={clsx(classes.img, classes.thirdImg)}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
        />
      </div>
      <WhatItIs
        title="What It Is"
        list={whatItIs}
        className={classes.whatItIs}
      />
    </Wrapper>
  );
};

export default HeroSection;
