import React, { useState, ChangeEvent, Children, ReactNode } from "react";

import clsx from "clsx";

import classes from "./InputBox.module.css";
import Text from "../Text/Text";

interface InputProps {
  value: string | number;
  disabled?: boolean;
  setValue: (val: string) => void;
  search?: boolean;
  placeholder?: string;

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  readonly?: boolean;
  noIcon?: boolean;
  name?: string;
  label?: string;
  children?: ReactNode;
}

const InputBox: React.FC<InputProps> = ({
  value,
  disabled = false,
  setValue,
  placeholder = "Enter",
  onChange,
  type = "text",
  className,
  readonly = false,
  name = "",
  label,
  children,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <div
      className={clsx(
        classes.inputContainer,
        isFocused && classes.focused,
        className
      )}
    >
      <div className={classes.header}>
        <Text base medium primitive400>
          {label}
        </Text>
        {children}
      </div>
      <input
        id="input"
        name={name}
        type={type || "text"}
        value={value}
        onChange={handleChange}
        className={classes.input}
        placeholder={placeholder}
        required
        disabled={disabled}
        readOnly={readonly}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputBox;
