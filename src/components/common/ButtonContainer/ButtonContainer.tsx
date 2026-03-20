import React, { ReactNode } from "react";
import clsx from "clsx";
import classes from "./ButtonContainer.module.css";

interface ButtonContainerProps {
  children: ReactNode;
  className?: string;
  type2?: boolean;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
  className,
  type2,
}) => {
  return (
    <div
      className={clsx(
        classes.buttonContainer,
        className,
        "space",
        type2 && classes.type2
      )}
    >
      {children}
    </div>
  );
};

export default ButtonContainer;
