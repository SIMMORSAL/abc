import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../configs/theme";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <VStack spacing={0}>
          <Header />
          <Component {...pageProps} />
        </VStack>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
