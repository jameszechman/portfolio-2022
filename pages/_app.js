import { ChakraProvider } from "@chakra-ui/react";
import theme from "@styles/index";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import Layout from "../components/layout";
import Script from "next/script";

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
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-5PHM3QTS21'
      />
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5PHM3QTS21');
        `}
      </Script>
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
