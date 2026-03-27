import React from "react";
import classes from "./BuiltAs.module.css";
import { Reveal, Text } from "..";
import { logo } from "@/images";
import clsx from "clsx";
import { fadeLeft, fadeRight, zoomIn } from "@/Animation/animation";
import { motion } from "framer-motion";

interface BuiltAsProps {
  firstInfo: string;
  secondInfo: string;
  className?: string;
}

const BuiltAs: React.FC<BuiltAsProps> = ({
  firstInfo,
  secondInfo,
  className,
}) => {
  return (
    <section className={clsx(classes.wrapper, className, "border bg")}>
      <Reveal variant={fadeRight}>
        <Text xl3 textCenter className={classes.info}>
          {firstInfo}
        </Text>
      </Reveal>

      <motion.div
        className={classes.logoContainer}
        variants={zoomIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <img src={logo} alt="RGG" className={classes.logo} />
      </motion.div>

      <Reveal variant={fadeLeft}>
        <Text xl3 textCenter className={classes.info}>
          {secondInfo}
        </Text>
      </Reveal>
    </section>
  );
};

export default BuiltAs;
