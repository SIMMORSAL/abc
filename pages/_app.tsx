import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { theme } from "../data/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
