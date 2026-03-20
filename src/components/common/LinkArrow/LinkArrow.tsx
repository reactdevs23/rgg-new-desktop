import React from "react";
import classes from "./LinkArrow.module.css";
import clsx from "clsx";
import { FaArrowRightLong } from "react-icons/fa6";

interface LinkArrowProps {
  className?: string;
}
const LinkArrow: React.FC<LinkArrowProps> = ({ className }) => {
  return (
    <div className={clsx(classes.arrowContainer, className)}>
      <FaArrowRightLong className={classes.arrow} />
    </div>
  );
};

export default LinkArrow;
