import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  variant?: any;
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  variant,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      viewport={{ once: false }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
