import React from "react";
import Heading from "../Heading/Heading";
import classes from "./Benefits.module.css";
import Text from "../Text/Text";
import Box from "../Box/Box";

interface BenefitsProps {
  title: string;
  list: string[];
}

const Benefits: React.FC<BenefitsProps> = ({ title, list }) => {
  return (
    <div className={classes.wrapper}>
      <Heading xl5 textCenter>
        {title}
      </Heading>

      {list?.map((el, i) => (
        <Box className={classes.list} key={i}>
          <Text xxl textCenter>
            {el}
          </Text>
        </Box>
      ))}
    </div>
  );
};

export default Benefits;
