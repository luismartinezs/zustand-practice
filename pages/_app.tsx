import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "@/src/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
