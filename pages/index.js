import { Blog } from "@components/blog";
import { MetaData } from "@components/meta";
import { Resume } from "@components/sections/resume";
import { Projects } from "../components/projects";
import { api } from "./api/_api";

export default function Home({ posts, projects, settings }) {
  const hasPosts = posts.length > 0;

  return (
    <>
      <MetaData settings={settings} title='Home' />
      <Projects posts={projects} />
      <Resume mt={2} />
      {hasPosts && <Blog posts={posts} mt={5} />}
    </>
  );
}

export async function getStaticProps(context) {
  const posts = await api.posts.browse({
    filter: "tag:Blog",
    include: ["tags", "authors"],
    limit: 3,
  });
  const projects = await api.posts.browse({
    filter: "tag:Projects",
    include: ["tags", "authors"],
    limit: 8,
  });
  const settings = await api.settings.browse();
  return {
    props: { posts, projects, settings }, // will be passed to the page component as props
  };
}
