import { Link } from "react-scroll";
import { ReactNode } from "react";

type NavLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  activeClass?: string;
  offset?: number;
  duration?: number;
  onClick?: () => void;
};

const ReactScrollLink = ({
  to,
  children,
  className,
  activeClass,
  offset = -150,
  duration = 500,
  onClick,
}: NavLinkProps) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={duration}
      className={className}
      activeClass={activeClass}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ReactScrollLink;
