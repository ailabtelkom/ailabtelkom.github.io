import React from "react";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/core";
const Jumbotron = () => {
  return (
    <Box
      h="100vh"
      boxShadow="inset 0px -100px 100px -100px rgba(0,0,0,0.5);"
      backgroundImage="url('/img/bg.png')"
      backgroundRepeat="repeat"
    >
      <Stack
        h="full"
        alignItems="center"
        justifyContent={{ base: "center", lg: "unset" }}
        direction={{ base: "column", lg: "row" }}
        m="auto"
        maxW={[null, null, "2xl", "5xl"]}
      >
        <Box p="6">
          <Image
            shadow="lg"
            rounded="full"
            src="/img/logo-lg.png"
            w={{ base: "200px", lg: "2xl" }}
            alt="Artificial Intelligence logo"
          />
        </Box>
        <Box p="2" textAlign={{ base: "center", lg: "unset" }}>
          <Heading>Artificial Intelligence Laboratory </Heading>

          <Text>
            AI Lab is a research laboratory under the Intelligence, Computing
            and Multimedia (ICM) research group. We stand in the Informatics
            Faculty at Telkom University. As a research-focused Lab, we held
            several main activities to fulfill our duty, such as Focus Group,
            Study Group, and Workshop.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Jumbotron;
