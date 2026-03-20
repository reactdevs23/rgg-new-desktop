import React, { ReactNode } from "react";
import clsx from "clsx";
import { Text } from "..";
import classes from "./WarningContainer.module.css";
import { RiErrorWarningFill } from "react-icons/ri";

interface WarningContainerProps {
  children: ReactNode;
  type2?: boolean;
  type3?: boolean;
  icon?: string;
}

const WarningContainer: React.FC<WarningContainerProps> = ({
  children,
  type2 = false,
  type3 = false,
  icon,
}) => {
  return (
    <div className={clsx(classes.wrapper, type2 && classes.type2)}>
      {icon ? (
        <img src={icon} alt="#" className={classes.icon} />
      ) : (
        <RiErrorWarningFill className={classes.icon} />
      )}

      {!type3 ? (
        <Text sm medium primitive50>
          {children}
        </Text>
      ) : (
        children
      )}
    </div>
  );
};

export default WarningContainer;
