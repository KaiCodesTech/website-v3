import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { createClient } from "next-sanity";
import { Box, Card, Grid, Paper, Stack, Typography, styled, Chip, CardActionArea } from '@mui/material';
import { PortableText } from '@portabletext/react';
import codePic from '../public/assets/code2.png';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const ProjectCard = styled(Paper)(({ theme }) => ({
    backgroundColor: '#3E72DC',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#99D178',
    position: 'relative'
}));

export default function Projects({ projects }) {

    return (
        <>
            <div>
                <Typography fontSize={45}>
                    Some Projects I Have Done.
                </Typography>
            </div>
            <main>
                <Grid container spacing={2} padding={3} sx={{zIndex: "-3"}}>
                    {projects.map((project, i) => (
                        <Grid item xs={2} md={4} sx={{ position: 'relative', minWidth: 250, minHeight: 250 }} key={i}>
                            <Link href={`/project/${project.slug.current}`} passHref>
                                <Card sx={{ position: "absolute", zIndex: '1', padding: '20px', height: "87.2%", borderRadius: '10px', width: '80%' }}>
                                    <div>
                                        <Typography fontSize={25} color={'#fff'} height={'100%'}>{project.name}</Typography>
                                        {project.tags.map((tag, i) => (<Chip label={tag} key={i} variant='filled' color='primary' style={{ margin: '5px' }} />))}
                                    </div>
                                    <Image src={codePic} fill={true} alt='Project Image' sizes='100%' style={{ objectFit: 'cover', zIndex: '-1', filter: 'brightness(40%)' }} />
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
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

    return {
        props: {
            projects
        }
    };
}