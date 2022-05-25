import React from 'react';
import MenuItem from '../Shared/MenuItem/MenuItem';
import './Dashboard.css';



const Dashboard = () => {
    return (
        <>
            <MenuItem/>
            <div className='dashboard-div'>

                <div className='dashboard-drawer'>
                    <h4>Hello</h4>
                    <h4>Hello</h4>
                    <h4>Hello</h4>
                </div>

                <div className='dashboard-data'>
                    <h3>DATA</h3>
                    <h3>DATA</h3>
                    <h3>DATA</h3>
                </div>
            </div>
        </>
    );
};

export default Dashboard;