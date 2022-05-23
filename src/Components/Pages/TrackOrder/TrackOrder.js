import React from 'react';
import { Button, TextField } from '@mui/material';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import './TrackOrder.css'

const TrackOrder = () => {
    return (
        <div className='take-order' style={{
            display: 'flex',
            width:'100vw',
            height:'100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
        }}>

            <MenuItem />
            <TextField style={{ width: '50%' }} id="outlined-basic" label="Enter your id" variant="outlined" />
            <br />
            <Button style={{ width: '50%', backgroundColor: '#3b82f6', color: 'white',border:'1px solid white' }} >
                Track
            </Button>
        </div>
    );
};

export default TrackOrder;