// import App from 'next/app'
import { Box, ChakraProvider, Stack } from "@chakra-ui/core";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { AnimatePresence } from "framer-motion";

import "nprogress/nprogress.css";
import "../assets/css/style.css";
import Navbar from "../components/Navbar";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function CustomApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Head>
        <title>Artificial Intelligence Laboratory</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Stack minH="100vh" w="full" spacing={0}>
        <Navbar />
        <Box flexGrow={1}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </Box>
      </Stack>
    </ChakraProvider>
  );
}

export default CustomApp;
