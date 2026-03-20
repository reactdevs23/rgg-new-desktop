import React, { ReactNode } from "react";
import classes from "./Bg.module.css";
import clsx from "clsx";

interface BgProps {
  children?: ReactNode;
}

const Bg: React.FC<BgProps> = ({ children }) => {
  return (
    <div className={classes.techBg}>
      {children}
      <div className={classes.techLines}>
        <span className={clsx(classes.line, classes.l1)} />
        <span className={clsx(classes.line, classes.l2)} />
        <span className={clsx(classes.line, classes.l3)} />
        <span className={clsx(classes.line, classes.l4)} />
      </div>
    </div>
  );
};

export default Bg;
