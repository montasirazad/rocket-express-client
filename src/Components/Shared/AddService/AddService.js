import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddService.css';


const AddService = () => {
    return (
        <div className='add-order-div'>
            <h5>Fastest Growing Delivery company in the town</h5>
            <h3>Want to deliver a parcel ...? </h3>
            <Link to='/services'> <Button variant="danger" size="lg">Click here</Button></Link>
            
        </div>
    );
};

export default AddService;