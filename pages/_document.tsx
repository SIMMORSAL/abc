import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { theme } from "../configs/theme";

export default function Document() {
  return (
    <React.StrictMode>
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    </React.StrictMode>
  );
}
