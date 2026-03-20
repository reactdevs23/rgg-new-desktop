import React from "react";
import classes from "./Overlay.module.css";
import clsx from "clsx";
import { useScroll } from "@/hooks/useScroll";

interface OverlayProps {
  className?: string;
  type2?: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ className, type2 }) => {
  const { hasScrolled, isScrollingUp } = useScroll();

  return (
    <div
      className={clsx(
        classes.overlay,
        isScrollingUp && classes.isScrollingUp,
        className,
        !hasScrolled && classes.noBg,
        type2 && classes.type2
      )}
    />
  );
};

export default Overlay;
