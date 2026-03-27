import React from "react";
import classes from "./OverlappingCards.module.css";
import { facebooker, streamer, tiktoker, youtuber } from "@/images";

const images = [youtuber, facebooker, tiktoker, streamer];

const OverlappingCards: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      {images.map((img, i) => (
        <div className={classes.card} key={i}>
          <img src={img} alt={`card-${i}`} />
        </div>
      ))}
    </div>
  );
};

export default OverlappingCards;
