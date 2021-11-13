import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import './Apartment.css'

const Apartment = ({ service }) => {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card className='color' sx={{ maxWidth: 345, maxHeight: 500, boxShadow: 3 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={service.img}
                        alt="green iguana"
                    />
                    <CardContent sx={{ maxWidth: 345, height: 125 }}>
                        <Typography style={{ color: "white" }} gutterBottom variant="h5" component="div">
                            {service.name}
                        </Typography>
                        <Typography style={{ color: "white" }} variant="body2" color="text.secondary">
                            {service.description}
                        </Typography>
                        <Typography style={{ color: "white" }} variant="body1" color="text.secondary">
                            Price:  {service.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link style={{ textDecoration: 'none' }} to={`/purchase/${service._id}`}>
                        <Button size="larger" style={{ backgroundColor: '#c78863' }} variant='contained'>
                            Check Availability
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default Apartment;