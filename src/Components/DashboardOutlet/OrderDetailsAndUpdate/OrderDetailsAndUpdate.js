import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailsAndUpdate = () => {

    const [order, setOrder] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                console.log(data);
            })
    }, [id])

    return (
        <div>
            <h6>Customer personal Information</h6>
            <p>Tracking id: {id}</p>
            <p>Ordered on: {order.orderDate}</p>
            <p>Customer Name: {order.customerName} </p>
            <p>Customer Email: {order.customerEmail}</p>
            <p>Customer Phone: {order.customerPhone}</p>
            <p>Parcel Type: {order.customerParcelType}</p>
            <h6>Customer Address</h6>
            <p>Customer City Corporation: {order.customerCityCorporation}</p>
            <p>Thana: {order.customerThana}</p>
            <p>Block: {order.customerAreaBlock}</p>
            <p>House no: {order.customerHouseNo}</p>
            <p>Delivery Status: {order.deliveryStatus}</p>
        </div>
    );
};

export default OrderDetailsAndUpdate;