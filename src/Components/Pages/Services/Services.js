import React from 'react';
import { Carousel } from 'react-bootstrap';
import receive from '../../../image/receive.png';
import walkIn from '../../../image/walk-in.png';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const Services = () => {
    return (
        <div>
            <MenuItem /> <br />
            <Carousel style={{
                width: '80%',
                height:'50%',
                margin: '0 auto',
                marginTop:'40px',
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
        </div>
    );
};

export default Services; <h1>services</h1>