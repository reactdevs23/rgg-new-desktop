import React, { ReactNode } from "react";
import clsx from "clsx";
import { Heading, IconButton, Text } from "..";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

interface HeaderProps {
  className?: string;
  children?: ReactNode;

  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, children, onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={clsx(classes.header, className)}>
      <IconButton onClick={handleBack} className={classes.side}>
        <FaAngleLeft className={classes.icon} />
      </IconButton>
      <Heading base medium primitive0 textCenter>
        {children}
      </Heading>
      <div className={classes.side}></div>
    </div>
  );
};

export default Header;
