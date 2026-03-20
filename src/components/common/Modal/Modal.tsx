import React, { ReactNode, RefObject } from "react";

import { Heading, Text } from "..";
import classes from "./Modal.module.css";
import clsx from "clsx";
import useViewportHeight from "@/hooks/useViewportHeight";
import { FaAngleLeft } from "react-icons/fa6";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
  onClose: () => void;
  className?: string;
  heading?: ReactNode;
  children?: ReactNode;
  parentRef?: RefObject<HTMLDivElement>;
  noHeader?: boolean;
  subHeading?: string;
}

const Modal: React.FC<ModalProps> = ({
  isActive,
  onClose,
  className,
  heading,
  children,
  parentRef,
  noHeader,
  subHeading,
  ...rest
}) => {
  useViewportHeight();

  return (
    <>
      {isActive && (
        <div
          className={clsx(isActive && classes.active, classes.modalOverlay)}
          onClick={onClose}
        />
      )}
      <div
        ref={parentRef}
        className={clsx(
          className,
          isActive && classes.active,
          classes.modal,
          noHeader && classes.noHeader,
          "overflow"
        )}
        {...rest}
      >
        {!noHeader && (
          <div className={clsx(classes.header, subHeading && classes.header2)}>
            <button onClick={onClose} className={classes.closeButton}>
              <FaAngleLeft className={classes.closeIcon} />
            </button>
            <div>
              <Heading primitive100 base medium>
                {heading}
              </Heading>
              {subHeading && (
                <Text primitive500 medium base>
                  {subHeading}
                </Text>
              )}
            </div>

            <button className={classes.side}></button>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default Modal;
