import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";
import NextLink from "next/link";

const gradients = [
  "green.200, pink.500",
  "#7928CA, #FF0080",
  "gray.300, yellow.400, pink.200",
  "#00bd56, #f9fd50",
  "#26baee, #9fe8fa",
  "#8f71ff, #8bffff",
  "#c7004c, #ffaaaa",
  "#3d6cb9, #00fff0",
  "#ff0592, #ffbee3",
];

export function BlogCard(props) {
  const url = `/posts/${props.slug}/`;
  const readingTime = readingTimeHelper(props);
  const color = useColorModeValue("gray.100", "gray.800");
  const r =
    gradients[Math.floor(Math.random() * (gradients.length - 1 - 0 + 1))];
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
      {props.feature_image ? (
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
      ) : (
        <NextLink href={url}>
          <Box w='100%' h={300} bgGradient={`linear(to-r, ${r})`} />
        </NextLink>
      )}

      <Box padding={3}>
        <Heading as='h2' size='md' marginBottom={1}>
          <NextLink href={url}>{props.title}</NextLink>
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
