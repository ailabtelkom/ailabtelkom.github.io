import React from "react";
import { Button, Box, Heading, Text, Image, SimpleGrid, Stack, IconButton, useColorModeValue } from "@chakra-ui/react";
import Link from "./Link";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CardAnggota = (props) => {
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
    <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={4}>
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
            src={`https://drive.google.com/thumbnail?id=${data.foto_id}`}
            fallbackSrc={`https://drive.google.com/thumbnail?id=${data.foto_id}`}
            h="250px"
            fit="cover"
            mx="auto"
          />
          <Heading as="h4" fontSize="lg">
            {data.nama}
          </Heading>
          <Text>Angkatan {data.angkatan_telu}</Text>
          <Stack direction="row" justifyContent="center" my="2">
            {data.linkedin && data.linkedin != "" && (
              <Link href={data.linkedin}>
                <IconButton
                  size="sm"
                  colorScheme="yellow"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                />
              </Link>
            )}
            {data.instagram && (
              <Link href={data.instagram}>
                <IconButton
                  size="sm"
                  colorScheme="yellow"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                />
              </Link>
            )}
          </Stack>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
};

export default CardAnggota;
