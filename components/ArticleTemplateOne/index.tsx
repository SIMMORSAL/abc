import React, { useEffect, useState } from "react";
import { ModelArticle } from "../../data/models/ModelArticle";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Author from "../_shared/Author";
import ReactPlayer from "react-player";
import Category from "../_shared/Category";
import Tags from "../_shared/Tags";
import ArticleContent from "../ArticleContent";

interface Props {
  article: ModelArticle;
}

export default function ArticleTemplateOne(p: Props) {
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
    <Box bg={"#eeeeee"} p={"32px 16px 100px 16px"}>
      <Text as={"title"}>{p.article.title}</Text>
      <Flex direction={"column"}>
        {p.article.category && (
          <Category category={p.article.category} />
        )}
        <Heading w={"100%"} size={"xl"} mb={"2px"}>
          {p.article.title}
        </Heading>
        {p.article.author && (
          <Box mb={"32px"}>
            <Author author={p.article.author} />
          </Box>
        )}
        {p.article.summary && (
          <Heading as={"i"} mb={8} size={"md"}>
            {p.article.summary}
          </Heading>
        )}
        {mainImage && (
          <Image src={mainImage} alt={mainImage} rounded={16} />
        )}
        <ArticleContent
          content={p.article.content}
          assets={p.article.assets}
        />
        {p.article.tags && p.article.tags.length > 0 && (
          <Box mt={"24px"}>
            <Tags tags={p.article.tags} />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
