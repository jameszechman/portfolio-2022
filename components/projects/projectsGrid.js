import { SimpleGrid } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { ProjectCard } from "./projectCard";
import { ProjectsContext } from "./projectContext";

export function ProjectsGrid(props) {
  const { filter } = useContext(ProjectsContext);
  return (
    <SimpleGrid
      columns={[1, 2, 3, 4]}
      gap={5}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    >
      <AnimatePresence>
        {props.posts?.map((post) => {
          const data = post;
          if (filter) {
            if (filter === "all")
              return <ProjectCard key={data.id} {...data} />;
            else {
              if (post.tags.some((item) => item.name === filter)) {
                return <ProjectCard key={data.id} {...data} />;
              } else {
                return null;
              }
            }
          }
          return <ProjectCard key={data.id} {...data} />;
        })}
      </AnimatePresence>
    </SimpleGrid>
  );
}
