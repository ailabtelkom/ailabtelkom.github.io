import React from "react";
import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/core";
import { motion } from "framer-motion";

const ActivitiesCard = ({ data, idx }) => {
  const MotionBox = motion.custom(Box);
  const bgColor = useColorModeValue("white", "gray.700");
  const itemVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };
  return (
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
      <Image alt={data.name} src={data.image} maxH="100px" mx="auto" />
      <Heading as="h4" fontSize="lg">
        {data.name}
      </Heading>
      <Text p="2" textAlign="justify">
        {data.desc}
      </Text>
    </MotionBox>
  );
};

export default ActivitiesCard;
