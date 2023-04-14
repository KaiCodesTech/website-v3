import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { HomeRounded, PersonRounded, FolderRounded } from '@mui/icons-material';
import Image from 'next/image';

const Sider = () => {
    return (
        <Stack direction="column" className='sider' gap={2}>
            <Box className="siderHeader">
                <img src="/assets/icon.svg" alt="" className='siderHeaderImg' />
            </Box>
            <Stack direction="column" className="siderLinks" gap={1}>
                <Stack direction="row" gap={1} className='siderLink'>
                    <HomeRounded />
                    <Typography className='siderLinkText' fontSize={20}>Home</Typography>
                </Stack>
                <Stack direction="row" gap={1} className='siderLink'>
                    <PersonRounded />
                    <Typography className='siderLinkText' fontSize={20}>About Me</Typography>
                </Stack>
                <Stack direction="row" gap={1} className='siderLink'>
                    <FolderRounded />
                    <Typography className='siderLinkText' fontSize={20}>Projects</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Sider;