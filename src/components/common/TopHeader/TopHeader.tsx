import React from "react";
import classes from "./TopHeader.module.css";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import clsx from "clsx";

interface HeaderProps {
  heading: string;
  info?: string;
  className?: string;
}

const TopHeader: React.FC<HeaderProps> = ({ heading, info, className }) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <Heading xl2 primitive0>
        {heading}
      </Heading>
      {info && <Text primitive400>{info}</Text>}
    </div>
  );
};

export default TopHeader;
