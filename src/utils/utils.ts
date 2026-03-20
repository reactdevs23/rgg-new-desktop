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

export const maskToken = (
  token: string,
  tokenLength = 5,
  maskLength = 2
): string => {
  if (!token) return "";

  const mask = "*".repeat(maskLength);

  if (token.length >= 10) {
    const firstPart = token.slice(0, tokenLength);
    const lastPart = token.slice(-tokenLength);
    return `${firstPart}${mask}${lastPart}`;
  } else {
    const middleIndex = Math.floor(token.length / 2);
    const firstPart = token.slice(0, middleIndex);
    const lastPart = token.slice(middleIndex);
    return `${firstPart}${mask}${lastPart}`;
  }
};

export const maskAddress = (address: string): string => {
  if (!address) return "";

  if (address.length >= 10) {
    const firstPart = address.slice(0, 4);
    const lastPart = address.slice(-4);
    return `${firstPart}...${lastPart}`;
  } else {
    const middleIndex = Math.floor(address.length / 2);
    const firstPart = address.slice(0, middleIndex);
    const lastPart = address.slice(middleIndex);
    return `${firstPart}...${lastPart}`;
  }
};

export const scrollToBottom = (): void => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Failed to save ${key} to localStorage`, e);
  }
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>
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

export const getInitials = (fullName: string): string => {
  if (!fullName) return "";

  const parts = fullName.trim().split(/\s+/);
  const firstInitial = parts[0]?.[0]?.toUpperCase() || "";
  const lastInitial =
    parts.length > 1 ? parts[parts.length - 1][0].toUpperCase() : "";

  return firstInitial + lastInitial;
};

export const formatCompactNumber = (num: number, decimals = 6): string => {
  if (num === 0) return "0";

  const absNum = Math.abs(num);
  const sign = num < 0 ? "-" : "";

  // For very small numbers, show more decimal places
  if (absNum < 0.000001) {
    return `${sign}${absNum.toExponential(2)}`;
  }

  // For small numbers, show appropriate decimal places
  if (absNum < 1) {
    return `${sign}${absNum.toFixed(Math.min(decimals, 8))}`;
  }

  // For numbers less than 1000, show up to 6 decimal places
  if (absNum < 1000) {
    return `${sign}${absNum.toFixed(Math.min(decimals, 6))}`;
  }

  // For larger numbers, use abbreviations
  const units = ["", "K", "M", "B", "T"];
  let unitIndex = 0;
  let value = absNum;

  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex++;
  }

  // Format the abbreviated number
  const formatted =
    value >= 100
      ? value.toFixed(1)
      : value >= 10
      ? value.toFixed(2)
      : value.toFixed(3);

  return `${sign}${formatted}${units[unitIndex]}`;
};
let startY = 0;

export const onTouchStart = (e) => {
  const el = e.currentTarget;

  startY = e.touches[0].clientY;

  const onTouchMove = (moveEvent) => {
    const currentY = moveEvent.touches[0].clientY;
    const deltaY = currentY - startY;

    const scrollTop = el.scrollTop;

    const isPullingDown = deltaY > 10; // significant downward movement
    const isAtTop = scrollTop <= 0;

    if (isPullingDown && isAtTop) {
      moveEvent.preventDefault(); // ⛔ block swipe-down
    }
  };

  el.addEventListener("touchmove", onTouchMove, { passive: false });

  const cleanup = () => {
    el.removeEventListener("touchmove", onTouchMove);
    el.removeEventListener("touchend", cleanup);
    el.removeEventListener("touchcancel", cleanup);
  };

  el.addEventListener("touchend", cleanup);
  el.addEventListener("touchcancel", cleanup);
};
export const generateUUID = (): string =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
export const formatSignedAmount = (value: number | string): string => {
  const num = Number(value);
  return `${num >= 0 ? "+" : ""}${num}`;
};
export const formatToK = (value: number, { withSign = true } = {}): string => {
  const sign = withSign && value > 0 ? "+" : "";
  const absValue = Math.abs(value);

  if (absValue >= 1000000000000) {
    return `${sign}${(absValue / 1000000000000).toFixed(1)}T`; // Trillion
  } else if (absValue >= 1000000000) {
    return `${sign}${(absValue / 1000000000).toFixed(1)}B`; // Billion
  } else if (absValue >= 1000000) {
    return `${sign}${(absValue / 1000000).toFixed(1)}M`; // Million
  } else if (absValue >= 1000) {
    return `${sign}${(absValue / 1000).toFixed(1)}K`; // Thousand
  }

  return `${sign}${absValue}`;
};
export const formatSignedValue = (
  value: number,
  options: { prefix?: string; suffix?: string } = {}
): string => {
  const { prefix = "", suffix = "" } = options;
  const absValue = Math.abs(value);
  const formatted = formatToK(absValue, { withSign: false });
  const sign = value >= 0 ? "+" : "-";
  return `${sign}${prefix}${formatted}${suffix}`;
};
export const getSignClass = (value: number, classes): string => {
  return value >= 0 ? classes.positive : classes.negative;
};
