import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import './Review.css';

const Review = () => {
    const [allReview, setAllReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user/review')
            .then(res => res.json())
            .then(data => {
                setAllReview(data)
                console.log(data)
            })
    }, [])

    return (
        <div className='mt-5'>

            <h5 className='p-2 text-center bg-success text-white'>Customer Review</h5>
            <div className='d-flex justify-content-evenly main-div'>
                {
                    allReview.map(review => <div


                        key={review._id}>

                        <div className='info-div'>

                            <div className='d-flex my-2 mx-2'>
                                <Avatar />
                                <Typography variant="h5" sx={{ mx: 2 }} component="div">
                                    {review.userName}
                                </Typography>
                            </div>
                            
                            <div>
                                <Typography variant="body2">
                                    {review.userFeedback}

                                </Typography> <br />
                                <Rating name="read-only" value={JSON.parse(review.star)} readOnly />
                            </div>

                        </div>



                    </div>)
                }
            </div>

        </div>
    );
};

export default Review;