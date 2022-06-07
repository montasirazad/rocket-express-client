import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const FeedBack = () => {
    const [serverRes, setServerRes] = useState({});

    const [userReview, setUserReview] = useState(
        {
            userName: '',
            userFeedback: '',
            star: 0
        });

    const handleReview = e => {
        const field = e.target.name;
        const update = e.target.value;
        const newReview = { ...userReview };
        newReview[field] = update;
        setUserReview(newReview)

    }

    const handleReviewSubmit = e => {
        fetch('https://peaceful-oasis-21276.herokuapp.com/user/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    e.target.reset()
                }
                console.log(data);
                setServerRes(data)
            })


        e.preventDefault()
    }

    return (
        <div>
            <h1>Feedback</h1>
            <form onSubmit={handleReviewSubmit} >
                <input type="text" onBlur={handleReview} name="userName" id="" placeholder='Your name' /><br /> <br />
                <textarea type="text" onBlur={handleReview} rows="4" name='userFeedback' cols="50" placeholder='Your feedback' /><br /> <br />
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >

                    <Typography component="legend">Rate our service</Typography>

                    <Rating
                        name='star'
                        onChange={handleReview}
                    />
                </Box>
                <button className='btn btn-danger' type='submit'>submit</button>
            </form>

            {serverRes.acknowledged && <Alert severity="success">
                <AlertTitle>Thanks,{userReview.name}</AlertTitle>
                <strong>For your valuable feedback!</strong>
            </Alert>}

        </div>
    );
};

export default FeedBack;