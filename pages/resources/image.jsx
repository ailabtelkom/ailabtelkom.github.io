import { Box, Button, Link, Spinner, useColorMode } from "@chakra-ui/core";
import React from "react";
import { getCvData } from "../../utils/resourceHooks";
import Markdown from "react-markdown";
import { contentRenderer } from "../../utils/renderer";
import { FaGithub } from "react-icons/fa";
import { NextSeo } from "next-seo";
const cv = () => {
  const { data, isLoading } = getCvData();
  const { colorMode } = useColorMode();
  return (
    <Box
      pt="80px"
      pb="50px"
      maxW={[null, null, "2xl", "5xl"]}
      m="auto"
      px={{ default: 6, md: 0 }}
    >
      <NextSeo
        title="CV Resources"
        description="Data resources Computer Vision. This was made for student, researcher, who else that was doing a research or anything about Image Processing and Computer Vision."
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Markdown
            source={data.content}
            // escapeHtml={false}
            renderers={contentRenderer(colorMode)}
          />
          <Link href="https://github.com/ailabtelkom/CV-resources" isExternal>
            <Button mt="4" leftIcon={<FaGithub />} size="sm">
              Contribute
            </Button>
          </Link>
        </React.Fragment>
      )}
    </Box>
  );
};

export default cv;
