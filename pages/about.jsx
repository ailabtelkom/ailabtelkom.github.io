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
} from "@chakra-ui/core";
import { motion } from "framer-motion";
import Link from "../components/Link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import activities from "../data/activities";
import aslab21 from "../data/aslab21";
import aslab20 from "../data/aslab20";
import { NextSeo } from "next-seo";
const about = () => {
  const MotionBox = motion.custom(Box);
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
          src={require("../images/firstmeet2020.jpg")}
          fallbackSrc={require("../images/firstmeet2020.jpg?lqip")}
        />
        <Box px={{ default: 6, md: 0 }}>
          <Heading mt="2" fontSize={{ default: "2xl", lg: "3xl" }}>
            About Artificial Intelligence Laboratory Telkom University
          </Heading>
          <Text mt="2">
            AI Lab is a research laboratory under the Intelligence, Computing
            and Multimedia (ICM) research group. We stand in the Informatics
            Faculty at Telkom University. As a research-focused Lab, we held
            several main activities to fulfill our duty, such as Focus Group,
            Study Group, and Workshop. We located at{" "}
            <Link href="https://goo.gl/maps/JkPuorDbXQPJktyy8" isExternal>
              North Kultubai Building room E107 Telkom University
            </Link>
            .
          </Text>
          <Divider mt="2" mb="4" />
          <Heading as="h2" fontSize={{ default: "xl", lg: "2xl" }} mb="4">
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
            fontSize={{ default: "xl", lg: "2xl" }}
            mt="8"
            mb="4"
          >
            Meet The Eliza 2021 Gang 👊😎
          </Heading>
          <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={4}>
            {aslab21.map((data, idx) => (
              <MotionBox
                backgroundColor={bgColor}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={idx}
                variants={itemVariant}
                borderWidth="1px"
              >
                <Image
                  alt={data.name}
                  src={data.image}
                  fallbackSrc={data.fallback}
                  maxH="300px"
                  mx="auto"
                />
                <Heading as="h4" fontSize="lg">
                  {data.name}
                </Heading>
                <Text>{data.position}</Text>
                <Stack direction="row" justifyContent="center" my="2">
                  {data.social.linkedin && (
                    <Link href={data.social.linkedin}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin />}
                      />
                    </Link>
                  )}
                  {data.social.github && (
                    <Link href={data.social.github}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="Github"
                        icon={<FaGithub />}
                      />
                    </Link>
                  )}
                  {data.social.instagram && (
                    <Link href={data.social.instagram}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="Instagram"
                        icon={<FaInstagram />}
                      />
                    </Link>
                  )}
                  {data.social.email && (
                    <Link href={data.social.email}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="Email"
                        icon={<MdEmail />}
                      />
                    </Link>
                  )}
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
        <Box px={{ default: 6, md: 0 }}>
          <Heading
            as="h2"
            fontSize={{ default: "xl", lg: "2xl" }}
            mt="8"
            mb="4"
          >
            Meet The Integer 2020 Gang 👊😎
          </Heading>
          <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={4}>
            {aslab20.map((data, idx) => (
              <MotionBox
                backgroundColor={bgColor}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={idx}
                variants={itemVariant}
                borderWidth="1px"
              >
                <Image
                  alt={data.name}
                  src={data.image}
                  maxH="300px"
                  mx="auto"
                />
                <Heading as="h4" fontSize="lg">
                  {data.name}
                </Heading>
                <Text>{data.position}</Text>
                <Stack direction="row" justifyContent="center" my="2">
                  {data.social.linkedin && (
                    <Link href={data.social.linkedin}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin />}
                      />
                    </Link>
                  )}
                  {data.social.github && (
                    <Link href={data.social.github}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="Github"
                        icon={<FaGithub />}
                      />
                    </Link>
                  )}
                  {data.social.instagram && (
                    <Link href={data.social.instagram}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="Instagram"
                        icon={<FaInstagram />}
                      />
                    </Link>
                  )}
                  {data.social.email && (
                    <Link href={data.social.email}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="Email"
                        icon={<MdEmail />}
                      />
                    </Link>
                  )}
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </MotionBox>
    </React.Fragment>
  );
};

export default about;
