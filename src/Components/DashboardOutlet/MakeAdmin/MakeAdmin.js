import { Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleBlur = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        const user = { email }
        fetch('https://peaceful-oasis-21276.herokuapp.com/users-admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedCount > 0 || data.modifiedCount > 0) {
                    setSuccess(true);


                }
                e.target.reset()
                console.log(data);
            })
        e.preventDefault();
    }

    return (
        <div>
            <h5 className='mt-2'>Make Admin</h5>

            <form className='mt-5' onSubmit={handleSubmit}>
                <input className='mt-2 form-control w-50' onBlur={handleBlur} type="text" name="" placeholder='Enter a valid e-mail address' required /> <br />
                <input className='mt-2 btn btn-success' type="submit" value="SUBMIT" />
            </form>
            {
                success && < Alert severity="success" >
                    <AlertTitle>Admin added successfully</AlertTitle>

                </Alert >
            }
        </div>
    );
};

export default MakeAdmin;