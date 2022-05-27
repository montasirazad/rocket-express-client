import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Order.css'

const Order = (props) => {
    const { _id, customerName, pickUpDate, deliveryStatus, orderDate } = props.order;
    return (
        <div className='order-div'>
            <p>Tracking id : {_id}</p>
            <p>Customer Name: {customerName}</p>
            <p>Ordered : {orderDate}</p>
            <p>Pick up date: {pickUpDate}</p>
            <p>Delivery status : {

                    deliveryStatus === 'delivered' ? <Badge bg="success">{deliveryStatus}</Badge> :

                        deliveryStatus === 'picked' ? <Badge bg="primary">{deliveryStatus}</Badge> :

                            <Badge bg="danger">{deliveryStatus}</Badge>
                }


            </p>

            <Link to={`/dashboard/order/details/${_id}`}> <button className='btn btn-primary'>update</button></Link>
        </div>
    );
};

export default Order;