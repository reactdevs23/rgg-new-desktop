// animations.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 150 },
  show: { opacity: 1, y: 0 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export const bounceUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
};
