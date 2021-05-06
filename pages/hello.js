import React, { useState } from "react";
import Head from "next/head";
import { Heading, Flex, Stack, Avatar } from "@chakra-ui/react";

import Container from "../components/Container";
export default function Hello() {
  return (
    <>
      <Head>
        <title>Hello - Rahmat Subandi</title>
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Avatar
              size="2xl"
              name="Rahmat Subandi"
              src="../images/profileme.jpg"
              mr={2}
              alignSelf="center"
              my={5}
            />
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="xl"
              alignSelf="center"
            >
              Hello 👋, I'm Rahmat
            </Heading>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
