import classes from "./WhyRgg.module.css";
import { Button, Heading, Text } from "@/components/common";
import { Link } from "react-scroll";
import clsx from "clsx";

import OverlappingCards from "./OverlappingCards/OverlappingCards";

const WhyRgg = () => {
  return (
    <section className={clsx(classes.container, "container")} id="why-rgg">
      <OverlappingCards />
      <div className={classes.infoContainer}>
        <Heading xl6 className={classes.heading}>
          Why RGG
        </Heading>
        <Text xl2 capitalize className={classes.info}>
          RGG is your one stop shop for blockchain solutions. We work with
          companies across Web3 and Web2, providing services that help
          businesses grow, launch, and scale. From our Ad System and
          Decentralized Casino to custom development and B2B solutions, we
          connect technology with real business needs. Instead of multiple
          providers, partners work with one ecosystem that understands the
          industry and delivers results.
        </Text>
        <Link
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          to="contact-us"
        >
          <Button>Contact Us</Button>
        </Link>
      </div>
    </section>
  );
};

export default WhyRgg;
