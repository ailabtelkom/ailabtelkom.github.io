import React from "react";
import style from "./Jumbotron.module.scss";
import {
  Box,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/core";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLine, FaMedium } from "react-icons/fa";
const Jumbotron = (props) => {
  const MotionStack = motion.custom(Stack);
  const MotionLink = motion.custom(Link);
  const links = [
    {
      name: "instagram",
      url: "https://instagram.com/ailabtelkom",
      icon: <FaInstagram />,
    },
    {
      name: "github",
      url: "https://github.com/ailabtelkom",
      icon: <FaGithub />,
    },
    {
      name: "line",
      url: "http://line.me/ti/p/~jhf7225t",
      icon: <FaLine />,
    },
    {
      name: "medium",
      url: "https://medium.com/ailab-telu",
      icon: <FaMedium />,
    },
  ];
  const containerVariant = {
    start: {
      y: 30,
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

  const linkVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };
  return (
    <Box h="100vh" className={style.bgAnimation} {...props}>
      <MotionStack
        initial="start"
        animate="end"
        exit="exit"
        variants={containerVariant}
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
            src="img/logo-lg.png"
            fallbackSrc="https://raw.githubusercontent.com/ailabtelkom/ailabtelkom.github.io/master/public/img/logo-lg.png"
            w={{ base: "200px", lg: "xl" }}
            alt="Artificial Intelligence logo"
          />
        </Box>
        <Box p="2" textAlign={{ base: "center", lg: "unset" }}>
          <Heading>Artificial Intelligence Laboratory </Heading>
          <Text>
            AI Lab is a research laboratory under the Intelligence, Computing
            and Multimedia (ICM) research group. We stand in the Informatics
            Faculty at Telkom University.
          </Text>
          <Stack
            direction="row"
            mt={4}
            justifyContent={{ default: "center", lg: "unset" }}
          >
            {links.map((item, idx) => {
              return (
                <MotionLink variants={linkVariant} href={item.url} isExternal>
                  <IconButton
                    colorScheme="yellow"
                    aria-label={item.name}
                    icon={item.icon}
                  />
                </MotionLink>
              );
            })}
          </Stack>
        </Box>
      </MotionStack>
    </Box>
  );
};

export default Jumbotron;
