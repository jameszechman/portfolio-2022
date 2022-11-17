import { Box, Button, Divider, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { ProjectsContext } from "./projectContext";
import { ProjectFilters } from "./projectFilters";
import { ProjectsGrid } from "./projectsGrid";
import { useRouter } from "next/router";

export function Projects(props) {
  const [filter, setFilter] = useState();
  const router = useRouter();

  const { posts, ...rest } = props;
  if (posts)
    return (
      <Box as='section' aria-label='Projects by James Zechman' {...rest}>
        <ProjectsContext.Provider value={{ filter, setFilter }}>
          <Flex
            justifyContent={
              router.asPath === "/" ? "space-between" : "flex-end"
            }
            alignItems={"center"}
            mb={2}
          >
            {router.asPath === "/" && (
              <Heading as='h2' id='projects' mb={0}>
                Projects
              </Heading>
            )}
            <ProjectFilters />
          </Flex>
          <Divider />
          <ProjectsGrid
            marginTop={5}
            marginBottom={5}
            posts={posts}
            filter={filter}
          />
          {router.asPath === "/" && (
            <Flex justifyContent={"flex-end"}>
              <Button as={Link} href='/tag/projects' colorScheme={"brand"}>
                See More
              </Button>
            </Flex>
          )}
        </ProjectsContext.Provider>
      </Box>
    );

  return null;
}
