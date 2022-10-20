import React from "react";
import { css } from "@emotion/react";
import { Text } from "@chakra-ui/react";

interface Props {
  author: string;
}

export default function Author(p: Props) {
  return (
    <Text as={"i"}>
      by{" "}
      <Text
        as={"span"}
        color={"blue.600"}
        _hover={{
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {p.author}
      </Text>
    </Text>
  );
}
