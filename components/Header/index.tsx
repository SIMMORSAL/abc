import React from "react";
import { css } from "@emotion/react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { dHeader, lHeader } from "../../configs/colors";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const HEADER_HEIGHT = 80;

export default function Header() {
  const colorBg = useColorModeValue(lHeader, dHeader);
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <Box bg={colorBg} w={"100%"} borderBottom={"1px solid #9b9b9b"}>
      <Flex
        w={"100%"}
        h={`${HEADER_HEIGHT - 1}px`} // * -1 is for the border
        m={"auto"}
        maxWidth={"1000px"}
        p={"0 16px"}
        direction={"row"}
        align={"center"}
      >
        <Link href={"/"}>
          <Box _hover={{ cursor: "pointer" }}>
            <Logo />
          </Box>
        </Link>
        <motion.div
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: end;
            align-items: center;
          `}
          initial={{
            translateX: 100,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
        >
          <Text
            fontFamily={"monospace"}
            fontSize={"1.2em"}
            _hover={{
              color: "blue.600",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Login
          </Text>
          <IconButton
            aria-label={"toggle-dark"}
            icon={isLight ? <MoonIcon /> : <SunIcon />}
            ml={3}
            onClick={() => toggleColorMode()}
          />
        </motion.div>
      </Flex>
    </Box>
  );
}
