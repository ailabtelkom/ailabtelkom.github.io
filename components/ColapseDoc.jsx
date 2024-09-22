import React from "react";
import { Box, Button, Heading, Image, Text, Collapse, Stack, Skeleton, Table, Thead, Tbody, Tr, Th, Td, SimpleGrid } from "@chakra-ui/react";
// import { motion } from "framer-motion";

const ColapseDoc = () => {
  const [showSG, setShowSG] = React.useState(true);
  const [showFG, setShowFG] = React.useState(false);
  const [showSkelton, setShowSkelton] = React.useState(false);
  const dataNIM = [
  "103052300084", "103032330103", "103052300026", "103012300483", "103012300316", "103012330009", "103052330011", "103012300394",
  "103012330104", "103012300453", "7708223080", "103012300309", "103012300328", "103012300025", "103012300105", "103012300249",
  "103012300480", "103012300397", "103012300176", "103012330401", "103052330034", "103052300082", "103012300166", "103032300013",
  "103012300463", "103052300008", "103012300012", "103012300245", "103012330023", "103052300054", "103012300018", "103012300371",
  "1301223015", "103012330264", "1301224059", "1301220409", "103012300150", "1305220010", "1302223041", "1305223033", "1301223287"];
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
                // src = "https://docs.google.com/document/d/1ySWKzz-FA5xcDXEstyJwK9xB_emXigfxOEERBSHMWVc/preview"
                // 2024 Maba
                src = "https://docs.google.com/document/d/1QS0fG4nAPzrWk8QhDblHU4V4458p_6plnkO8yfRVdCk/preview"
                width="100%"
                height="100%"
                onLoad={ () => setShowSkelton(true) }
              >Loading…</iframe>
            </Box>
          </Skeleton>
          <Heading as="h2" fontSize={{ base: "xl", lg: "2xl" }} mb="2" mt="4">
            Daftar Lolos Tes Tulis Study Group 2024
          </Heading>
          <Heading as="h4" fontSize={{ base: "md", lg: "lg" }} mt="2">
            Teman teman harap bergabung pada Microsoft Teams dengan kode berikut: 68tbr5v
          </Heading>
          
            <Box mt={8} overflowX="auto">
              
              <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={4}>
                {dataNIM.slice(0, dataNIM.length - 9).map((nim, index) => (
                  <Box
                    key={index}
                    p={4}
                    borderWidth={1}
                    borderRadius="md"
                    bg={index % 2 === 0 ? "#EAB533" : "#8F8F8F"}
                  >
                    {nim}
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          
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
{/*           <Skeleton isLoaded={showSkelton}>
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
          </Skeleton> */}
          <Heading as="h2" fontSize={{ base: "xl", lg: "2xl" }} mb="2" mt="4">
            Daftar Lolos Seleksi Berkas Focus Group 2024
          </Heading>
          <Heading as="h4" fontSize={{ base: "md", lg: "lg" }} mt="2">
            Teman teman harap bergabung pada Microsoft Teams dengan kode berikut: 68tbr5v
          </Heading>

          
          <Box mt={8} overflowX="auto">
              
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={4}>
              {dataNIM.slice(-9).map((nim, index) => (
                <Box
                    key={index}
                    p={4}
                    borderWidth={1}
                    borderRadius="md"
                    bg={index % 2 === 0 ? "#EAB533" : "#8F8F8F"}
                >
                  {nim}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          
          
{/*           <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
            <iframe
              //src="https://forms.office.com/r/mcKwRMivwy"
              // 2024
              src="https://forms.office.com/r/gwL4hzhSeL"
              width="100%"
              height="100%"
            >Loading…</iframe>
          </Box> */}
        </Box>
      </Collapse>
    </Box>
  );
};

export default ColapseDoc;
