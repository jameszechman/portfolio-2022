import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { BlogCard } from "@components/blog/blogCard";
import { MetaData } from "@components/meta";
import Pagination from "@components/pagination";
import { Projects } from "@components/projects";
import { ssrfetch, url } from "lib";
import { api } from "pages/api/_api";
import { useState } from "react";
import { useQuery } from "react-query";

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
export default function Page({ tag, posts, settings }) {
  const [page, setPage] = useState(posts.meta.pagination.page);
  const { data } = useQuery(
    [tag.name, page],
    () =>
      fetch(url + "/api/posts?filter=" + tag.name + "&page=" + page).then(
        (res) => res.json()
      ),
    {
      active: page > 1,
    }
  );

  const grid = page === 1 ? posts : data;

  const type = (tag) => {
    if (
      tag === "Projects" ||
      tag === "wordpress" ||
      tag === "gatsby" ||
      tag === "muv" ||
      tag === "zechman-design"
    )
      return "projects";
    return "blog";
  };
  return (
    <>
      <MetaData data={tag} settings={settings} type='series' />

      <Box marginBottom={8}>
        <Heading as='h1' size='2xl' color='primary' textAlign={"center"}>
          {tag.name}
        </Heading>
        {tag.description ? <Text>{tag.description}</Text> : null}
      </Box>
      {type(tag.name) === "projects" ? (
        <Projects posts={grid?.data} />
      ) : (
        <SimpleGrid
          as='section'
          columns={type(tag.name) === "projects" ? [2, 2, 3] : [1, 1, 3]}
          gap={5}
        >
          {grid?.data.map((node) => {
            return <BlogCard key={node.id} {...node} />;
          })}
        </SimpleGrid>
      )}
      <Pagination
        pageContext={grid?.meta.pagination}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const tag = await api.tags.read({ slug: slug });
  /** Retrieve Base Posts based on Tag */
  const posts = await api.posts.browse({
    filter: "tag:" + slug,
    include: ["tags", "authors"],
  });
  const settings = await api.settings.browse();
  return {
    props: { tag, posts: { data: posts, meta: posts.meta }, settings }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await api.tags.browse({ include: ["authors"] });

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: "blocking" };
}
