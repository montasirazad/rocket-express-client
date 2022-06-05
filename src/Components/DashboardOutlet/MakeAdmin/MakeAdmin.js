import React, { useState } from 'react';

const MakeAdmin = () => {


    const [email, setEmail] = useState('');

    const handleBlur = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {

        console.log(email);
        e.preventDefault();
    }

    return (
        <div>
            <h5 className='mt-2'>Make Admin</h5>

            <form className='mt-5' onSubmit={handleSubmit}>
                <input className='mt-2 form-control w-50' onBlur={handleBlur} type="text" name="" placeholder='Enter a valid e-mail address' required /> <br />
                <input className='mt-2 btn btn-success' type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default MakeAdmin;