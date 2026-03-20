import React from "react";
import classes from "./InfoContainer.module.css";
import { Heading, Text } from "@/components/common";
import clsx from "clsx";

interface InfoContainerProps {
  heading: string;
  info: string;
  className?: string;
  img: string;
}

const InfoContainer: React.FC<InfoContainerProps> = ({
  heading,
  info,
  className,
  img,
}) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <img src={img} alt="#" className={classes.img} />
      <div className={classes.infoContainer}>
        <Heading xxl primitive200 semiBold textCenter>
          {heading}
        </Heading>
        <Text base medium primitive500 textCenter>
          {info}
        </Text>
      </div>
    </div>
  );
};

export default InfoContainer;
