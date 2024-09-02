import React from "react";
import { Box, Button, Heading, Image, Text, Collapse, Stack, Skeleton, Table, Thead, Tbody, Tr, Th, Td, SimpleGrid } from "@chakra-ui/react";
// import { motion } from "framer-motion";

const ColapseDoc = () => {
  const [showSG, setShowSG] = React.useState(true);
  const [showFG, setShowFG] = React.useState(false);
  const [showSkelton, setShowSkelton] = React.useState(false);
  const dataNIM = [
  "103052330011", "103012300018", "103052300112", "103012300100", "103012330009", "103032300013", "101012300025", "103012300313", 
  "103052300054", "103052300026", "6706223155", "103052300066", "103012300394", "103012300096", "103012330023", "103012300116", 
  "103012300483", "103012300198", "103012300176", "103022300057", "103052300084", "10312300105", "103052300008", "103012300245", 
  "103012330330", "103012330104", "103052300003", "103012300309", "103012300464", "103012300025", "103012300397", "103012300249", 
  "1101223268", "103012300328", "103012300487", "103052330034", "103032330147", "103012300094", "103052300082", "103052300024", 
  "103012300306", "103022330068", "103012300463", "103012300012", "103032330103", "103012330298", "103012300037", "103012300480", 
  "103012330401", "103012300166", "103012300316", "103012300453", "103012300371", "103012330370", "103042310059", "7708223080", 
  "103022300097", "103052300111"];
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
      <Collapse mt={4} in={showSG} animateOpacity>
        <Box>
          <Heading>
            Study Group
          </Heading>
          <Skeleton isLoaded={showSkelton}>
            <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
              <iframe
                // 2021
                // src="https://drive.google.com/file/d/1xZcqU14U9j361ngTp_mz9lG2qcc3Nkvg/preview"
                // 2022
                // src="https://drive.google.com/file/d/1xZFeHC-q_DjNgB3Jn9bG0TQCm6sWOBbF/preview"
                // 2023
                // src="https://docs.google.com/document/d/1YEapkWn2Olm7l-yMXaUirnS9ZQIRPJD-/preview"
                // 2024
                src = "https://docs.google.com/document/d/1ySWKzz-FA5xcDXEstyJwK9xB_emXigfxOEERBSHMWVc/preview"
                width="100%"
                height="100%"
                onLoad={ () => setShowSkelton(true) }
              >Loading…</iframe>
            </Box>
          </Skeleton>
          <Heading as="h2" fontSize={{ base: "xl", lg: "2xl" }} mb="2" mt="4">
            Daftar Lolos Seleksi Berkas Study Group 2024
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} mt="2">
            Mohon isi jadwal wawancara disini: 
            <a href="https://docs.google.com/spreadsheets/d/1rcVcbJ1HKh6IOS9BSYbMNOqIvSPk3MIsbNWH64rGccA/edit?usp=sharing"
              style={{ color: "#3182CE", textDecoration: "underline" }}>
              Link Wawancara
            </a>
          </Text>
          <Skeleton isLoaded={showSkelton}>
            <Box mt={8} overflowX="auto">
              
              <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={4}>
                {dataNIM.map((nim, index) => (
                  <Box
                    key={index}
                    p={4}
                    borderWidth={1}
                    borderRadius="md"
                    bg={index % 2 === 0 ? "#EAB533" : "white"}
                  >
                    {nim}
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Skeleton>
{/*           <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
            <iframe
              // src="https://forms.office.com/r/Nc8d1ftUw9"
              // 2024
              src = "https://forms.office.com/r/4vHky2PQQv"
              width="100%"
              height="100%"
            >Loading…</iframe>
          </Box> */}
        </Box>
      </Collapse>
      <Collapse mt={4} in={showFG} animateOpacity>
        <Box>
          <Heading>
            Focus Group
          </Heading>
          <Skeleton isLoaded={showSkelton}>
            <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
              <iframe
                // 2021
                // src="https://drive.google.com/file/d/1xZcqU14U9j361ngTp_mz9lG2qcc3Nkvg/preview"
                // 2022
                // src="https://drive.google.com/file/d/1AMhmJDJgAFgZ1dWjKkPsvJaX_-CNeiDJ/preview"
                // 2023
                // src="https://docs.google.com/document/d/1FeGvHJL9gBVFMpEj-f3jqRtGLSPw6jC7/preview"
                // 2024
                src = "https://docs.google.com/document/d/16hz1bPnxWkgzeyj_XS5ku1cOxpcDcsMP/preview"
                width="100%"
                height="100%"
                onLoad={()=>setShowSkelton(true)}
              >Loading…</iframe>
            </Box>
          </Skeleton>
          <Heading as="h2" fontSize={{ base: "xl", lg: "2xl" }} mb="2" mt="4">
            Let's Join With Us
          </Heading>
          <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
            <iframe
              //src="https://forms.office.com/r/mcKwRMivwy"
              // 2024
              src="https://forms.office.com/r/gwL4hzhSeL"
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
