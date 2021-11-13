import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ExploreService from '../ExploreService/ExploreService';
import Navigation from '../../Shared/Navigation/Navigation';
import './ExploreService.css'
import ExploreBanner from '../ExploreBanner/ExploreBanner';
const ExploreServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://apartment-cardinal.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <ExploreBanner></ExploreBanner>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                Apartments Book in one Click!
            </Typography>
            <Box className='ber'>
                <Container>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <ExploreService
                                key={service.code}
                                service={service}
                            ></ExploreService>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ExploreServices;