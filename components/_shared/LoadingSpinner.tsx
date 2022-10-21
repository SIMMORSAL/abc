import React from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <motion.div
      css={css`
        background-color: blue;
        width: 60px;
        height: 60px;
      `}
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
      }}
    />
  );
}
