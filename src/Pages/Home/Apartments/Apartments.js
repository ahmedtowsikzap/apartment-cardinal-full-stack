import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://apartment-cardinal.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Box>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => services.indexOf(service) < 6 && <Apartment
                            key={service.code}
                            service={service}
                        ></Apartment>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Apartments;