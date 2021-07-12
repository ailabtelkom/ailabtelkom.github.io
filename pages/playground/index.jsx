import {
  Box,
  Stack,
  Heading,
  Text,
  Grid,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import React from "react";
import { FaArrowRight, FaBook } from "react-icons/fa";
import playgrounds from "../../data/playground";

const index = () => {
  const MotionBox = motion(Box)
  const containerVariant = {
    start: {
      y: 20,
      opacity: 0,
      transition: { staggerChildren: 0.2 },
    },
    end: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };
  const itemVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };

  return (
    <React.Fragment>
      <NextSeo
        title="Playground"
        description={`Hey, are you curious about "What AI Looks like" IRL?
We have something for you to play with 😁`}
      />

      <MotionBox
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        initial="start"
        animate="end"
        exit="exit"
        variants={containerVariant}
        transition={{ delay: 0.1 }}
        maxW={[null, null, "2xl", "5xl"]}
        m="auto"
        my="40px"
        px={{ base: 6, md: 0 }}
      >
        <Stack pt={{ base: "1em", lg: "2em"  }}>
          <Heading fontSize={{ base: "xl", lg: "3xl" }}>
            Hey, are you curious about "What AI Looks like" IRL?
          </Heading>
          <Text mb="6">We have something for you to play with 😁</Text>
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
            {playgrounds.map((data, index) => {
              return (
                <MotionBox key={index} variants={itemVariant} borderWidth="1px" w="100%">
                  <Link isExternal={data.isExternal} href={data.url}>
                    <Image
                      width="100%"
                      height="200px"
                      fit="center"
                      src={data.image}
                      fallbackSrc={data.fallbackImg}
                      alt={data.name}
                    />
                  </Link>
                  <Box p={2}>
                    <Link
                      isExternal={data.isExternal}
                      href={data.url}
                      fontWeight="bold"
                      fontSize={20}
                      mt={2}
                    >
                      {data.name}
                    </Link>
                    <Text>{data.desc}</Text>
                    <Stack mt={4} direction="row">
                      <Button
                        as={Link}
                        href={data.url}
                        colorScheme="yellow"
                        size="sm"
                        leftIcon={<FaArrowRight />}
                      >
                        Visit
                      </Button>
                      {data.detail && (
                        <Button
                          as={Link}
                          href={data.detail}
                          size="sm"
                          leftIcon={<FaBook />}
                        >
                          Details
                        </Button>
                      )}
                    </Stack>
                  </Box>
                </MotionBox>
              );
            })}
          </Grid>
        </Stack>
      </MotionBox>
    </React.Fragment>
  );
};

export default index;
