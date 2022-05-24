import { Grid, Typography } from '@mui/material';
import React from 'react';
import customerSupport from '../../../image/customer-support.jpg';


const Support = () => {
    return (
        <div>


            <Grid container spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ marginTop: '50px' }} >

                <Grid sx={{ md: 8, xs: 12, mx: 4, my: 4 }} >
                    <img src={customerSupport} style={{ height: '180px', borderRadius: '5px' }} alt="" />
                </Grid>

                <Grid style={{
                    border: '1px solid black',
                    height: '180px',
                    borderRadius: '5px',
                    backgroundColor: "black",
                    color: 'white',
                    padding:'10px'
                }}
                    sx={{ md: 8, xs: 12 }} textAlign='left' >



                    <h3>24/7 customer support</h3>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Not every customer will tell you that they are walking away unhappy — in fact, few will.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        So it is important to make sure that the customer leaves satisfied.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Ending your emails without a closing message can be risky as it is not inviting the customer to share further issues
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom component="div" >
                        issues you sincerely want to hear about.
                    </Typography>


                </Grid>
            </Grid>


        </div>
    );
};

export default Support;