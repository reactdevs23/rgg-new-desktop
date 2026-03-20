import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  InputHTMLAttributes,
} from "react";
import { LuSearch } from "react-icons/lu";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import clsx from "clsx";
import classes from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  disabled?: boolean;
  setValue: (val: string) => void;
  search?: boolean;
  placeholder?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  readonly?: boolean;
  noIcon?: boolean;
  name?: string;
  sm?: boolean;
  isInsufficientBalance?: boolean;
}

// Use forwardRef to allow parent component to access the input element
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      disabled = false,
      setValue,
      search = false,
      placeholder = "",
      onKeyDown,
      onChange,
      type = "text",
      className,
      readonly = false,
      noIcon = false,
      name,
      sm = false,
      isInsufficientBalance = false,
      ...rest
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = useState(false);
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
          className,
          search && classes.searchIconInputContainer,
          sm && classes.sm
        )}
      >
        {search && !noIcon && <LuSearch className={classes.searchIcon} />}

        <input
          {...rest}
          id="input"
          name={name}
          ref={ref}
          type={showPassword ? "text" : type}
          onKeyDown={onkeydown && onKeyDown}
          value={value}
          onChange={handleChange}
          className={clsx(
            classes.input,
            isInsufficientBalance && classes.insufficientBalance
          )}
          placeholder={placeholder}
          required
          disabled={disabled}
          readOnly={readonly}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {type === "email" && <IoMailOutline className={classes.mailIcon} />}

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                className={classes.eye}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <FaRegEyeSlash
                className={classes.eye}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )}
          </>
        )}

        {search && value && (
          <MdClose className={classes.close} onClick={() => setValue("0.0")} />
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // optional, helps with debugging

export default Input;
