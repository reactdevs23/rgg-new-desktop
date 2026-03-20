import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-scroll";
import { logo } from "@/images";
import clsx from "clsx";
import {
  FaApple,
  FaTelegramPlane,
  FaGooglePlay,
  FaArrowDown,
  FaRedditAlien,
} from "react-icons/fa";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { FaYoutube, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Text } from "../common";

const navItems = [
  { navItem: "Why RGG", to: "#why-rgg" },
  { navItem: "RGG Ecosystem", to: "#rggecosystem" },
  { navItem: "FAQ", to: "#faq" },
  { navItem: "Blog", to: "#blog" },
  { navItem: "Contact Us", to: "#contact-us" },
];
const socialItems = [
  {
    icon: <FaYoutube className={classes.socialIcon} />,
    to: "#",
  },
  {
    icon: <FaXTwitter className={classes.socialIcon} />,
    to: "#",
  },
  {
    icon: <FaTelegramPlane className={classes.socialIcon} />,
    to: "#",
  },
  {
    icon: <FaLinkedin className={classes.socialIcon} />,
    to: "#",
  },
  {
    icon: <FaRedditAlien className={classes.socialIcon} />,
    to: "#",
  },
];
const policyAndterms = [
  { item: "Cookie Policy", to: "https://app.klinkfinance.com/cookie-policy" },
  { item: "Privacy Policy", to: "https://app.klinkfinance.com/privacy-policy" },
  {
    item: "Terms of Service",
    to: "https://app.klinkfinance.com/terms-of-service",
  },
];
const Footer = () => {
  return (
    <footer className={clsx(classes.footer, "container")}>
      <nav className={classes.nav}>
        <Link to="#hero" spy={true} smooth={true} offset={50} duration={500}>
          <img src={logo} alt="RGG" className={classes.logo} />
        </Link>
        <div className={classes.navItems}>
          {" "}
          {navItems?.map((el, i) => (
            <Link
              to={el?.to}
              activeClass={classes.active}
              className={classes.navItem}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              key={i}
            >
              {el?.navItem}
            </Link>
          ))}
        </div>
      </nav>

      <div className={classes.socialInfo}>
        <div className={classes.socialContainer}>
          {socialItems?.map((item, i) => (
            <a
              href={item.to}
              target="_blank"
              rel="noreferrer"
              key={i}
              className={classes.socialIcon}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className={classes.buttonContainer}>
          <a
            href="apps.apple.com/az/app/klink-wallet-crypto-rewards/id1640052226"
            target="_blank"
            rel="noreferrer"
            className={classes.downloadButton}
          >
            <BsFillArrowDownCircleFill className={classes.downloadIcon} />
            Get the App
          </a>
          <a
            href="https://play.google.com/store/apps/details"
            target="_blank"
            rel="noreferrer"
            className={classes.button}
          >
            <FaApple className={classes.appleIcon} />
            AppStore
          </a>{" "}
          <button className={classes.button}>
            <FaGooglePlay className={classes.googleIcon} />
            Google Play
          </button>
        </div>
      </div>
      <Text xs primitive0 textCenter className={classes.info}>
        Digital currency values are not static and fluctuate due to market
        changes. Not all products and services are available in all geographic
        areas and are subject to applicable terms and conditions. Eligibility
        for particular products and services is subject to final determination
        by RGG. Rewards related to RGG products are subject to change over time.
      </Text>

      <div className={classes.policyAndCopyRight}>
        <div className={classes.policyAndTerms}>
          {policyAndterms?.map(({ item, to }, i) => (
            <a
              href={to}
              target="_blank"
              rel="noreferrer"
              key={i}
              className={classes.policyText}
            >
              {item}
            </a>
          ))}
        </div>
        <Text lxs className={classes.copyRightText}>
          © RGG 2026
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
