import React from "react";
import classes from "./JoinRgg.module.css";
import clsx from "clsx";
import { Heading, Text } from "@/components/common";

const socialItems = [
  {
    item: "Twitter",
    number: "500K",
    to: "#",
  },
  {
    item: "Telegram",
    number: "500K",
    to: "#",
  },
  {
    item: "Mini App",
    number: "500K",
    to: "#",
  },
  {
    item: "Reddit",
    number: "500K",
    to: "#",
  },
  {
    item: "Discord",
    number: "500K",
    to: "#",
  },
];

const JoinRgg = () => {
  return (
    <section className={clsx(classes.container, "container")} id="join-rgg">
      <Heading xl5 textCenter>
        Join the RGG Community
      </Heading>
      <Text xl textCenter className={classes.info}>
        Connect with builders,creators, and players shaping the next generation
        of decentralized platforms.
      </Text>
      <div className={classes.socialItems}>
        {socialItems?.map(({ item, number, to }, i) => (
          <a
            href={to}
            target="_blank"
            rel="noreferrer"
            key={i}
            className={classes.button}
          >
            {item} <span className={classes.highlight}>{number}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default JoinRgg;
