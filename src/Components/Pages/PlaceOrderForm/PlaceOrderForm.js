import React, { useState } from 'react';
import { DesktopTimePicker } from '@mui/lab';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import isWeekend from 'date-fns/isWeekend';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import './PlaceOrderForm.css';



const PlaceOrderForm = () => {
    const [date, setDate] = useState(new Date());
    const [value, setValue] = useState(new Date('2018-01-01T00:00:00.000Z'));

    const handleClientInfo = (e) => {
        alert('working')
        e.preventDefault()
    }

    return (
        <div >
            <MenuItem />

            <form onSubmit={handleClientInfo} className='form-div' >

                <div className='data-div'>
                    <Box

                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h5>Please Enter Some Information</h5>
                        <TextField id="outlined-basic" label="Your Name" variant="outlined" /> <br />
                        <TextField id="filled-basic" label="Your Age" variant="outlined" /> <br />
                        <TextField id="filled-basic" label="Your Phone Number" variant="outlined" /> <br />
                        <TextField id="standard-basic" label="Your City corporation" variant="outlined" /><br />
                        <TextField id="standard-basic" label="Your Thana Name" variant="outlined" /> <br />
                        <TextField id="standard-basic" label="Your House No." variant="outlined" /><br />
                        <TextField id="standard-basic" label="Your Area Block" variant="outlined" /><br />
                        <TextField id="standard-basic" label="Your Parcel Type" variant="outlined" /><br />
                        <TextField id="standard-basic" label="Your Parcel Weight" variant="outlined" /><br />

                        <div className='calender-div'>
                            <h4>Enter Pick up date</h4>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticDatePicker

                                    displayStaticWrapperAs="desktop"
                                    openTo="day"
                                    value={date}
                                    shouldDisableDate={isWeekend}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />

                            </LocalizationProvider>

                            <TextField
                                id="time"
                                label="Enter pick up time"
                                type="time"
                                defaultValue="07:30"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                                sx={{ width: 150 }}
                            />
                        </div>

                    </Box>
                </div>

                <div  className='data-div'  >
                    <Box sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                        noValidate
                        autoComplete="off">
                        <h5>Please Enter recipients Information</h5> <br />
                        <TextField id="outlined-basic" label="Recipients Name" variant="outlined" /> <br />
                        <TextField id="filled-basic" label="Recipients Phone Number" variant="outlined" /> <br />
                        <TextField id="standard-basic" label="Recipients City corporation" variant="outlined" /><br />
                        <TextField id="standard-basic" label="Recipients Thana Name" variant="outlined" /> <br />
                        <TextField id="standard-basic" label="Recipients House No." variant="outlined" /><br />
                        <TextField id="standard-basic" label="Recipients Area Block" variant="outlined" /><br />
                    </Box>
                </div>

                <div className='agreement-div'>
                    <h5>Read this carefully before submit :</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab tenetur autem cumque velit consequuntur, harum, necessitatibus architecto corporis odit cupiditate expedita sunt facere quas doloremque? Maxime deserunt laborum reprehenderit expedita qui ratione illum, eius accusamus doloremque veniam vero, possimus ipsam harum! Ab ut itaque cumque temporibus quas libero saepe!
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