import React from "react";
import { useRouter } from 'next/router'
import { Box, Heading, Image, Divider, Text, Stack, useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure, Center  } from "@chakra-ui/core";
import { motion } from "framer-motion";
import dataLolos from "../data/dataLolos";
import Masuk from "../components/Masuk"

const pengumumanNim = () => {
  const router = useRouter()
  const { nim } = router.query
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
  const data = nim && dataLolos[nim]?dataLolos[nim]:{lolos:'nodata'}  
  return (
    <MotionBox
      initial="start"
      animate="end"
      variants={containerVariant}
      maxW={[null, null, "2xl", "5xl"]}
      m="auto"
      py="50px"
      textAlign="center"
      position="relative"
    >
      <Masuk data={data} nim={nim}/>
    </MotionBox>
  );
};

export default pengumumanNim;
