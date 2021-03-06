import React from "react";
import { Box, Button, Heading, Image, Text, Collapse, Stack, Skeleton, useColorModeValue, useColorMode } from "@chakra-ui/core";
import { motion } from "framer-motion";

const ColapseDoc = () => {
  const [showSG, setShowSG] = React.useState(true);
  const [showFG, setShowFG] = React.useState(false);
  const [showSkelton, setShowSkelton] = React.useState(false);
  return (
    <Box mt="4">
      <Box>
        <Button mx="2" size="lg" h={{ base: "100px", md: "150px" }} onClick={() => {setShowSG(true); setShowFG(false)}}>
          <Stack>
            <Image
              alt="Study Group"
              src="/assets/images/logo_sg.png"
              loading='lazy'
              maxH={{ base: "60px", md: "100px" }}
              mx="auto"
            />
            <Text >
              Study Group
            </Text>
          </Stack>
        </Button>
        <Button mx="2" size="lg" h={{ base: "100px", md: "150px" }} onClick={() => {setShowSG(false); setShowFG(true)}}>
          <Stack>
            <Image
              alt="Focus Group"
              src="/assets/images/logo_fg.png"
              loading='lazy'
              maxH={{ base: "60px", md: "100px" }}
              mx="auto"
            />
            <Text >
              Focus Group
            </Text>
          </Stack>
        </Button>
      </Box>
      <Collapse mt={4} isOpen={showSG}>
        <Box>
          <Heading>
            Study Group
          </Heading>
          <Skeleton isLoaded={showSkelton}>
            <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
              <iframe
                // src="https://drive.google.com/file/d/1xZcqU14U9j361ngTp_mz9lG2qcc3Nkvg/preview"
                src="https://drive.google.com/file/d/1xZFeHC-q_DjNgB3Jn9bG0TQCm6sWOBbF/preview"
                width="100%"
                height="100%"
                onLoad={()=>setShowSkelton(true)}
              >Loading…</iframe>
            </Box>
          </Skeleton>
          <Heading as="h2" fontSize={{ default: "xl", lg: "2xl" }} mb="2" mt="4">
            Let's Join With Us
          </Heading>
          <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdBnQhv9H1BKDzIpAMY1ZNt6Nh3WHcZPIt_n6Sitj-5bef-vw/viewform?embedded=true"
              width="100%"
              height="100%"
            >Loading…</iframe>
          </Box>
        </Box>
      </Collapse>
      <Collapse mt={4} isOpen={showFG}>
        <Box>
          <Heading>
            Focus Group
          </Heading>
          <Skeleton isLoaded={showSkelton}>
            <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
              <iframe
                // src="https://drive.google.com/file/d/1xZcqU14U9j361ngTp_mz9lG2qcc3Nkvg/preview"
                src="https://drive.google.com/file/d/1AMhmJDJgAFgZ1dWjKkPsvJaX_-CNeiDJ/preview"
                width="100%"
                height="100%"
                onLoad={()=>setShowSkelton(true)}
              >Loading…</iframe>
            </Box>
          </Skeleton>
          <Heading as="h2" fontSize={{ default: "xl", lg: "2xl" }} mb="2" mt="4">
            Let's Join With Us
          </Heading>
          <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeRzvWNn9vI77m4KqlQjDJ-uhKYTaRQrFwR1wvrXX1xlxi_tw/viewform?embedded=true"
              width="100%"
              height="100%"
            >Loading…</iframe>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ColapseDoc;
