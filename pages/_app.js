// import App from 'next/app'
import { Box, ChakraProvider, Stack, useColorModeValue } from "@chakra-ui/core";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { AnimatePresence } from "framer-motion";

import "nprogress/nprogress.css";
import "../assets/css/style.css";
import Navbar from "../components/Navbar";
import siteConfig from "../data/siteConfig";
import { DefaultSeo } from "next-seo";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function CustomApp({ Component, pageProps, router }) {
  const color = useColorModeValue("yellow", "red");
  return (
    <ChakraProvider resetCSS>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <DefaultSeo
        description={siteConfig.desc}
        title="Welcome"
        titleTemplate={`%s · ${siteConfig.title}`}
        canonical={siteConfig.url + (router.asPath || "")}
        openGraph={{
          title: siteConfig.title,
          description: siteConfig.desc,
          type: "website",
          site_name: siteConfig.title,
          images: [
            {
              url: `${siteConfig.url}/img/og.jpg`,
              width: 1024,
              height: 512,
              alt: siteConfig.title,
            },
          ],
        }}
      />
      <Stack minH="100vh" w="full" spacing={0}>
        <Navbar />
        <Box flexGrow={1} _selection={{ color }}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </Box>
      </Stack>
    </ChakraProvider>
  );
}

export default CustomApp;
