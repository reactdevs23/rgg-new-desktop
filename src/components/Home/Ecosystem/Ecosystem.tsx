import React, { useRef, useEffect } from "react";
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
import {
  adSystemVideo,
  casinoplatformVideo,
  superAppVideo,
  underConstruction,
} from "@/videos";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const ecosystems = [
  {
    img: adSystemImg,
    video: adSystemVideo,
    info: "Decentralized Ad System",
    to: "/ad-system",
  },
  {
    img: casinoPlatformImg,
    video: casinoplatformVideo,
    info: "Decentralized Casino Platform",
    to: "/casino-platform",
  },
  {
    img: miniAppImg,
    video: superAppVideo,
    info: "Telegram Mini-App Suite",
    to: "/mini-app",
  },
  {
    img: rggPayImg,
    info: "RGG Pay",
    video: underConstruction,
    to: "/rgg-pay",
  },
  {
    img: web3ServiceImg,
    video: underConstruction,
    info: "Web3 Development Services",
    to: "/web3-development",
  },
  {
    img: web3Agency,
    info: "Web3 Marketing Agency",
    video: underConstruction,
    to: "/web3-marketing-agency",
  },
];

const Ecosystem = () => {
  return (
    <div className={clsx(classes.container, "container")} id="ecosystem">
      <Heading textCenter xl5 className={classes.heading}>
        The RGG ecosystem
      </Heading>
      <div className={clsx(classes.items)}>
        {ecosystems?.map((el, i) => (
          <EcosystemItem key={i} item={el} />
        ))}
      </div>{" "}
      <Link
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
        to="contact-us"
        className={classes.startsNowButton}
      >
        <Button wFull>Start Now</Button>
      </Link>
    </div>
  );
};

const EcosystemItem = ({ item }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (containerRef.current) {
            containerRef.current.classList.add(classes.playing);
          }
        })
        .catch((error) => {
          console.log("Video play failed:", error);

          video.muted = true;
          video.play().catch(() => {});
        });
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    if (containerRef.current) {
      containerRef.current.classList.remove(classes.playing);
    }
  };

  return (
    <NavLink to={item.to} className={classes.item}>
      <div
        className={classes.mediaWrapper}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={item.video}
          className={classes.video}
          muted
          loop={false}
          playsInline
          preload="metadata"
          disablePictureInPicture
        />

        <img src={item.img} alt={item.info} className={classes.poster} />
      </div>

      <Text xl4 textCenter bold>
        {item.info}
      </Text>
    </NavLink>
  );
};

export default Ecosystem;
