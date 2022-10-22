import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getArticle } from "../../data/remote/EndpointsArticle";
import { TEMPLATE_ID } from "../../data/models/ModelArticle";
import ArticleTemplateOne from "../ArticleTemplateOne";
import ArticleTemplateTwo from "../ArticleTemplateTwo";
import { MAX_WIDTH } from "../../configs/theme";
import LoadingSpinner from "../_shared/LoadingSpinner";
import { HEADER_HEIGHT } from "../Header";
import { motion } from "framer-motion";
import Error from "./Error";
import { dBg, lBg } from "../../configs/colors";

interface Props {
  id: string;
}

export default function PageArticle(p: Props) {
  const { data, isLoading, isError, refetch, error } = useQuery(
    ["Articles", p.id],
    getArticle
  );

  const colorBg = useColorModeValue(lBg, dBg);

  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    if (!isLoading)
      setTimeout(() => {
        setHideLoading(true);
      }, 800);
    else setHideLoading(false);
  }, [isLoading]);

  return (
    <Box bg={colorBg}>
      <Box display={"grid"}>
        <motion.div
          css={css`
            grid-row: 1;
            grid-column: 1;
            display: flex;
            width: 100%;
            margin: auto;
            max-width: ${MAX_WIDTH};
          `}
          animate={{
            translateY: data ? 0 : 150,
            opacity: data ? 1 : 0,
          }}
        >
          {data !== undefined ? (
            data.template_id === TEMPLATE_ID.one ? (
              <ArticleTemplateOne article={data} />
            ) : (
              <ArticleTemplateTwo article={data} />
            )
          ) : (
            <></>
          )}
        </motion.div>

        {/* * Error */}
        {isError && <Error error={error} refetch={refetch} />}

        {/* * Loading */}
        <Flex
          w={"100%"}
          h={`calc(100vh - ${HEADER_HEIGHT}px)`}
          gridRow={1}
          gridColumn={1}
          justify={"center"}
          align={"center"}
          overflow={"hidden"}
          display={hideLoading ? "none" : "flex"}
          pointerEvents={"none"}
        >
          <motion.div
            animate={{
              scale: isLoading ? 1 : isError ? 0.5 : 2,
              opacity: isLoading ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <LoadingSpinner />
          </motion.div>
        </Flex>
      </Box>
    </Box>
  );
}
