import React from "react";
import classes from "./Box.module.css";
import clsx from "clsx";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={clsx(classes.wrapper, className, "border bg")}>
      {children}
    </div>
  );
};

export default Box;
