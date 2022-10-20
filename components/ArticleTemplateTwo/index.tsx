import React from "react";
import { css } from "@emotion/react";
import { ModelArticle } from "../../data/models/ModelArticle";
import { Heading, VStack } from "@chakra-ui/react";

interface Props {
  article: ModelArticle;
}

export default function ArticleTemplateTwo(p: Props) {
  return (
    <VStack>
      <Heading color={"blue"}>{p.article.title}</Heading>
    </VStack>
  );
}
