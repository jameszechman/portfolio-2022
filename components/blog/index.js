import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BlogCard } from "./blogCard";

export function Blog(props) {
  const { posts, ...rest } = props;
  const router = useRouter();
  return (
    <Box as='section' aria-label='Blog Posts' {...rest}>
      <Heading as='h2' id='#blog'>
        Recent Posts
      </Heading>
      <Divider />
      <SimpleGrid columns={[1, 1, 3]} gap={5} marginTop={5} marginBottom={5}>
        {posts?.map((post) => {
          const data = post;
          return <BlogCard key={data.id} {...data} />;
        })}
      </SimpleGrid>
      {router.asPath === "/" && (
        <Flex justifyContent={"flex-end"}>
          <Button as={Link} href='/tag/blog' colorScheme={"brand"}>
            See More
          </Button>
        </Flex>
      )}
    </Box>
  );
}
