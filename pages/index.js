import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { createClient } from "next-sanity";
import { Stack, Typography } from '@mui/material';
import { PortableText } from '@portabletext/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Typography fontSize={50}>
        Hi, I&apos;m Kai
      </Typography>
      <main>
        
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