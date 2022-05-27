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
        <div className='main-container'>
            <MenuItem />
            <div className='dashboard-div'>

                <div className='dashboard-drawer'>

                   <p>YOur order</p>

                    <Link to='/dashboard/feedback'><p><RateReviewIcon /> Give feedback</p></Link>
                     
                    <p><SupervisorAccountIcon /> Make Admin</p>
                    <Link to='/dashboard/all-order'> <p><DashboardIcon /> All Order</p></Link>
                </div>

                <div className='dashboard-data'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;