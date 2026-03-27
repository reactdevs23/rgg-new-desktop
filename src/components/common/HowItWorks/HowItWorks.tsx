import React from "react";
import classes from "./HowItWorks.module.css";
import clsx from "clsx";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import Reveal from "@/Reveal/Reveal";
import { fadeDown, fadeLeft, fadeRight } from "@/Animation/animation";

interface HowItWorksProps {
  list: string[];
  img?: string;
  video?: string; // optional video prop
  className?: string;
  heading?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({
  list,
  img,
  video,
  heading,
  className,
}) => {
  return (
    <div className={classes.mainWrapper}>
      <Reveal variant={fadeDown}>
        <Heading xl5 textCenter>
          {heading || "How It Works"}
        </Heading>
      </Reveal>

      <div className={clsx(classes.wrapper)}>
        <Reveal variant={fadeLeft}>
          <ul className={clsx(classes.listContainer, className)}>
            {list?.map((el, i) => (
              <li key={i} className={classes.list}>
                <Text xl3 textRight>
                  • {el}
                </Text>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant={fadeRight}>
          {video ? (
            <video
              src={video}
              className={classes.media}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img src={img} alt="#" className={classes.media} />
          )}
        </Reveal>
      </div>
    </div>
  );
};

export default HowItWorks;
