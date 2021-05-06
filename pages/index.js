import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Code,
  Flex,
  Stack,
  Box,
  Link,
  Divider,
} from "@chakra-ui/react";

import Container from "../components/Container";
import ExperienceBox from "../components/ExperienceBox";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

export default function Index() {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  const iconColor = {
    light: "gray.600",
    dark: "gray.300",
  };

  const linkColor = {
    light: "blue.400",
    dark: "blue.600",
  };

  const [width, setWidth] = useState(1);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    setWidth(scrollPercentRounded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Box
        h={1}
        as="div"
        bgGradient="linear(to-r, blue.600, blue.400, green.400, green.600)"
        position="sticky"
        top={0}
        zIndex={100}
        w={`${width}%`}
      ></Box>
      <Container>
        <Head>
          <title>Home - Rahmat Subandi</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>
              Hi, I'm Rahmat Subandi, a developer, writer, and student.
            </Heading>
            <Text color={colorSecondary[colorMode]} textAlign="justify">
              I study at{" "}
              <Link
                href="https://www.mercubuana.ac.id/en"
                color={linkColor[colorMode]}
                isExternal
              >
                Mercu Buana University
              </Link>{" "}
              with an undergraduate study program majoring in Informatics
              Engineering.. My personal website is where I showcase my projects,
              writing, statistics, experience, and more. It also serves as a
              sandbox to play around with new technologies! Feel free to reach
              out via{" "}
              <Link
                href="mailto:rhmtin12@gmail.com"
                color={linkColor[colorMode]}
              >
                email
              </Link>{" "}
              or any social media with any inquiries.
            </Text>

            <Divider mb={12} mt={16} w="90%" alignSelf="center" />

            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
            >
              Featured Projects
            </Heading>
            <FeaturedProjectCard
              title="Lazadi"
              href="https://lazadi.000webhostapp.com/"
              src="/images/featuredproject/lazadi.png"
              alt="Image of lazadi"
              color={iconColor[colorMode]}
            >
              Lazadi is the first e-commerce site that I created with
              Codeigniter 3 technology. This e-commerce creation aims to deepen
              what I have learned in Codeigniter 3.
            </FeaturedProjectCard>
            <FeaturedProjectCard
              title="2Cok"
              href="https://2cok.netlify.app/"
              src="/images/featuredproject/2cok.png"
              alt="Image of 2cok"
              color={iconColor[colorMode]}
            >
              2Cok is built with the ReactJS programming language. Making this
              2cok is the final result of learning from the ReactJS bootcamp
              that I participated in in 2020.
            </FeaturedProjectCard>

            <Divider mb={12} mt={16} w="90%" alignSelf="center" />

            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
            >
              Experience
            </Heading>
            <ExperienceBox
              name="Owltech"
              years="2020 - Present"
              pos="Software Engineering Specialist"
              badge_1="Freelance"
              badge_2="Part Time"
            >
              At Owltech, I use <Code>PHP</Code>, <Code>HTML</Code> /{" "}
              <Code>CSS</Code>, <Code>JavaScript</Code>, <Code>SQL</Code> and
              several <Code>frameworks</Code> to create and update internal
              websites for Owltech and clients. I have completed 2 projects and
              more than 6 months part time or freelance work both in office and
              remote.
            </ExperienceBox>
            <ExperienceBox
              name="BNPB (Badan Nasional Penanggulangan Bencana)"
              years="2020 - 2021"
              pos="Junior Web Developer"
              badge_1="Internship"
            >
              At BNPB, I use <Code>PHP</Code>, <Code>HTML</Code> /{" "}
              <Code>CSS</Code>, <Code>JavaScript</Code>, <Code>SQL</Code> and
              several <Code>frameworks</Code> to create and update internal
              websites for BNPB. I have completed 3 projects and more than 3
              months internship work both in office and remote.
            </ExperienceBox>

            <Divider mb={12} mt={16} w="90%" alignSelf="center" />

            <Text mt={8}>
              Looks like you've made it to the end of this page... feel free to
              check out my{" "}
              <Link
                href="https://medium.com/@rhmtin12"
                isExternal
                color={linkColor[colorMode]}
              >
                Medium
              </Link>{" "}
              where you can find even more programming content.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
