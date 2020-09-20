import React from "react";
import { Box, Heading, Text, Image, SimpleGrid, Stack } from "@chakra-ui/core";
import { motion } from "framer-motion";
import ActivitiesCard from "../components/ActivitiesCard";
import Link from "../components/Link";

const about = () => {
  const MotionBox = motion.custom(Box);
  const containerVariant = {
    start: {
      y: 20,
      opacity: 0,
      transition: { staggerChildren: 0.3 },
    },
    end: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.3 },
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
        <Stack px={{ default: 6, md: 0 }}>
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
          <Heading my="4" as="h2" fontSize={{ default: "xl", lg: "2xl" }}>
            Our activities
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
            {activities.map((data, idx) => (
              <ActivitiesCard data={data} idx={idx} key={idx} />
            ))}
          </SimpleGrid>
        </Stack>
      </MotionBox>
    </React.Fragment>
  );
};

export default about;
