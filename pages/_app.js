import { ChakraProvider } from "@chakra-ui/react";
import theme from "@styles/index";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import Layout from "./_layout";

const queryClient = new QueryClient();

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>James Zechman | Home</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default Portfolio;
