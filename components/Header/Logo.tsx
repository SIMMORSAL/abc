import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";
import { dText, lText } from "../../configs/colors";

export default function Logo() {
  const colors = ["#b21451", "#188b9b", "#e38c15"];
  const { colorMode } = useColorMode();
  const [beginAnimation, setBeginAnimation] = useState(false);

  useEffect(() => {
    // Sometimes when immediately animating from beginning of page
    // load, the animation will jump to the end and the transition
    // won't be showing, specially on phones. However waiting a
    // little will get rid of this problem.
    setTimeout(() => {
      setBeginAnimation(true);
    }, 50);
  }, []);

  return (
    <p
      css={css`
        font-weight: bold;
        font-family: monospace;
        font-size: 48px;
        height: fit-content;
        user-select: none;
        opacity: ${beginAnimation ? 1 : 0};
        transform: translateX(${beginAnimation ? 0 : -110}px);

        transition: 800ms ease;
        transition-property: transform, opacity;
      `}
    >
      {["A", "B", "C"].map((value, index) => {
        return (
          <span
            key={value}
            css={css`
              color: ${beginAnimation
                ? colors[index]
                : colorMode === "light"
                ? lText
                : dText};

              transition: color 700ms ease;
              transition-delay: ${1000 + index * 300}ms;
            `}
          >
            {value}
          </span>
        );
      })}
    </p>
  );

  // ! for some reason color transition has no animation. Investigate why

  // const variants = (secondaryColor: string, delay: number) => {
  //   return {
  //     initial: {
  //       color: "black",
  //     },
  //     animate: {
  //       color: secondaryColor,
  //       transition: {
  //         duration: 0.7,
  //         delay: 1 + 0.2 * delay,
  //       },
  //     },
  //   };
  // };
  //
  // const colors = ["#b21451", "#188b9b", "#e38c15"];
  //
  // return (
  //   <motion.p
  //     css={css`
  //       font-weight: bold;
  //       font-family: monospace;
  //       font-size: 48px;
  //       height: fit-content;
  //     `}
  //     initial={{
  //       translateX: -110,
  //       opacity: 0,
  //     }}
  //     animate={{
  //       translateX: 0,
  //       opacity: 1,
  //     }}
  //   >
  //     {["A", "B", "C"].map((value, index) => {
  //       return (
  //         <motion.span
  //           key={value}
  //           variants={variants(colors[index], index)}
  //           initial={"initial"}
  //           animate={"animate"}
  //         >
  //           {value}
  //         </motion.span>
  //       );
  //     })}
  //   </motion.p>
  // );
}
