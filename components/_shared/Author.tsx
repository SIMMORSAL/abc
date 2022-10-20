import React from "react";
import { css } from "@emotion/react";
import { Text } from "@chakra-ui/react";

interface Props {
  author: string;
}

export default function Author(p: Props) {
  return (
    <Text mb={"32px"} as={"i"}>
      by{" "}
      <Text
        as={"span"}
        color={"aqua"}
        _hover={{ cursor: "pointer" }}
      >
        {p.author}
      </Text>
    </Text>
  );
}
