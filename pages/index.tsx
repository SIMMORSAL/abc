import { Button, Flex, useColorModeValue, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { HEADER_HEIGHT } from "../components/Header";
import { dBg, lBg } from "../configs/colors";

const Home: NextPage = () => {
  const colorBg = useColorModeValue(lBg, dBg);

  return (
    <Flex
      align={"center"}
      justify={"center"}
      w={"100%"}
      h={`calc(100vh - ${HEADER_HEIGHT}px)`}
      bg={colorBg}
    >
      <VStack>
        <Link href={"/article/1"} passHref={true}>
          <Button>First Type of UI</Button>
        </Link>
        <Link href={"/article/2"} passHref={true}>
          <Button>Second Type of UI</Button>
        </Link>
      </VStack>
    </Flex>
  );
};

export default Home;
