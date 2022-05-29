import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import './TrackOrder.css';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [orderFound, setOrderFound] = useState([]);

    const handleBlur = e => {

        setOrderId(e.target.value);
        console.log(orderId);
    }

    const handleSubmit = (e) => {
        fetch(`http://localhost:5000/order/${orderId}`)
            .then(res => res.json())
            .then(data => {
                setOrderFound(data);
                e.target.reset()

            })


        e.preventDefault()
    }

    return (
        <>
            <MenuItem />
            <div className='track-order-main-container'>

                <div className='tracking-form'>
                    <form onSubmit={handleSubmit}>
                        <TextField onBlur={handleBlur} label="Enter your tracking id" variant="outlined" />

                        <Button type='submit' style={{ backgroundColor: '#3b82f6', color: 'white', border: '1px solid white' }} >
                            Track
                        </Button>
                    </form>
                </div>


                {orderFound?._id && <div className='track-info-div'>



                    <h4 className='text-primary'>Customer personal Information</h4> <br />
                    <p>Tracking id: {orderFound._id}</p>
                    <p>Ordered on: {orderFound.orderDate}</p>
                    <p>Customer Name: {orderFound.customerName} </p>
                    <p>Customer Email: {orderFound.customerEmail}</p>
                    <p>Customer Phone: {orderFound.customerPhone}</p>
                    <p>Parcel Type: {orderFound.customerParcelType}</p>
                    <p>Parcel Pick up time:  {orderFound.pickUpTime} </p>
                    <h4 className='text-primary'>Customer Address</h4>
                    <p>Customer City Corporation: {orderFound.customerCityCorporation}</p>
                    <p>Thana: {orderFound.customerThana}</p>
                    <p>Block: {orderFound.customerAreaBlock}</p>
                    <p>House no: {orderFound.customerHouseNo}</p>
                    <p>Delivery Status: {

                        orderFound.deliveryStatus === 'delivered' ? <Badge bg="success">{orderFound.deliveryStatus}</Badge> :

                            orderFound.deliveryStatus === 'picked' ? <Badge bg="primary">{orderFound.deliveryStatus}</Badge> :

                                <Badge bg="danger">{orderFound.deliveryStatus}</Badge>
                    }
                    </p>

                </div>}


            </div>
            <Footer />
        </>
    );
};

export default TrackOrder;