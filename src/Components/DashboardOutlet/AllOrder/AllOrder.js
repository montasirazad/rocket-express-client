import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import './AllOrder.css'

const AllOrder = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-oasis-21276.herokuapp.com/all-order')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data);
            })
    }, [])
    return (
        <div className='all-order'>
            

            {
                orders.map(order => <Order key={order._id} order={order}> </Order>)
            }
        </div>
    );
};

export default AllOrder; 