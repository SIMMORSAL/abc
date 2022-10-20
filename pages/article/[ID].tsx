import React from "react";
import { css } from "@emotion/react";
import { Box } from "@chakra-ui/react";
import PageArticle from "../../components/PageArticle";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const id = router.query.ID;

  return (
    <Box w={"100%"} h={"100vh"}>
      {typeof id === "string" ? <PageArticle id={id} /> : <></>}
    </Box>
  );
}
