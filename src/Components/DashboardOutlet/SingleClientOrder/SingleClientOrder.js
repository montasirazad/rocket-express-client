import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleClientOrder.css';


const SingleClientOrder = () => {
    const [allOrder, setAllOrder] = useState([])

    const { email } = useParams();

    useEffect(() => {

        fetch(`http://localhost:5000/single-order?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)
            })

    }, [email])

    return (
        <div className='main-order-container'>
           
            {
                allOrder.map(order => <div key={order._id} className='orders-div'>
                    <p>Name: {order.customerName}</p>
                    <p>Email: {order.customerEmail}</p>
                    <p>Tracking id: {order._id}</p>
                    {/* <p>Parcel delivery status: {order.order.deliveryStatus}</p> */}
                    <p>Address: House no: {order.customerHouseNo}, Block: {order.customerAreaBlock}</p>
                    <p>Area: {order.customerThana}</p>
                    <p>Ordered on: {order.orderDate}</p>
                    <p>Pick up time: {order.pickUpTime}</p>
                    <h5 className='text-primary'>Parcel Details</h5>
                    <p>Parcel type: {order.customerParcelType}</p>
                    <p>Parcel Weight: {order.customerParcelWeight}</p>

                    <h5 className='text-primary'>Recipient Info</h5>
                    <p>Name: {order.recipientsName}</p>
                    <p>Recipients Phone Number: {order.recipientsPhoneNumber}</p>
                    <p>Address: House no: {order.recipientsHouseNo}, Block: {order.recipientsAreaBlock}</p>
                    <p>Area: {order.recipientsThanaName}</p>
                    <p>Ordered on: {order.orderDate}</p>

                    <p>Delivery status : {

                        order.deliveryStatus === 'delivered' ?
                            <Badge bg="success">{order.deliveryStatus}</Badge> :
                            order.deliveryStatus === 'picked' ?
                                <Badge bg="primary">{order.deliveryStatus}</Badge> :
                                <Badge bg="danger">{order.deliveryStatus}</Badge>
                    }


                    </p>
                </div>)
            }
        </div>
    );
};

export default SingleClientOrder;