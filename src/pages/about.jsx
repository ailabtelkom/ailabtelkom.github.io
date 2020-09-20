import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Divider,
  useColorModeValue,
  Stack,
  IconButton,
} from "@chakra-ui/core";
import { motion } from "framer-motion";
import Link from "../components/Link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const about = () => {
  const MotionBox = motion.custom(Box);
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
  const activities = [
    {
      name: "Study Group",
      desc:
        "Activities in this group includes studying the introduction of AI, exploring AI trends in industry and its research applications. In this study group, the members are taught a number of methods used in AI, so that later on, it can be used as their basic knowledge that can be developed in a lot of work that are related to AI.",
      image: "/img/undraw_pair_programming_njlp.svg",
    },
    {
      name: "Focus Group",
      desc:
        " This group-aims to conduct advanced AI research and publish its findings to academic journals or present it to academic conferences. In this round of year, the themes would be Computer Vision(CV) and Natural Language Processing(NLP).",
      image: "/img/undraw_images_aef7.svg",
    },
    {
      name: "Training/Workshop",
      desc:
        "Other than study and research activities, as our contribution to the society, we held some training and workshop in fields of Artificial Intelligence to reach people or students beyond the member of this lab.",
      image: "/img/undraw_predictive_analytics_kf9n.svg",
    },
  ];
  const teams = [
    {
      name: "Ade Romadhony",
      position: "Laboratory Coordinator",
      image: "https://dummyimage.com/500x500/eee/fff&text=AR",
      social: {
        linkedin: "https://id.linkedin.com/in/ade-romadhony-8a302668",
      },
    },
    {
      name: "Muhammad Alfhi Saputra",
      position: "Lab.Assistant Coordinator",
      image: "/img/aslab/alfhi.jpg",
      social: {
        linkedin: "https://id.linkedin.com/in/alfhisa",
        github: "https://github.com/alfhi24",
        instagram: "https://www.instagram.com/alfhisa_/",
      },
    },
    {
      name: "Kartika Putri Dwi Atmojo",
      position: "Secretary",
      image: "/img/aslab/tika.jpg",
      social: {
        instagram: "https://www.instagram.com/dwi.kartikaputri/",
      },
    },
    {
      name: "Muhammad Farrel",
      position: "Treasurer",
      image: "/img/aslab/farel.jpg",
      social: {
        github: "https://github.com/muhammadfarrel",
        instagram: "https://www.instagram.com/mfarrell___/",
      },
    },
    {
      name: "Dimitri Irfan Dzidny",
      position: "Internal",
      image: "/img/aslab/dimit.jpg",
      social: {
        linkedin: "https://id.linkedin.com/in/dimitriirfan",
        github: "https://github.com/dimitriirfan",
        instagram: "https://www.instagram.com/dimitriirfann/",
      },
    },
    {
      name: "Anvaqta Tangguh Wisesa",
      position: "Inventory 😎",
      image: "/img/aslab/vaq.jpg",
      social: {
        linkedin: "https://id.linkedin.com/in/anvaqta",
        github: "https://github.com/raisoturu",
        instagram: "https://www.instagram.com/anvaqta/",
      },
    },
    {
      name: "Adriansyah Dwi Rendragraha",
      position: "Focus Group",
      image: "/img/aslab/adri.jpg",
      social: {
        linkedin:
          "https://www.linkedin.com/in/adriansyahdr?originalSubdomain=id",
        instagram: "https://www.instagram.com/adriansyah.d.r/",
      },
    },
    {
      name: "Dimas Bayu Nugraha",
      position: "Study Group",
      image: "/img/aslab/dimba.jpg",
      social: {
        linkedin: "https://id.linkedin.com/in/dimbay76",
      },
    },
    {
      name: "Kriesna Bayu Pratama",
      position: "Media",
      image: "/img/aslab/kris.jpg",
      social: {
        instagram: "https://www.instagram.com/kriesnapratama/",
      },
    },
  ];
  return (
    <React.Fragment>
      <MotionBox
        initial="start"
        animate="end"
        variants={containerVariant}
        maxW={[null, null, "2xl", "5xl"]}
        m="auto"
        py="50px"
        textAlign="center"
      >
        <Image
          mt="2"
          alt="First Meet AILAB 2020"
          src="/img/firstmeet2020.jpg"
        />
        <Box px={{ default: 6, md: 0 }}>
          <Heading mt="2" fontSize={{ default: "2xl", lg: "3xl" }}>
            About Artificial Intelligence Laboratory Telkom University
          </Heading>
          <Text mt="2">
            AI Lab is a research laboratory under the Intelligence, Computing
            and Multimedia (ICM) research group. We stand in the Informatics
            Faculty at Telkom University. As a research-focused Lab, we held
            several main activities to fulfill our duty, such as Focus Group,
            Study Group, and Workshop. We located at{" "}
            <Link href="https://goo.gl/maps/JkPuorDbXQPJktyy8" isExternal>
              North Kultubai Building room E107 Telkom University
            </Link>
            .
          </Text>
          <Divider mt="2" mb="4" />
          <Heading as="h2" fontSize={{ default: "xl", lg: "2xl" }} mb="4">
            Our activities
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
            {activities.map((data, idx) => (
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
                <Image
                  alt={data.name}
                  src={data.image}
                  maxH="100px"
                  mx="auto"
                />
                <Heading as="h4" fontSize="lg">
                  {data.name}
                </Heading>
                <Text p="2" textAlign="justify">
                  {data.desc}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
          <Heading
            as="h2"
            fontSize={{ default: "xl", lg: "2xl" }}
            mt="8"
            mb="4"
          >
            Meet The Gang 👊😎
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={4}>
            {teams.map((data, idx) => (
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
                  src={data.image}
                  maxH="300px"
                  mx="auto"
                />
                <Heading as="h4" fontSize="lg">
                  {data.name}
                </Heading>
                <Text>{data.position}</Text>
                <Stack direction="row" justifyContent="center" my="2">
                  {data.social.linkedin && (
                    <Link href={data.social.linkedin}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin />}
                      />
                    </Link>
                  )}
                  {data.social.github && (
                    <Link href={data.social.github}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="LinkedIn"
                        icon={<FaGithub />}
                      />
                    </Link>
                  )}
                  {data.social.instagram && (
                    <Link href={data.social.instagram}>
                      <IconButton
                        size="sm"
                        colorScheme="yellow"
                        aria-label="LinkedIn"
                        icon={<FaInstagram />}
                      />
                    </Link>
                  )}
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </MotionBox>
    </React.Fragment>
  );
};

export default about;
