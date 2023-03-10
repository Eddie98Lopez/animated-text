import React from "react";
import { StyledAnimatedText, StyledChar } from "./AnimatedText.styles";

const AnimatedText = (props) => {
  const { input, duration, delay } = props;

  const string = input.split("");

  return (
    <StyledAnimatedText>
      {string.map((char, i) => (
        <StyledChar
          key={i}
          delay={delay}
          duration={((i + 1) / string.length) * duration}
        >
          {char}
        </StyledChar>
      ))}
    </StyledAnimatedText>
  );
};

export default AnimatedText;
