import React from "react";
import { css } from "@emotion/react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { HEADER_HEIGHT } from "../Header";

interface Props {
  error: unknown;
  refetch: () => void;
}

export default function Error(p: Props) {
  return (
    <Flex
      id={"error-box"}
      w={"100%"}
      h={`calc(100vh - ${HEADER_HEIGHT}px)`}
      p={"0 16px"}
      gridRow={1}
      gridColumn={1}
      justify={"center"}
      align={"center"}
    >
      <Flex
        direction={"column"}
        w={"100%"}
        h={"200px"}
        p={"24px 16px"}
        maxWidth={"500px"}
        bgGradient={
          "linear(180deg, #ec2e48, #940D0D22 20%, #940D0D22)"
        }
        border={"2px solid #940D0DFF"}
        align={"center"}
        rounded={16}
      >
        <Text
          h={"100%"}
          lineHeight={"100%"}
          textAlign={"center"}
          mt={"10%"}
        >
          {p.error?.toString()}
        </Text>
        <Button
          colorScheme={"red"}
          h={24}
          w={120}
          onClick={() => p.refetch()}
        >
          Try Again
        </Button>
      </Flex>
    </Flex>
  );
}
