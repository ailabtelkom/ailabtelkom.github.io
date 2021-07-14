import React from "react";
import { Button, Box, Heading, Text, Image, SimpleGrid, Stack, IconButton, useColorModeValue, AspectRatio, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "./Link";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

const CardAnggota = (props) => {
  let { dataAnggota } = props
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
  const dataAnggotaBaru = dataAnggota.sortBy('nama')
  return (
    <Wrap spacing="2" justify="center" align="stretch">
      {dataAnggotaBaru.map((data, idx) => (
        <WrapItem w={{ base: "45%", md: "31%", lg: "18%" }} >
        <MotionBox
          backgroundColor={bgColor}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          key={idx}
          variants={itemVariant}
          borderWidth="1px"
          h="100%"
          w="100%"
        >
          <AspectRatio ratio={4/6}>
          <Image
            alt={data.nama}
            src={`https://drive.google.com/thumbnail?id=${data.foto_id}`}
            fallbackSrc={`https://drive.google.com/thumbnail?id=${data.foto_id}`}
            fit="cover"
          />
          </AspectRatio>
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
            {data.instagram && data.instagram != "" && (
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
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default CardAnggota;
