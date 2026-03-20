import React from "react";
import classes from "./BackButton.module.css";
import { FaAngleLeft } from "react-icons/fa6";

import clsx from "clsx";
interface ButtonProps {
  className?: string;
  setStep: (number) => void;
}

const BackButton: React.FC<ButtonProps> = ({ className, setStep }) => {
  return (
    <button
      onClick={() => setStep((prev) => prev - 1)}
      className={clsx(classes.button, className)}
    >
      <FaAngleLeft />
    </button>
  );
};

export default BackButton;
