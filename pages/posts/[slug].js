// import { MetaData } from "@components/meta";
import { Box, Container, Image } from "@chakra-ui/react";
import { GhostWrapper } from "@components/ghostWrapper";
import { MetaData } from "@components/meta";
import Head from "next/head";
import { api } from "pages/api/_api";

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
export default function Page({ post, settings }) {
  return (
    <>
      <MetaData data={post} settings={settings} type='series' />
      <Head>
        <style type='text/css'>{`${post.codeinjection_styles}`}</style>
      </Head>

      <Container
        maxW='container.md'
        as='article'
        id={post.tags?.map((e) => e.name)}
      >
        {post.feature_image ? (
          <Box
            as='figure'
            position={"relative"}
            margin={"0 calc(-30vw + 50%) 35px calc(-30vw + 50%)"}
          >
            <Image
              src={post.feature_image}
              alt={post.title}
              rounded='md'
              boxShadow='md'
              maxH={800}
              width='100%'
              objectFit={"cover"}
              objectPosition={"top"}
            />
          </Box>
        ) : null}
        <GhostWrapper {...post} />
      </Container>
    </>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const post = await api.posts.read(
    { slug: slug },
    { include: ["tags", "authors"] }
  );
  const settings = await api.settings.browse();
  return {
    props: { post, settings }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await api.posts.browse({ limit: "all", filter: "tag:Blog" });

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: "blocking" };
}
