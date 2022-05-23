import React from 'react';
import { Carousel } from 'react-bootstrap';
import trucking from '../../../image/Trucking.jpg';
import cycle from '../../../image/cycle.jpg';
import productScaning from '../../../image/product-scaning.jpg';

const MovingSlider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 "
                        src={trucking}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-success'>
                        <h3>Enterprise Logistics Services</h3>
                        <p>Find out how Rocket Express Supply Chain can revolutionize your business as a 3PL provider.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={cycle}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Dedicated Team</h3>
                        <p>Your delivery is our first priority.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={productScaning}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Cutting-edge technology</h2>
                        <p className='text-white'>We use advanced technology to create capacity for shippers and to outperform for everyone</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MovingSlider;