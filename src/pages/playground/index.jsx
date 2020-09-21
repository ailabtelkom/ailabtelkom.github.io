import {
  Box,
  Stack,
  Heading,
  Text,
  Grid,
  Link,
  Image,
  Button,
} from "@chakra-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight, FaBook } from "react-icons/fa";
const index = () => {
  const MotionBox = motion.custom(Box);
  const containerVariant = {
    start: {
      y: 20,
      opacity: 0,
      transition: { staggerChildren: 0.2 },
    },
    end: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };
  const itemVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };
  const playgrounds = [
    {
      name: "Posenet",
      url: "/playground/posenet",
      detail: "https://github.com/tensorflow/tfjs-models/tree/master/posenet",
      image:
        "https://1.bp.blogspot.com/-yRn-UAqO8Mc/XcCkQ6nKOrI/AAAAAAAAAww/H4FvoPHdg-oQJJ_-03qK5lsXXGEFRJoWwCLcBGAsYHQ/s320/p1.gif",
      desc:
        "PoseNet is a vision model that can be used to estimate the pose of a person in an image or video by estimating where key body joints are.",
      isExternal: false,
    },
    {
      name: "Monalisa Effect",
      url: "https://monalisaeffect.com/",
      detail: "https://github.com/emilyxxie/mona_lisa_eyes",
      image:
        "https://github.com/emilyxxie/mona_lisa_eyes/raw/master/demo_giphy.gif",
      desc: `Urban legend says that Mona Lisa's eyes will follow you as you move around the room. This is known as the "Mona Lisa Effect." If you enable your webcam, the eyes of this digital portrait will do just that.`,
      isExternal: true,
    },
    {
      name: "Teachable Machine",
      url: "https://teachablemachine.withgoogle.com/",
      image:
        "https://res.cloudinary.com/eyeryscom/image/upload/v1573525397/teachablemachine-20-1.gif",
      fallbackImg:
        "https://teachablemachine.withgoogle.com/assets/img/contentpage/home/teach-images.png",
      desc:
        "Teachable Machine is a web-based tool that makes creating machine learning models fast, easy, and accessible to everyone. ",
      isExternal: true,
    },
    {
      name: "Eliza Line Chatbot",
      url: "https://line.me/R/ti/p/%40537amjdd",
      detail: "https://github.com/raisoturu/eliza-line-chatbot",
      image:
        "https://media.graphcms.com/resize=w:450,fit:crop/output=format:webp/compress/4yRG5k1QAyQ7v8CVCDWg",
      desc:
        "ELIZA is an early natural language processing computer program created from 1964 to 1966 at the MIT Artificial Intelligence Laboratory by Joseph Weizenbaum.",
      isExternal: true,
    },
    {
      name: "Huggingface Zero-shot classification",
      url: "https://huggingface.co/zero-shot/",
      image: "https://huggingface.co/front/assets/huggingface_logo.svg",
      desc: "Predict topic of a text whitout training model.",
      isExternal: true,
    },
    {
      name: "Quick, Draw!",
      url: "https://quickdraw.withgoogle.com/",
      image:
        "https://gitcdn.link/cdn/Tony607/blog_statics/master/images/experience_page/quickdraw.png",
      desc: "Can a neural network learn to recognize doodling?.",
      isExternal: true,
    },
    {
      name: "Digit recognition(CNN)",
      url:
        "https://trekhleb.github.io/machine-learning-experiments/#/experiments/DigitsRecognitionCNN",
      image: "https://miro.medium.com/max/600/0*eqW1e1lV5buj8D6s.gif",
      detail:
        "https://towardsdatascience.com/interactive-machine-learning-experiments-e9b29b0cb7b9",
      desc:
        "Hand-written digits recognition using Convolutional Neural Network (CNN).",
      isExternal: true,
    },
  ];
  return (
    <MotionBox
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      initial="start"
      animate="end"
      exit="exit"
      variants={containerVariant}
      transition={{ delay: 0.1 }}
      maxW={[null, null, "2xl", "5xl"]}
      m="auto"
      my="40px"
      px={{ default: 6, md: 0 }}
    >
      <Stack pt={{ default: "1em", lg: "2em" }}>
        <Heading fontSize={{ default: "2xl", lg: "3xl" }}>
          Hey, are you curious about "What AI Looks like" IRL?
        </Heading>
        <Text mb="6">We have something for you to play with 😁</Text>
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={6}>
          {playgrounds.map((data, index) => {
            return (
              <MotionBox key={index} variants={itemVariant} borderWidth="1px">
                <Link isExternal={data.isExternal} href={data.url}>
                  <Image
                    width="350px"
                    height="200px"
                    fit="cover"
                    src={data.image}
                    fallbackSrc={data.fallbackImg}
                    alt={data.name}
                  />
                </Link>
                <Box p={2}>
                  <Link
                    isExternal={data.isExternal}
                    href={data.url}
                    fontWeight="bold"
                    fontSize={20}
                    mt={2}
                  >
                    {data.name}
                  </Link>
                  <Text>{data.desc}</Text>
                  <Stack mt={4} direction="row">
                    <Button
                      as={Link}
                      href={data.url}
                      colorScheme="yellow"
                      size="sm"
                      leftIcon={<FaArrowRight />}
                    >
                      Visit
                    </Button>
                    {data.detail && (
                      <Button
                        as={Link}
                        href={data.detail}
                        size="sm"
                        leftIcon={<FaBook />}
                      >
                        Details
                      </Button>
                    )}
                  </Stack>
                </Box>
              </MotionBox>
            );
          })}
        </Grid>
      </Stack>
    </MotionBox>
  );
};

export default index;
