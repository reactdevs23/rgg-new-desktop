// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Important to return null since this component does not render anything
};

export default ScrollToTop;

// utils.ts
export const copyToClipboard = (value: string): void => {
  navigator.clipboard.writeText(value);
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>,
): void => {
  const allowedKeys = [
    "Backspace",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight",
    "ArrowLeft",
    "Tab",
  ];

  if (/[0-9]/.test(event.key) || allowedKeys.includes(event.key)) {
    return;
  }

  if (event.key === ".") {
    if ((event.target as HTMLInputElement).value.includes(".")) {
      event.preventDefault();
    }
    return;
  }

  event.preventDefault();
};

export const scrollWithOffset =
  (offset: number) =>
  (el: HTMLElement): void => {
    const y = el.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
