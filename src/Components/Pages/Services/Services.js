import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-bootstrap';
import receive from '../../../image/receive.png';
import walkIn from '../../../image/walk-in.png';
import dhaka from '../../../image/dhaka.jpg';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import './Services.css';
import { Link } from 'react-router-dom';


const Services = () => {

    return (
        <div>
            <MenuItem /> <br />
            <Carousel style={{
                width: '80%',
                height: '50%',
                margin: '0 auto',
                marginTop: '38px',
            }}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 "
                        src={receive}
                        alt="First slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={walkIn}
                        alt="Second slide"
                    />

                </Carousel.Item>

            </Carousel>

            <div className='card-div'>

                <Card className='info-card' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={dhaka}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Express Delivery
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pick and drop in 6 hours inside Dhaka City
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Delivery charge 100 BDT 
                        </Typography>
                    </CardContent>
                    <CardActions>

                    <Link to='/place-order-form'><Button size="small">Confirm An Order</Button></Link>
                    </CardActions>
                </Card>

                <Card className='info-card' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={dhaka}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Regular Delivery
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pick and drop in 24 hours inside Dhaka City
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Delivery charge 60 BDT 
                        </Typography>
                    </CardContent>
                    <CardActions>

                        <Link to='/place-order-form'><Button size="small">Confirm An Order</Button></Link>
                    </CardActions>
                </Card>

            </div>



        </div>
    );
};

export default Services; <h1>services</h1>