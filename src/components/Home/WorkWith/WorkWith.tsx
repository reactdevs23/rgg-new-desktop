import React from "react";
import { Button, Text } from "@/components/common";
import classes from "./WorkWith.module.css";
import Marquee from "react-fast-marquee";

interface WorkWithProps {
  partners?: string[];
}

const WorkWith: React.FC<WorkWithProps> = ({ partners = [] }) => {
  return (
    <div className={classes.wrapper} id="work-with-rgg">
      <Text textCenter xl2>
        Who we work with
      </Text>
      <div className={classes.partners}>
        {partners?.map((partner, i) => (
          <div className={classes.logoContainer} key={i}>
            <Button>{partner}</Button>
          </div>
        ))}
      </div>

      <div className={classes.forMobile}>
        <Marquee autoFill={true} speed={30} pauseOnHover={true}>
          <div className={classes.partners}>
            {partners?.map((partner, i) => (
              <div className={classes.logoContainer} key={i}>
                <Button>{partner}</Button>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default WorkWith;
