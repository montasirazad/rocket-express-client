import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/Hook/useAuth';
import './OrderDetailsAndUpdate.css';


const OrderDetailsAndUpdate = () => {

    const [order, setOrder] = useState({});


    const { id } = useParams();
    const navigate = useNavigate()
    const { signedInUser } = useAuth();


    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                console.log(data);
            })
    }, [id])



    const handleChange = e => {
        const updatedInfo = {
            customerName: order.customerName,
            customerEmail: order.customerEmail,
            customerAge: order.customerAge,
            customerPhone: order.customerPhone,
            customerCityCorporation: order.customerCityCorporation,
            customerThana: order.customerThana,
            customerHouseNo: order.customerHouseNo,
            customerAreaBlock: order.customerAreaBlock,
            customerParcelType: order.customerParcelType,
            customerParcelWeight: order.customerParcelWeight,
            recipientsName: order.recipientsName,
            recipientsPhoneNumber: order.recipientsPhoneNumber,
            recipientsCityCorporation: order.recipientsCityCorporation,
            recipientsThanaName: order.recipientsThanaName,
            recipientsHouseNo: order.recipientsHouseNo,
            recipientsAreaBlock: order.recipientsAreaBlock,
            deliveryStatus: e.target.value,
            pickUpDate: order.pickUpDate,
            pickUpTime: order.pickUpTime,
            orderDate: order.orderDate
        }
        setOrder(updatedInfo)
        console.log(order.deliveryStatus);
    }

    const handleSubmit = e => {
        console.log(order);
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Info Updated SuccessFully');
                    navigate('/dashboard/all-order')
                }
                console.log(data);
            })

        e.preventDefault()

    }

    return (
        <div >

            <div className='detail-container'>
                <div>
                    <h4 className='text-primary'>Customer personal Information</h4> <br />
                    <p>Tracking id: {id}</p>
                    <p>Ordered on: {order.orderDate}</p>
                    <p>Customer Name: {order.customerName} </p>
                    <p>Customer Email: {order.customerEmail}</p>
                    <p>Customer Phone: {order.customerPhone}</p>
                    <p>Parcel Type: {order.customerParcelType}</p>

                    <h4 className='text-primary'>Recipient Address</h4>
                    <p>City Corporation: {order.customerCityCorporation}</p>
                    <p>Thana: {order.customerThana}</p>
                    <p>Block: {order.customerAreaBlock}</p>
                    <p>House no: {order.customerHouseNo}</p>
                    <p>Delivery Status: {

                        order.deliveryStatus === 'delivered' ? <Badge bg="success">{order.deliveryStatus}</Badge> :

                            order.deliveryStatus === 'picked' ? <Badge bg="primary">{order.deliveryStatus}</Badge> :

                                <Badge bg="danger">{order.deliveryStatus}</Badge>
                    }
                    </p>
                    <p>Change Delivery Status</p>
                    <p>Parcel Pick up time:  {order.pickUpTime} </p>
                    <p>Parcel Pick up date:  {order.pickUpDate} </p>

                </div>
                <br />
                <div>
                    <h4 className='text-primary'>Recipient Information</h4>
                    <br />
                    <p>Recipient Name: {order.recipientsName}</p>
                    <p>Recipients Phone Number: {order.recipientsPhoneNumber}</p>
                    <p>Recipients City Corporation: {order.recipientsCityCorporation}</p>
                    <p>Recipients Thana: {order.recipientsThanaName}</p>
                    <p>Recipients House No: {order.recipientsHouseNo}</p>
                    <p>Recipients Area Block: {order.recipientsAreaBlock}</p>

                </div>
            </div>


            <div className='delivery-status'>
                <form onSubmit={handleSubmit} >

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Change Delivery Status</FormLabel>


                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel onChange={handleChange} value="delivered" control={<Radio />} label="delivered" />
                            <FormControlLabel onChange={handleChange} value="picked" control={<Radio />} label="picked" />
                            <FormControlLabel onChange={handleChange} value="pending" control={<Radio />} label="pending" />
                        </RadioGroup>

                        <button className='btn btn-primary' type='submit'>SUBMIT</button>

                    </FormControl>

                </form>
            </div>

            <div className='footer-div'>
                © {new Date().getFullYear()} Rocket Express
            </div>

        </div>
    );
};

export default OrderDetailsAndUpdate;