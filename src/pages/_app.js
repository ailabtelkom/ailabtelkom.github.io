// import App from 'next/app'
import { Box, ChakraProvider, Stack } from "@chakra-ui/core";
import Router from "next/router";
import NProgress from "nprogress";
import { AnimatePresence } from "framer-motion";

import "nprogress/nprogress.css";
import "../assets/css/style.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function CustomApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Stack minH="100vh">
        <Box flexGrow={1}>
          <Component {...pageProps} />
        </Box>
      </Stack>
    </ChakraProvider>
  );
}

export default CustomApp;
