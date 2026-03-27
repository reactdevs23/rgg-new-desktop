import React, { useState } from "react";
import classes from "./Navbar.module.css";

import { logo } from "@/images";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "@/utils/utils";

const navItems = [
  { navItem: "Why RGG", to: "/#why-rgg", offset: -70 },
  { navItem: "RGG Ecosystem", to: "/#ecosystem", offset: 0 },
  { navItem: "FAQ", to: "/#faq", offset: -150 },
  { navItem: "Blog", to: "/blog", offset: 0 },
  { navItem: "Contact Us", to: "/#contact-us", offset: -150 },
];

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <nav className={classes.wrapper}>
      <div className={classes.container}>
        <HashLink to="/#hero">
          <img src={logo} alt="RGG" className={classes.logo} />
        </HashLink>
        <div className={clsx(classes.navItems, sidebar && classes.sidebar)}>
          {" "}
          <IoMdClose
            className={classes.closeButton}
            onClick={() => setSidebar((prev) => !prev)}
          />
          {navItems.map((el, i) => (
            <HashLink
              key={i}
              to={el.to}
              scroll={scrollWithOffset(el.offset)}
              className={classes.navItem}
              onClick={() => setSidebar(false)}
            >
              {el.navItem}
            </HashLink>
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
