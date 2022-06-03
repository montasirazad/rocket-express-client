import React from 'react';
import AddService from '../../Shared/AddService/AddService';
import Footer from '../../Shared/Footer/Footer';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import MovingSlider from '../../Shared/MovingSlider/MovingSlider';
import Review from '../../Shared/Review/Review';
import Support from '../Support/Support';

const HomePage = () => {
    return (
        <div>
            <MenuItem />
            <MovingSlider />
            <AddService />
            <Support />
            <Review />
            <Footer />
        </div>
    );
};

export default HomePage; 