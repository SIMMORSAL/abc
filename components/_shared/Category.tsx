import React from "react";
import { css } from "@emotion/react";
import { HStack, Text } from "@chakra-ui/react";

interface Props {
  category: string;
}

export default function Category(p: Props) {
  const clickableText = (text: string) => (
    <Text
      color={"gray"}
      _hover={{
        cursor: "pointer",
        color: "blue.500",
      }}
    >
      {text}
    </Text>
  );
  return (
    <HStack spacing={2} mb={"48px"} userSelect={"none"}>
      {clickableText("Articles")}
      <Text color={"gray"} userSelect={"none"}>
        {" "}
        {">"}{" "}
      </Text>
      {clickableText(p.category)}
    </HStack>
  );
}
