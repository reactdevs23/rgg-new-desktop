import React from "react";
import clsx from "clsx";
import classes from "./Wrapper.module.css";
import { Header, Heading } from "..";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
  heading: string;
  info?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  className,
  children,
  heading,
  info,
}) => {
  return (
    <section className={clsx(classes.mainWrapper)}>
      <Header heading={heading} info={info} />
      <div className={clsx(classes.wrapper, className, "border bg")}>
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
