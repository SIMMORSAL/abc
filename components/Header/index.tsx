import React from "react";
import { css } from "@emotion/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";

export const HEADER_HEIGHT = 80;

export default function Header() {
  return (
    <Box
      bg={"#d3d3d3"}
      w={"100%"}
      borderBottom={"1px solid #9b9b9b"}
    >
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
        <Flex
          w={"100%"}
          h={"100%"}
          direction={"row"}
          justify={"end"}
          align={"center"}
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
        </Flex>
      </Flex>
    </Box>
  );
}
