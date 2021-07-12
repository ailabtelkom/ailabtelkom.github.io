import React from "react";
import { Box, Heading, Input, Center, Button, useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure  } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FormSoal from "../../components/FormSoal"


const openRecruitment = () => {
  const MotionBox = motion(Box)
  const bgColor = useColorModeValue("white", "gray.700");
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
  const itemVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };
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
      <Heading>
        Silahkan Mengisi Data Dibawah Terlebih Dahulu
      </Heading>
      <FormSoal/>
    </MotionBox>
  );
};

export default openRecruitment;
