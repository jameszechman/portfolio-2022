import { Blog } from "@components/blog";
import { MetaData } from "@components/meta";
import { Resume } from "@components/sections/resume";
import { Projects } from "../components/projects";
import { api } from "./api/_api";

export default function Home({ posts, projects, settings, resume }) {
  const hasPosts = posts.length > 0;

  return (
    <>
      <MetaData settings={settings} title='Home' />
      <Projects posts={projects} />
      <Resume mt={2} {...resume} />
      {hasPosts && <Blog posts={posts} mt={5} />}
    </>
  );
}

export async function getStaticProps(context) {
  const headers = {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
  };
  const rEmployers = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Employers?view=Grid%20view`,
    {
      headers,
    }
  ).then((res) => res.json());
  const rEducation = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Education?view=Grid%20view`,
    {
      headers,
    }
  ).then((res) => res.json());
  // const rSkills = await fetch(
  //   `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Skills?view=Grid%20view`,
  //   {
  //     headers,
  //   }
  // ).then((res) => res.json());
  // const rAwards = await fetch(
  //   `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Awards?view=Grid%20view`,
  //   {
  //     headers,
  //   }
  // ).then((res) => res.json());

  const resume = {
    // skills: rSkills.records,
    // awards: rAwards.records,
    education: rEducation.records,
    employers: rEmployers.records,
  };

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
    props: { posts, projects, settings, resume }, // will be passed to the page component as props
  };
}
