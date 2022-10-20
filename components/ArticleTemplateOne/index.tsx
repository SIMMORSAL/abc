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
  // * Below is where the article content are made. Each content
  // * is paired with an image, and they're drawn.
  const contents = p.article.content;
  const assets = p.article.assets;
  let articleContent: React.ReactNode[] = [];
  let maxListCount = Math.max(
    contents ? contents.length : 0,
    assets ? assets.length : 0
  );
  for (let i = 0; i < maxListCount; i++) {
    if (i !== 0 && assets && assets.length > i) {
      let asset = assets[i];
      articleContent.push(
        // * Video detection needs to be expanded upon after
        // * defining some rules with the backend devs
        asset.includes("youtube.com") ? (
          <Box
            key={asset}
            mt={"32px"}
            w={"100%"}
            rounded={16}
            overflow={"hidden"}
          >
            <ReactPlayer
              width={"100%"}
              url={asset}
              controls={true}
            />
          </Box>
        ) : (
          <Image
            key={asset}
            mt={"32px"}
            rounded={16}
            src={asset}
            alt={asset}
          />
        )
      );
    }
    if (contents && contents.length > i)
      articleContent.push(
        <Text key={contents[i].slice(0, 40)} mt={"32px"}>
          {contents[i]}
        </Text>
      );
  }

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
        {p.article.author && <Author author={p.article.author} />}
        {p.article.summary && (
          <Heading as={"i"} mb={8} size={"md"}>
            {p.article.summary}
          </Heading>
        )}
        {mainImage && (
          <Image src={mainImage} alt={mainImage} rounded={16} />
        )}
        {articleContent}
        {p.article.tags && p.article.tags.length > 0 && (
          <Box mt={"24px"}>
            <Tags tags={p.article.tags} />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
