import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './ExploreService.css'
import { Link } from 'react-router-dom';

const ExploreService = ({ service }) => {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card className="color" sx={{ maxWidth: 345, maxHeight: 500, boxShadow: 3 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={service.img}
                        alt="green iguana"
                    />
                    <CardContent sx={{ maxWidth: 345, height: 150 }}>
                        <Typography style={{ color: "white" }} gutterBottom variant="h6" component="div" >
                            {service.name}
                        </Typography>
                        <Typography style={{ color: "white" }} gutterBottom variant="h6" component="div" >
                            {service.price}
                        </Typography>
                        <Typography style={{ color: "white" }} variant="body2" color="text.secondary">
                            {service.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link style={{ textDecoration: 'none' }} to={`/purchase/${service._id}`}>
                        <Button size="larger" style={{ backgroundColor: '#c78863' }} variant='contained'>
                            Rent/purchase
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default ExploreService;