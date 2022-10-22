import React from "react";
import { css } from "@emotion/react";
import { Box, Image, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";

interface Props {
  content?: string[];
  assets?: string[];
}

export default function ArticleContent({ content, assets }: Props) {
  // * Below is where the article content are made. Each content
  // * is paired with an image or video asset.
  let articleContent: React.ReactNode[] = [];
  let maxListCount = Math.max(
    content ? content.length : 0,
    assets ? assets.length : 0
  );
  for (let i = 0; i < maxListCount; i++) {
    if (i !== 0 && assets && assets.length > i) {
      let asset = assets[i];
      articleContent.push(
        // * Video detection needs to be expanded upon after
        // * defining some rules with the backend devs
        asset.includes("youtube.com") ? (
          <Box key={asset} mt={"32px"} w={"100%"} rounded={16} overflow={"hidden"}>
            <ReactPlayer width={"100%"} url={asset} controls={true} />
          </Box>
        ) : (
          <Image key={asset} mt={"32px"} rounded={16} src={asset} alt={asset} />
        )
      );
    }
    if (content && content.length > i)
      articleContent.push(
        <Text key={content[i].slice(0, 40)} mt={"32px"}>
          {content[i]}
        </Text>
      );
  }
  return <>{articleContent}</>;
}
