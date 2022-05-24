import React from 'react';
import AddService from '../../Shared/AddService/AddService';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import MovingSlider from '../../Shared/MovingSlider/MovingSlider';
import Support from '../Support/Support';

const HomePage = () => {
    return (
        <div>
            <MenuItem />
            <MovingSlider />
            <AddService/>
            <Support/>
        </div>
    );
};

export default HomePage; 