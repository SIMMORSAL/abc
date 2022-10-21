import React from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

export default function Logo() {
  // ! for some reason color transition has no animation. Investigate why
  const variants = (secondaryColor: string, delay: number) => {
    return {
      initial: {
        color: "black",
      },
      animate: {
        color: secondaryColor,
        transition: {
          duration: 0.7,
          delay: 1 + 0.2 * delay,
        },
      },
    };
  };

  const colors = ["#b21451", "#188b9b", "#e38c15"];

  return (
    <motion.p
      css={css`
        font-weight: bold;
        font-family: monospace;
        font-size: 48px;
        height: fit-content;
      `}
      initial={{
        translateX: -110,
        opacity: 0,
      }}
      animate={{
        translateX: 0,
        opacity: 1,
      }}
    >
      {["A", "B", "C"].map((value, index) => {
        return (
          <motion.span
            key={value}
            variants={variants(colors[index], index)}
            initial={"initial"}
            animate={"animate"}
          >
            {value}
          </motion.span>
        );
      })}
    </motion.p>
  );
}
