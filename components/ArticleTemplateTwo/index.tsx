import React, { useEffect, useState } from "react";
import { ModelArticle } from "../../data/models/ModelArticle";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Category from "../_shared/Category";
import Author from "../_shared/Author";
import ArticleContent from "../ArticleContent";
import Tags from "../_shared/Tags";

interface Props {
  article: ModelArticle;
}

export default function ArticleTemplateTwo(p: Props) {
  const [mainImage, setMainImage] = useState<
    undefined | string
  >();

  useEffect(() => {
    if (p.article && p.article.assets) {
      mainImage === undefined &&
        setMainImage(p.article.assets[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // * The title and first image (main image) are drawn in the
  // * return line, and the rest of the content and assets
  // * are drawn separately.
  return (
    <Box
      bg={"#d8dee3"}
      p={"32px 16px 100px 16px"}
      maxWidth={600}
      m={"auto"}
    >
      <Text as={"title"}>{p.article.title}</Text>
      <Flex direction={"column"}>
        {p.article.category && (
          <Category category={p.article.category} />
        )}
        <Heading w={"100%"} size={"xl"} mb={"2px"}>
          {p.article.title}
        </Heading>
        {mainImage && (
          <Image src={mainImage} alt={mainImage} rounded={16} />
        )}
        {p.article.tags && p.article.tags.length > 0 && (
          <Box mt={"24px"}>
            <Tags tags={p.article.tags} />
          </Box>
        )}
        {p.article.summary && (
          <Heading
            mb={8}
            mt={12}
            size={"sm"}
            textAlign={"center"}
            border={"2px solid #7E868CFF"}
            rounded={"6px"}
            p={"16px 12px"}
            bgGradient={`linear(to-r, #C1C7CC88, #CEDBE7FF)`}
            shadow={"-4px -3px 45px 12px rgba(0,0,0,0.15)"}
          >
            {p.article.summary}
          </Heading>
        )}
        <ArticleContent
          content={p.article.content}
          assets={p.article.assets}
        />
        {p.article.author && (
          <Box mt={"32px"}>
            <Author author={p.article.author} />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
