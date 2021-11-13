import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';




const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: '#ff9f80' }}>
                    <Typography variant="h6">
                        © Copyright 2021. All Rights Reserved, Apartment Cardinal, California, LA , US
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;