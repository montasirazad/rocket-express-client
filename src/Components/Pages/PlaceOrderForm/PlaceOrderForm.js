import AnnouncementIcon from '@mui/icons-material/Announcement';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import './PlaceOrderForm.css';


const PlaceOrderForm = () => {
    const [date, setDate] = useState(new Date());


    const initialOrderInfo = {
        customerName: '',
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
        date: date,
        pickUpTime: ''

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
        console.log(orderInfo);
        e.preventDefault()
    }

    return (
        <div >
            <MenuItem />

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
                        <TextField onBlur={handleBlur} name='customerName' id="outlined-basic" required label="Your Name" variant="outlined" /> <br />
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
                            <input type="date" name="date" onChange={handleBlur} /> <br />
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

                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit ab tenetur autem cumque velit consequuntur,
                        harum, necessitatibus architecto corporis odit cupiditate
                        expedita sunt facere quas doloremque? Maxime deserunt
                        laborum reprehenderit expedita qui ratione illum,
                        eius accusamus doloremque veniam vero, possimus ipsam
                        harum! Ab ut itaque cumque temporibus quas libero saepe!
                    </p>
                </div>
                <div className='agreement-button'>
                    <Button id='submit-button' type='submit' variant='contained'>submit</Button>
                </div>
            </form>
        </div>
    );
};

export default PlaceOrderForm;