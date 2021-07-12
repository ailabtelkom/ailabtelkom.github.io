import React from "react";
import { Button, Box, Heading, Text, Image, SimpleGrid, Stack, IconButton, useColorModeValue } from "@chakra-ui/react";
import Link from "../components/Link";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CardAslab = (props) => {
  const { dataAslab } = props
  const MotionBox = motion(Box)
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
    <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={4}>
      {dataAslab.map((data, idx) => (
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
  );
};

export default CardAslab;
