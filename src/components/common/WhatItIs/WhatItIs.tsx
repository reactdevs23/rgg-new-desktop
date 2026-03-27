import React from "react";
import Heading from "../Heading/Heading";
import classes from "./WhatItIs.module.css";
import Text from "../Text/Text";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/Animation/animation";
import clsx from "clsx";

interface WhatItIsProps {
  title: string;
  list: string[];
  className?: string;
}

const WhatItIs: React.FC<WhatItIsProps> = ({ title, list, className }) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <Heading xl5 textCenter>
        {title}
      </Heading>

      {list?.map((el, i) => (
        <motion.div
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
          variants={fadeRight}
          className={clsx(classes.list, "list")}
          key={i}
        >
          <Text xxl>{el}</Text>
        </motion.div>
      ))}
    </div>
  );
};

export default WhatItIs;
