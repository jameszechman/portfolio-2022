import { Blog } from "@components/blog";
import { MetaData } from "@components/meta";
import { Resume } from "@components/sections/resume";
import { Projects } from "../components/projects";
import { url } from "../lib";

export default function Home({ posts, projects, settings }) {
  const hasPosts = posts.data.length > 0;

  return (
    <>
      <MetaData settings={settings} title='Home' />
      <Projects posts={projects.data} />
      <Resume mt={2} />
      {hasPosts && <Blog posts={posts.data} mt={5} />}
    </>
  );
}

export async function getStaticProps() {
  const retrievePosts = await fetch(url + "/api/posts?limit=3");
  const posts = await retrievePosts.json();
  const retrieveProjects = await fetch(
    url + "/api/posts?filter=Projects&limit=8"
  );
  const projects = await retrieveProjects.json();
  const retrieveSettings = await fetch(url + "/api/settings");
  const settings = await retrieveSettings.json();
  return {
    props: { posts, projects, settings }, // will be passed to the page component as props
  };
}
