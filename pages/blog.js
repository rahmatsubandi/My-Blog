import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";

import Container from "../components/Container";
import { getAllFilesFrontMatter } from "../lib/mdx";
import BlogPost from "../components/BlogPost";

import { SearchIcon } from "@chakra-ui/icons";

export default function Blog({ posts }) {
  // Function Searching Blog
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogsPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMater) =>
      frontMater.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Head>
        <title>Blog - Rahmat Subandi</title>
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
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Blog ({posts.length} posts)
            </Heading>
            <InputGroup mb={5} mr={4} w="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement>
                <Tooltip
                  hasArrow
                  label="Search blog"
                  bg="gray.300"
                  color="black"
                >
                  <SearchIcon color="gray.300" />
                </Tooltip>
              </InputRightElement>
            </InputGroup>
            {!filteredBlogsPosts.length && "Sorry, post not found in here.. ☹"}
            {filteredBlogsPosts.map((frontMater) => (
              <BlogPost key={frontMater.title} {...frontMater} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  // TODO fetch blog posts
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
