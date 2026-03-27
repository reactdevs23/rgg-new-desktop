import React from "react";
import classes from "./HoverStack.module.css";
import {
  casinoPlatformImg,
  doubleImg,
  liquidityImg,
  logo,
  superAppImg,
  whiteLabeImg,
} from "@/images";

const cards = [
  casinoPlatformImg,
  liquidityImg,
  doubleImg,
  whiteLabeImg,
  superAppImg,
];

const HoverStack: React.FC = () => {
  return (
    <main className={classes.wrapper}>
      <div className={classes.stack}>
        {cards.map((src, i) => (
          <img
            key={i}
            src={src}
            className={`${classes.card} ${classes[`card${i}`]}`}
            alt=""
          />
        ))}
      </div>

      <img src={logo} alt="logo" className={classes.logo} />
    </main>
  );
};

export default HoverStack;
