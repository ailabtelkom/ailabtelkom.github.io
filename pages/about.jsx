import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Divider,
  useColorModeValue,
  useColorMode,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "../components/Link";
import CardAslab from "../components/CardAslab"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import activities from "../data/activities";
import aslab21 from "../data/aslab21";
import aslab20 from "../data/aslab20";
import aslab22 from "../data/aslab22";
import { NextSeo } from "next-seo";
const about = () => {
  const MotionBox = motion(Box)
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.700");
  const itemVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };
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
    <React.Fragment>
      <NextSeo
        title="About"
        description="About Artificial Intelligence Laboratory Telkom University"
      />
      <MotionBox
        initial="start"
        animate="end"
        variants={containerVariant}
        maxW={[null, null, "2xl", "5xl"]}
        m="auto"
        py="50px"
        textAlign="center"
      >
        <Image
          mt="2"
          alt="First Meet AILAB 2020"
          src="/img/firstmeet2020.jpg"
          fallbackSrc="/img/firstmeet2020.jpg?lqip"
        />
        <Box px={{ base: 6, md: 0 }}>
          <Heading mt="2" fontSize={{ base: "2xl", lg: "3xl" }}>
            About Artificial Intelligence Laboratory Telkom University
          </Heading>
          <Text mt="2">
            AI Lab is a research laboratory under Intelligent System research group. We stand in the Informatics
            Faculty at Telkom University. As a research-focused Lab, we held
            several main activities to fulfill our duty, such as Focus Group,
            Study Group, and Workshop. We located at{" "}
            <Link href="https://goo.gl/maps/UUez97ixTdQcv83KA" isExternal>
              Room TULT 0607 Telkom University Landmark Tower
            </Link>
            .
          </Text>
          <Divider mt="2" mb="4" />
          <Heading as="h2" fontSize={{ base: "xl", lg: "2xl" }} mb="4">
            Our activities
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
            {activities.map((data, idx) => (
              <MotionBox
                backgroundColor={bgColor}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                p="2"
                key={idx}
                variants={itemVariant}
                // shadow="md"
                borderWidth="1px"
              >
                <Image
                  alt={data.name}
                  src={data.image}
                  fallbackSrc={data.fallback}
                  loading='lazy'
                  maxH="100px"
                  mx="auto"
                />
                <Heading as="h4" fontSize="lg">
                  {data.name}
                </Heading>
                <Text p="2" textAlign="justify">
                  {data.desc}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
          <Heading
            as="h2"
            fontSize={{ base: "xl", lg: "2xl" }}
            mt="8"
            mb="4"
          >
            Meet The Enigma 2022 Gang 👊😎
          </Heading>
          <CardAslab dataAslab={aslab22} />
        </Box>
        <Box px={{ base: 6, md: 0 }}>
          <Heading
              as="h2"
              fontSize={{ base: "xl", lg: "2xl" }}
              mt="8"
              mb="4"
            >
              Meet The Eliza 2021 Gang 👊😎
            </Heading>
            <CardAslab dataAslab={aslab21} />
        </Box>
        <Box px={{ base: 6, md: 0 }}>
          <Heading
            as="h2"
            fontSize={{ base: "xl", lg: "2xl" }}
            mt="8"
            mb="4"
          >
            Meet The Integer 2020 Gang 👊😎
          </Heading>
          <CardAslab dataAslab={aslab20} />
        </Box>
      </MotionBox>
    </React.Fragment>
  );
};

export default about;
