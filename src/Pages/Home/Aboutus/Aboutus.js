import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../../src/images/opacity.jpg'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    margin: 'auto',
    width: 'auto',
    height: 'auto'


}

const Aboutus = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 5, mx: 3 }} style={{ color: '#c43e00' }}>
                            What is Apartment-Cardinal?
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>

                        </Typography>
                        <Typography variant='h6' sx={{ my: 5, mx: 2 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }} >
                            What is Apartment Cardinal?
                            Appartent Cardinal helps renters find apartments. As a well-established apartment marketplace — used by more than 7,000,000 renters — Rentable makes it easy for renters to browse, filter and tour apartments that interest them. Since 2012, Rentable has expanded to more than 300 cities and become a truly nationwide apartment rental marketplace.
                        </Typography>
                        <Button sx={{ mx: 3, py: 1 }} variant="contained" style={{ backgroundColor: '#ff9f80' }}>Learn More!</Button>

                    </Box>
                </Grid>
            </Grid>
        </Box>

    );
};

export default Aboutus;