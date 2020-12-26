import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/core";
import Link from "../components/Link";
import data from "../data/research";
import { NextSeo } from "next-seo";
const research = () => {
  const MotionBox = motion.custom(Box);
  const containerVariant = {
    start: {
      y: 20,
      opacity: 0,
      transition: { staggerChildren: 0.25 },
    },
    end: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };
  return (
    <MotionBox
      initial="start"
      animate="end"
      variants={containerVariant}
      maxW={[null, null, "2xl", "5xl"]}
      m="auto"
      py="50px"
    >
      <Box px={{ default: 6, md: 0 }}>
        <NextSeo title="Research" description="Past resesearch by our member" />
        <Heading mt="2" fontSize={{ default: "2xl", lg: "3xl" }}>
          Research
        </Heading>
        <Text>Past resesearch by our member</Text>
        <Box overflow="auto" mt="6">
          <Box w="full" overflow="auto">
            <Box as="table" width="full" textAlign="left">
              <Box as="thead" fontWeight="bold">
                <Box as="tr">
                  <Box
                    as="th"
                    borderWidth={1}
                    p={2}
                    width={{ base: "100vw", lg: "50%" }}
                  >
                    Title
                  </Box>
                  <Box as="th" borderWidth={1} p={2}>
                    Author
                  </Box>
                  <Box as="th" borderWidth={1} p={2}>
                    Year
                  </Box>
                  <Box as="th" borderWidth={1} p={2}>
                    Publisher
                  </Box>
                </Box>
              </Box>
              <Box as="tbody">
                {data.map((data, idx) => {
                  return (
                    <Box as="tr" key={idx}>
                      <Box as="td" borderWidth={1} p={2}>
                        <Link isExternal href={data.url}>
                          {data.title}
                        </Link>
                      </Box>
                      <Box as="td" borderWidth={1} p={2}>
                        {data.author}
                      </Box>
                      <Box as="td" borderWidth={1} p={2}>
                        {data.year}
                      </Box>
                      <Box as="td" borderWidth={1} p={2}>
                        {data.publisher}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default research;
