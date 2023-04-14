import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { createClient } from "next-sanity";
import { Stack } from '@mui/material';
import { PortableText } from '@portabletext/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ projects, reference }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        {projects.length > 0 && projects.map((project, i) => (
          <div key={i}>
            <h2>{project.name}</h2>
            <Stack direction={"row"} gap={2}>{project.tags.map((tag, i) => (<h3 key={i}>{tag}</h3>))}</Stack>
            <PortableText value={project.desc} />
          </div>

        ))}

        <h2>projects info</h2>
        {projects.length > 0 && (
          <ul>
            {projects.map((project) => (
              <li key={project._id}>{project?.name}</li>
            ))}
          </ul>
        )}
        {!projects.length > 0 && <p>No projects to show</p>}
        {projects.length > 0 && (
          <div>
            <pre>{JSON.stringify(projects, null, 2)}</pre>
          </div>
        )}
        {!projects.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you&apos;ve configured everything
              correctly
            </p>
          </div>
        )}

        <h2>testing reference</h2>
        {reference.length > 0 && (
          <ul>
            {reference.map((reference) => (
              <li key={reference._id}>{reference?.name}</li>
            ))}
          </ul>
        )}
        {!reference.length > 0 && <p>No reference to show</p>}
        {reference.length > 0 && (
          <div>
            <pre>{JSON.stringify(reference, null, 2)}</pre>
          </div>
        )}
        {!reference.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you&apos;ve configured everything
              correctly
            </p>
          </div>
        )}
        {reference.map((reference) => (
          <div key={1}>
            <pre>{JSON.stringify(reference.featured, null, 2)}</pre>
          </div>
        ))}
      </main>
    </>
  );
}

const client = createClient({
  projectId: "9v2nhemc",
  dataset: "production",
  apiVersion: "2023-04-09",
  useCdn: false
});

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "project"]`);
  const reference = await client.fetch(`*[_type == "banner"]`);

  return {
    props: {
      projects,
      reference
    }
  };
}