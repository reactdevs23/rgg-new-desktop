import React from "react";
import classes from "./Loader.module.css";
import clsx from "clsx";

interface LoaderProps {
  color?: string;
  className?: string;
  type2?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ className, type2, color }) => {
  return (
    <div
      style={{
        borderTop: `2px solid ${color}`,
        borderLeft: `2px solid ${color}`,
        borderRight: `2px solid ${color}`,
      }}
      className={clsx(classes.loader, className, type2 && classes.type2)}
    />
  );
};

export default Loader;
