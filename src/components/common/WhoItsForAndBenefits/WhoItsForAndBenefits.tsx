import React from "react";
import classes from "./WhoItsForAndBenefits.module.css";
import clsx from "clsx";

import Reveal from "@/Reveal/Reveal";
import { fadeDown, fadeLeft, fadeRight } from "@/Animation/animation";
import Box from "../Box/Box";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import WhatItIs from "../WhatItIs/WhatItIs";
import Benefits from "../Benefits/Benefits";

interface WhoItsForAndBenefitsProps {
  whoItsFor: string[];
  benefits: string[];
}

const WhoItsForAndBenefits: React.FC<WhoItsForAndBenefitsProps> = ({
  whoItsFor,
  benefits,
}) => {
  const maxLength = Math.max(whoItsFor.length, benefits.length);

  const rows = Array.from({ length: maxLength }, (_, i) => ({
    who: whoItsFor[i],
    benefit: benefits[i],
  }));

  return (
    <section className={clsx(classes.wrapper, "container")}>
      <div className={classes.desktopOnly}>
        <Reveal variant={fadeDown}>
          <Heading xl5 textCenter>
            Who It’s For
          </Heading>
        </Reveal>

        <Reveal variant={fadeDown}>
          <Heading xl5 textCenter>
            Benefits
          </Heading>
        </Reveal>

        {rows.map((row, i) => (
          <React.Fragment key={i}>
            {row.who ? (
              <Reveal variant={fadeLeft}>
                <Box className={classes.list}>
                  <Text xxl textCenter>
                    {row.who}
                  </Text>
                </Box>
              </Reveal>
            ) : (
              <div className={classes.empty} />
            )}

            {row.benefit ? (
              <Reveal variant={fadeRight}>
                <Box className={classes.list}>
                  <Text xxl textCenter>
                    {row.benefit}
                  </Text>
                </Box>
              </Reveal>
            ) : (
              <div className={classes.empty} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Who It's For */}

      <Reveal variant={fadeLeft} className={classes.mobileOnly}>
        <Benefits list={whoItsFor} title="Who It’s For" />
      </Reveal>

      {/* Mobile Benefits */}

      <Reveal variant={fadeRight} className={classes.mobileOnly}>
        <Benefits list={benefits} title="Benefits" />
      </Reveal>
    </section>
  );
};

export default WhoItsForAndBenefits;
