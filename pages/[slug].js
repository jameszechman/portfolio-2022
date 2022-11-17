import { Box } from "@chakra-ui/react";
import { GhostWrapper } from "@components/ghostWrapper";
import { MetaData } from "@components/meta";
import Head from "next/head";
import { api } from "./api/_api";

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
  const page = await api.pages.read(
    {
      slug: slug,
    },
    { include: ["tags", "author"] }
  );
  const settings = await api.settings.browse();
  return {
    props: { page, settings }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const pages = await api.pages.browse({
    include: ["tags", "authors"],
    limit: "all",
  });

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = pages.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: "blocking" };
}
