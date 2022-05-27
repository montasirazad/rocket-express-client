import React from 'react';
import { Badge } from 'react-bootstrap';
import './Order.css'

const Order = (props) => {
    const { _id, customerName, pickUpDate, deliveryStatus,orderDate } = props.order;
    return (
        <div className='order-div'>
            <p>Tracking id : {_id}</p>
            <p>Customer Name: {customerName}</p>
            <p>Ordered : {orderDate}</p>
            <p>Pick up date: {pickUpDate}</p>
            <p>Delivery status : <Badge bg="danger">{deliveryStatus}</Badge></p>
            <button className='btn btn-primary'>update</button>
        </div>
    );
};

export default Order;