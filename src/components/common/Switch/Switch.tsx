import React from "react";
import classes from "./Switch.module.css";
import { Text } from "..";

interface SwitchProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  label?: string;
  bg?: string;
}

const Switch: React.FC<SwitchProps> = ({
  isChecked,
  setIsChecked,
  label,
  bg,
}) => {
  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={classes.wrapper}>
      {label && (
        <Text sm primitive0>
          {label}
        </Text>
      )}
      <div
        className={`${classes.switch} ${isChecked ? classes.checked : ""}`}
        onClick={handleToggle}
        style={isChecked ? { backgroundColor: bg } : {}}
      >
        <div
          className={classes.slider}
          style={isChecked ? { backgroundColor: "#fff" } : {}}
        />
      </div>
    </div>
  );
};

export default Switch;
