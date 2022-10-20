import React from "react";
import { css } from "@emotion/react";
import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getArticle } from "../../data/remote/EndpointsArticle";
import { TEMPLATE_ID } from "../../data/models/ModelArticle";
import ArticleTemplateOne from "../ArticleTemplateOne";
import ArticleTemplateTwo from "../ArticleTemplateTwo";
import { MAX_WIDTH } from "../../data/theme";

interface Props {
  id: string;
}

export default function PageArticle(p: Props) {
  // TODO finish isLoading and isError implementation
  const { data, isLoading, isError } = useQuery(
    ["Articles", p.id],
    getArticle
  );

  return (
    <Box bg={"#eaeaea"}>
      <Box w={"100%"} maxWidth={MAX_WIDTH} m={"auto"}>
        {data !== undefined ? (
          data.template_id === TEMPLATE_ID.one ? (
            <ArticleTemplateOne article={data} />
          ) : (
            <ArticleTemplateTwo article={data} />
          )
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
