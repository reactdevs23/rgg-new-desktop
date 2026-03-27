import { FeaturesType } from "@/types";
import clsx from "clsx";
import React from "react";
import classes from "./CoreFeatures.module.css";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import Box from "../Box/Box";
import Reveal from "@/Reveal/Reveal";
import { fadeDown, fadeUp, zoomIn } from "@/Animation/animation";

interface CoreFeaturesProps {
  features: FeaturesType[];
  heading?: string;
  className?: string;
  type2?: boolean;
}

const CoreFeatures: React.FC<CoreFeaturesProps> = ({
  features,
  heading,
  className,
  type2,
}) => {
  return (
    <section className={classes.mainWrapper}>
      <Reveal variant={fadeDown}>
        <Heading xl5 textCenter>
          {heading ? heading : "Core Features"}
        </Heading>
      </Reveal>
      <div
        className={clsx(className, classes.features, type2 && classes.type2)}
      >
        {features.map((feature, index) => (
          <Box key={index} className={classes.feature}>
            <Reveal variant={zoomIn}>
              <div className={classes.imgContainer}>
                <img src={feature.img} alt="#" className={classes.img} />
              </div>
            </Reveal>
            <Reveal variant={fadeUp}>
              <Text xl3 textCenter>
                {feature?.info}
              </Text>
            </Reveal>
          </Box>
        ))}
      </div>
    </section>
  );
};

export default CoreFeatures;
