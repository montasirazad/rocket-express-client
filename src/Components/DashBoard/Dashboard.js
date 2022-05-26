import React from 'react';
import MenuItem from '../Shared/MenuItem/MenuItem';
import RateReviewIcon from '@mui/icons-material/RateReview';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';



const Dashboard = () => {
    return (
        <>
            <MenuItem />
            <div className='dashboard-div'>

                <div className='dashboard-drawer'>

                   <Link to='/dashboard/all-order'> <p><DashboardIcon /> All Order</p></Link>

                    <Link to='/dashboard/feedback'><p><RateReviewIcon /> Give feedback</p></Link>
                    <p><AdminPanelSettingsIcon /> Admin</p>
                    <p><SupervisorAccountIcon /> Make Admin</p>
                </div>

                <div className='dashboard-data'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;