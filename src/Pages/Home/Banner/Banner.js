import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import hand from '../../../../src/images/hand.jpg'

const verticleCenter = {

    display: 'flex',
    alignItems: 'center',
    height: 355
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid style={{ ...verticleCenter, textAlign: 'left' }} xs={12} sm={12} md={6}>
                    <Box>
                        <Typography style={{ color: 'white' }} variant="h3">
                            Need Apartment? <br />

                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 12, fontWeight: 300, color: 'white' }} >
                            We are Here With Best Deals & Offers!
                        </Typography>
                        <Button style={{ backgroundColor: "#a43e1c" }} variant="contained" size="large">Deals</Button>
                    </Box>
                </Grid>
                <Grid sx={{ mb: 10 }} style={{ ...verticleCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <img style={{ width: '100%', borderRadius: '20px' }} src={hand} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;