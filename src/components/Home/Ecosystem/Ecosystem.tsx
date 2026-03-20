import React from "react";
import classes from "./Ecosystem.module.css";
import clsx from "clsx";
import { Button, Heading, Text } from "@/components/common";
import {
  adSystemImg,
  casinoPlatformImg,
  miniAppImg,
  rggPayImg,
  web3Agency,
  web3ServiceImg,
} from "@/images";

const ecosystems = [
  {
    img: adSystemImg,
    info: "Decentralized Ad System",
  },
  {
    img: casinoPlatformImg,
    info: "Decentralized Casino Platform",
  },
  {
    img: miniAppImg,
    info: "Telegram Mini-App Suite",
  },
  {
    img: rggPayImg,
    info: "RGG Pay",
  },
  {
    img: web3ServiceImg,
    info: "Web3 Development Services",
  },
  {
    img: web3Agency,
    info: "Web3 Marketing Agency",
  },
];

const Ecosystem = () => {
  return (
    <div className={clsx(classes.container, "container")} id="ecosystem">
      <Heading textCenter xl5 className={classes.heading}>
        The RGG ecosystem
      </Heading>

      <div className={classes.items}>
        {ecosystems?.map((el, i) => (
          <div className={classes.item} key={i}>
            <img src={el?.img} alt="#" className={classes.img} />
            <Text xl4 textCenter>
              {el?.info}
            </Text>
          </div>
        ))}
      </div>

      <Button>Start Now</Button>
    </div>
  );
};

export default Ecosystem;
