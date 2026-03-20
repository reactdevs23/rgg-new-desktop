import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";
import classes from "./CheckBox.module.css";
import Text from "../Text/Text";

interface CheckBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  className?: string;
  label?: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  className,
  label,
  checked,
  setChecked,
  required,
  ...rest
}) => {
  return (
    <label className={clsx(className, classes.container)}>
      <Text primitive500 medium base className={classes.label}>
        {label}
      </Text>
      <input
        type="checkbox"
        checked={checked}
        required={required}
        {...rest}
        onChange={() => setChecked((prev) => !prev)}
      />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default CheckBox;
