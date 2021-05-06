import React from "react";
import NextLink from "next/link";
import { Flex, Link, IconButton, useColorMode } from "@chakra-ui/react";
import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiYoutube,
    FiMail,
} from "react-icons/fi";

export const Footer = () => {
    const { colorMode } = useColorMode();
    const borderIcon = {
        light: "black",
        dark: "white",
    };
    const footerHoverBg = {
        light: "gray.100",
        dark: "#333333",
    };
    return (
        <Flex
            align="center"
            mb={4}
            direction="column"
            visibility={("hidden", "visible", "visible")}
            display={["none", "flex", "flex"]}
        >
            <div>
                <Link href="https://instagram.com/rhmtin" title="Instagram" isExternal>
                    <IconButton
                        aria-label="GitHub"
                        icon={<FiInstagram />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="https://github.com/rahmatsubandi" title="GitHub" isExternal>
                    <IconButton
                        aria-label="GitHub"
                        icon={<FiGithub />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/rahmat-subandi-7238391b4"
                    title="LinkedIn"
                    isExternal
                >
                    <IconButton
                        aria-label="LinkedIn"
                        icon={<FiLinkedin />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link
                    href="https://www.youtube.com/channel/UCHXxNuytKUbfsYjRS357gtw"
                    title="YouTube"
                    isExternal
                >
                    <IconButton
                        aria-label="YouTube"
                        icon={<FiYoutube />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="mailto:rhmtin12@gmail.com" title="Email" isExternal>
                    <IconButton
                        aria-label="Email"
                        icon={<FiMail />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
            </div>
            <div>
                <NextLink href="/hello" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Hello"
                    >
                        /hello
          </Link>
                </NextLink>
            </div>
        </Flex>
    );
};
