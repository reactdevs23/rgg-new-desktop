import React, { ReactNode } from "react";
import clsx from "clsx";
import { Heading, Text } from "..";
import classes from "./Header.module.css";

interface HeaderProps {
  className?: string;

  heading?: string;
  info?: string;
}

const Header: React.FC<HeaderProps> = ({ className, heading, info }) => {
  return (
    <div className={clsx(classes.header, className)}>
      <Heading xl5 textCenter>
        {heading}
      </Heading>
      {info && (
        <Text xl2 textCenter>
          {info}
        </Text>
      )}
    </div>
  );
};

export default Header;
