import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { getArticle } from "../data/remote/EndpointsArticle";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data, status } = useQuery(["Articles", 1], getArticle);
  console.log(`11111  Home:  ${data?.title}`);

  return (
    <Flex align={"center"} justify={"center"} h={"100vh"}>
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
