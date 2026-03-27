import React from "react";
import Text from "../Text/Text";
import classes from "./ProblemWeSolve.module.css";
import clsx from "clsx";
import Heading from "../Heading/Heading";
import Box from "../Box/Box";

import { fadeDown, fadeUp } from "@/Animation/animation";
import Reveal from "@/Reveal/Reveal";

interface ProblemWeSolveProps {
  items: string[];
  heading?: string;
  className?: string;
}

const ProblemWeSolve: React.FC<ProblemWeSolveProps> = ({
  items,
  className,
  heading,
}) => {
  return (
    <section className={clsx(className, classes.mainWrapper)}>
      <Reveal variant={fadeDown}>
        <Heading textCenter xl5>
          {heading ? heading : "Problem we solve"}
        </Heading>
      </Reveal>

      <div className={classes.wrapper}>
        {items?.map((el, i) => (
          <Box className={classes.box} key={i}>
            <Reveal variant={fadeUp}>
              <Text xl2 textCenter>
                {el}
              </Text>
            </Reveal>
          </Box>
        ))}
      </div>
    </section>
  );
};

export default ProblemWeSolve;
