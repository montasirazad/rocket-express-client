import AnnouncementIcon from '@mui/icons-material/Announcement';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import useAuth from '../../Hooks/Hook/useAuth';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import './PlaceOrderForm.css';


const PlaceOrderForm = () => {
    const { signedInUser } = useAuth()


    const initialOrderInfo = {
        customerName: signedInUser.displayName,
        customerEmail: signedInUser.email,
        customerAge: '',
        customerPhone: '',
        customerCityCorporation: '',
        customerThana: '',
        customerHouseNo: '',
        customerAreaBlock: '',
        customerParcelType: '',
        customerParcelWeight: '',
        recipientsName: '',
        recipientsPhoneNumber: '',
        recipientsCityCorporation: '',
        recipientsThanaName: '',
        recipientsHouseNo: '',
        recipientsAreaBlock: '',
        deliveryStatus: 'pending',
        pickUpDate: '',
        pickUpTime: '',
        orderDate: new Date()

    }

    const [orderInfo, setOrderInfo] = useState(initialOrderInfo)



    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...orderInfo };
        newUserInfo[field] = value;
        setOrderInfo(newUserInfo);
        // console.log(orderInfo);
    }

    const handleSubmitClientInfo = (e) => {

        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Parcel PIck up request Added successfully.');
                    e.target.reset()
                }
                console.log(data);
            })

        // console.log(orderInfo);
        e.preventDefault()
    }

    return (

        <>
            <MenuItem />
            <div >


                <form onSubmit={handleSubmitClientInfo} className='form-div' >

                    <div className='data-div'>
                        <Box

                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <h3 className='text-success'> <InfoIcon /> Please Enter Some Information</h3>
                            <TextField onBlur={handleBlur} name='customerName' id="outlined-basic" value={signedInUser.displayName || ''} variant="outlined" /> <br />
                            <TextField onBlur={handleBlur} name='customerEmail' id="outlined-basic" value={signedInUser.email || ''} variant="outlined" /> <br />
                            <TextField onBlur={handleBlur} name='customerAge' id="filled-basic" label="Your Age" variant="outlined" /> <br />
                            <TextField onBlur={handleBlur} name='customerPhone' id="filled-basic" required label="Your Phone Number" variant="outlined" /> <br />
                            <TextField onBlur={handleBlur} name='customerCityCorporation' id="standard-basic" required label="Your City corporation" variant="outlined" /><br />
                            <TextField onBlur={handleBlur} name='customerThana' id="standard-basic" required label="Your Thana Name" variant="outlined" /> <br />
                            <TextField onBlur={handleBlur} name='customerHouseNo' id="standard-basic" required label="Your House No." variant="outlined" /><br />
                            <TextField onBlur={handleBlur} name='customerAreaBlock' id="standard-basic" required label="Your Area Block" variant="outlined" /><br />
                            <TextField onBlur={handleBlur} name='customerParcelType' id="standard-basic" required label="Your Parcel Type" variant="outlined" /><br />
                            <TextField onBlur={handleBlur} name='customerParcelWeight' id="standard-basic" required placeholder='Example:50gm or .005kg' label="Your Parcel Weight" variant="outlined" /><br />

                            <div className='calender-div'>
                                <h4>Enter Pick up Date</h4>
                                <input type="date" name="pickUpDate" onChange={handleBlur} /> <br />
                                <h4>Enter Pick up Time</h4>
                                <input type="time" name="pickUpTime" onChange={handleBlur} />

                            </div>

                        </Box>
                    </div>

                    <div className='data-div'  >
                        <Box sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                            noValidate
                            autoComplete="off">
                            <h3 className='text-success'>Please Enter recipients Information</h3> <br />
                            <TextField onBlur={handleBlur} id="outlined-basic" name='recipientsName' required label="Recipients Name" variant="outlined" /> <br />
                            <TextField onBlur={handleBlur} id="filled-basic" name='recipientsPhoneNumber' required label="Recipients Phone Number" variant="outlined" /> <br />
                            <TextField onBlur={handleBlur} id="standard-basic" name='recipientsCityCorporation' required label="Recipients City corporation" variant="outlined" /><br />
                            <TextField onBlur={handleBlur} id="standard-basic" name='recipientsThanaName' required label="Recipients Thana Name" variant="outlined" /> <br />
                            <TextField onBlur={handleBlur} id="standard-basic" name='recipientsHouseNo' required label="Recipients House No." variant="outlined" /><br />
                            <TextField onBlur={handleBlur} id="standard-basic" name='recipientsAreaBlock' required label="Recipients Area Block" variant="outlined" /><br />
                        </Box>
                    </div>

                    <div className='agreement-div'>
                        <h5>< AnnouncementIcon className='text-danger' /> Read this carefully before submit :</h5>
                        <p className='text-danger'>

                            If delivery of goods is not made in the
                            quantities and/or at the time(s) specified
                            in the Purchase Order, Buyer reserves the
                            right, without liability to take either or
                            both of the following actions: (a) direc
                            t expedited routings of goods (the difference
                            in cost between the expedited routing and the
                            order routing costs shall be paid by Seller);
                            (b) cancel this order or balance by notice
                            effective when delivered to Seller; to
                            purchase substitute goods elsewhere and
                            charge Seller with any loss incurred,
                            including the difference between the cost
                            of substitute goods and the goods that would
                            have been provided by Seller.
                        </p>
                    </div>
                    <div className='agreement-button'>
                        <Button id='submit-button' type='submit' variant='contained'>submit</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PlaceOrderForm;