import React from "react";
import { HStack, Text } from "@chakra-ui/react";

interface Props {
  tags: string[];
}

export default function Tags(p: Props) {
  return (
    <HStack spacing={2} userSelect={"none"}>
      {p.tags.map((value) => {
        return (
          <Text
            key={value}
            color={"white"}
            bg={"green.500"}
            p={"4px 8px"}
            rounded={100}
            _hover={{
              backgroundColor: "green.600",
              cursor: "pointer",
            }}
          >
            {value}
          </Text>
        );
      })}
    </HStack>
  );
}
