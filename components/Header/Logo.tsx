import React from "react";
import { css } from "@emotion/react";
import { Heading, Text } from "@chakra-ui/react";

interface Props {}

export default function Logo(p: Props) {
  return (
    <Heading size={"2xl"} userSelect={"none"}>
      <Text as={"span"} color={"#b21451"}>
        A
      </Text>
      <Text as={"span"} color={"#188b9b"}>
        B
      </Text>
      <Text as={"span"} color={"#e38c15"}>
        C
      </Text>
    </Heading>
  );
}
