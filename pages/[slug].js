import { Box } from "@chakra-ui/react";
import { GhostWrapper } from "@components/ghostWrapper";
import { MetaData } from "@components/meta";
import { url } from "lib";
import Head from "next/head";

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */
export default function Page({ page, settings }) {
  if (page)
    return (
      <>
        <MetaData data={page} settings={settings} type='website' />
        <Head>
          <style type='text/css'>{`${page.codeinjection_styles}`}</style>
        </Head>

        <Box as='article' id={page.tags?.map((e) => e.name)}>
          <GhostWrapper {...page} />
        </Box>
      </>
    );
  return null;
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const retrievePost = await fetch(url + "/api/pages/" + slug);
  const page = await retrievePost.json();
  const retrieveSettings = await fetch(url + "/api/settings");
  const settings = await retrieveSettings.json();
  return {
    props: { page, settings }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(url + "/api/pages");
  const pages = await res.json();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = pages.data.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: "blocking" };
}
