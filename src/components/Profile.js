import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="16" py="16" w="100%">
        <Text fontSize="2xl" color="gray.400">
          Tested with
        </Text>
        <Heading fontWeight="extrabold" color="cyan.500" size="3xl">
          10k+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          of Data sets and with 95% Accuracy
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Helped over 200 Differently abled people to communicate with the World
          and express their thoughts
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Soon Launching for Mobile App
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Easy Google Meet Integration
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
