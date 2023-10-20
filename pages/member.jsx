import React from "react";
import { promises as fs } from 'fs';
import {
  Box,
  Heading,
  useColorModeValue,
  useColorMode,
  Spinner,
  Skeleton
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import CardAnggota from "../components/CardAnggota"
import { NextSeo } from "next-seo";
const member = async (props) => {
  const file = await fs.readFile(process.cwd() + '/data/dataMember.json', 'utf8');
  const dataAnggota = JSON.parse(file);
  // const [dataAnggota, setDataAnggota] = React.useState(false);
  const MotionBox = motion(Box)
  const year = new Date().getFullYear()
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

  if (!dataAnggota) 
    return (
      <React.Fragment>
      <NextSeo
        title="About"
        description="Member of Artificial Intelligence Laboratory Telkom University"
      />
      <MotionBox
        initial="start"
        animate="end"
        variants={containerVariant}
        maxW={[null, null, "2xl", "5xl"]}
        m="auto"
        py="50px"
        textAlign="center"
      >
        <Box px={{ base: 6, md: 0 }}>
          <Heading mt="2" fontSize={{ base: "2xl", lg: "3xl" }}>
            Member of Artificial Intelligence Laboratory Telkom University
          </Heading>
          <Skeleton h="500px" m="auto" mt="2"/>
        </Box>

      </MotionBox>
      </React.Fragment>
    )
  else{
    // console.log("dataAnggota",dataAnggota)
    dataAnggota.sort(function (a, b) {
      return b.angkatan_ai - a.angkatan_ai
    })
    const tot = year - dataAnggota[dataAnggota.length - 1].angkatan_ai
    let arrYear = []
    for (let i=0; i<=tot;i++){
      arrYear.push(year-i)
    }
    return (
      <React.Fragment>
        <NextSeo
          title="About"
          description="Member of Artificial Intelligence Laboratory Telkom University"
        />
        <MotionBox
          initial="start"
          animate="end"
          variants={containerVariant}
          maxW={[null, null, "2xl", "5xl"]}
          m="auto"
          py="50px"
          textAlign="center"
        >
          <Box px={{ base: 6, md: 0 }}>
            <Heading mt="2" fontSize={{ base: "2xl", lg: "3xl" }}>
              Member of Artificial Intelligence Laboratory Telkom University
            </Heading>
            {arrYear.map((tahun,idx)=>{
              const data = dataAnggota.filter(anggota => anggota.angkatan_ai == tahun)
              if (data.length >0){
                return (
                  <Box px={{ base: 6, md: 0 }} justify="center" alignItems="center">
                    <Heading
                      as="h2"
                      fontSize={{ base: "xl", lg: "2xl" }}
                      mt="8"
                      mb="4"
                    >
                      {tahun} Generation
                    </Heading>
                    <CardAnggota dataAnggota={data} />
                  </Box>
                )
              }
            })
            }
          </Box>
        </MotionBox>
      </React.Fragment>
    );
  }
};

export default member;
