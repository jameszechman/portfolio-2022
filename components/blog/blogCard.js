import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Flex,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

export function BlogCard(props) {
  const url = `/posts/${props.slug}/`;
  const readingTime = readingTimeHelper(props);
  const color = useColorModeValue("gray.100", "gray.800");
  return (
    <Flex
      id={props.id}
      rounded={"md"}
      boxShadow={"md"}
      background={color}
      overflow={"hidden"}
      transition={"0.3s ease-in-out"}
      _hover={{
        transform: "translateY(-10px)",
      }}
      direction='column'
      justifyContent={"space-between"}
    >
      {props.feature_image && (
        <NextLink href={url}>
          <Image
            // as={GatsbyImage}
            src={props.feature_image}
            height={300}
            objectFit={"cover"}
            width={"100%"}
            alt=''
          />
        </NextLink>
      )}

      <Box padding={3}>
        <Heading as='h2' size='md' marginBottom={1}>
          {props.title}
        </Heading>
        <Text noOfLines={3}>{props.excerpt}</Text>
      </Box>
      <Flex justifyContent={"space-between"} p={3}>
        <Link as={NextLink} color={"primary"} fontWeight={"bold"} href={url}>
          Read More
        </Link>
        <Text size='sm' opacity={0.3} marginBottom={0}>
          {readingTime}
        </Text>
      </Flex>
    </Flex>
  );
}
