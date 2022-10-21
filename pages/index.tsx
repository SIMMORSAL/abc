import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { HEADER_HEIGHT } from "../components/Header";
import { getArticle } from "../data/remote/EndpointsArticle";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      w={"100%"}
      h={`calc(100vh - ${HEADER_HEIGHT}px)`}
      bg={"#eaeaea"}
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
