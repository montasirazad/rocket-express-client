import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/Hook/useAuth';
import MenuItem from '../Shared/MenuItem/MenuItem';
import './Dashboard.css';



const Dashboard = () => {
    const { signedInUser, admin } = useAuth();

    return (
        <div className='main-container'>
            <MenuItem />
            <div className='dashboard-div'>

                <div className='dashboard-drawer'>
                    <h5><small>Please select a option</small></h5>
                    <Link to={`/dashboard/Single/client/order/details/${signedInUser.email}`}> <p><ProductionQuantityLimitsIcon />Your order</p></Link>

                    <Link to='/dashboard/feedback'><p><RateReviewIcon /> Give feedback</p></Link>


                    {admin && <>
                        <Link to='/dashboard/make-admin'><p><SupervisorAccountIcon /> Make Admin</p></Link>

                        <Link to='/dashboard/all-order'> <p><DashboardIcon /> All Order</p></Link>
                    </>}

                </div>

                <div className='dashboard-data'>

                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;