import React from "react";
import Axios from "axios";
import {
  Box,
  Heading,
  useColorModeValue,
  useColorMode,
  Spinner,
  Skeleton
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "../components/Link";
import CardAnggota from "../components/CardAnggota"
import aslab21 from "../data/aslab21";
import aslab20 from "../data/aslab20";
import { NextSeo } from "next-seo";
const member = (props) => {
  const { dataAnggota } = props
  // const [dataAnggota, setDataAnggota] = React.useState(false);
  const MotionBox = motion(Box)
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.700");
  const year = new Date().getFullYear()
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
  // React.useEffect(() => {
  //   Axios.post(
  //     "https://botIgadis.aliven.my.id/getSheetAI",
  //     {
  //       id_spreadsheet: "1SaXnuRt-1KXyDGS18KqU7cus4_IWNxpGhiVy0J1vz-U",
  //       email: "sheet-access@web-amazing-ai.iam.gserviceaccount.com",
  //       sheet_title: "web"
  //     })
  //     .then(response => { console.log(response.data); setDataAnggota(response.data.data)})
  // }, [])

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

member.getInitialProps = async () => {
  try {
    const res = await Axios.post(
      "http://raisa.aliven.my.id:5000/getSheetAI",
      {
        id_spreadsheet: "1SaXnuRt-1KXyDGS18KqU7cus4_IWNxpGhiVy0J1vz-U",
        email: "sheet-access@web-amazing-ai.iam.gserviceaccount.com",
        sheet_title: "web"
      }
      );
    return {dataAnggota: res.data.data};
  } catch (err) {
    console.log(err)
  }
}

export default member;
