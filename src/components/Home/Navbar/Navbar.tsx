import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-scroll";
import { logo } from "@/images";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
  { navItem: "Why RGG", to: "why-rgg" },
  { navItem: "RGG Ecosystem", to: "ecosystem" },
  { navItem: "FAQ", to: "#faq" },
  { navItem: "Blog", to: "blog" },
  { navItem: "Contact Us", to: "contact-us" },
];

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <nav className={classes.wrapper}>
      <div className={classes.container}>
        <Link to="#hero" spy={true} smooth={true} offset={0} duration={500}>
          <img src={logo} alt="RGG" className={classes.logo} />
        </Link>
        <div className={clsx(classes.navItems, sidebar && classes.sidebar)}>
          {" "}
          <IoMdClose
            className={classes.closeButton}
            onClick={() => setSidebar((prev) => !prev)}
          />
          {navItems?.map((el, i) => (
            <Link
              to={el?.to}
              activeClass={classes.active}
              className={classes.navItem}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              key={i}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el?.navItem}
            </Link>
          ))}
        </div>{" "}
        <RxHamburgerMenu
          className={clsx(classes.hamburger)}
          onClick={() => setSidebar((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
