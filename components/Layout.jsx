import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const router = useRouter()
    const location = router.pathname.split('/')
    let pathname = () => {if (router.pathname == "" || router.pathname == "/") return "Home"; else if (router.pathname == "/") }
    console.log(location)
    return (
        <Stack sx={{ height: '100%' }} direction={"column"}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <Typography color={"GrayText"} fontSize={35} textTransform={"capitalize"}>{router.pathname == "" || router.pathname == "/" ? "Home" : location}</Typography>
                <Typography color={"GrayText"} fontSize={20}>&lt;Page breadcrumb=&quot;{router.pathname}&quot; /&gt;</Typography>
            </div>
            <hr />
            <div style={{ padding: '10px'}}>
                {children}
            </div>
        </Stack>
    );
};

export default Layout;